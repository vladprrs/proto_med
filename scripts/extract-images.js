#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');
const crypto = require('crypto');

// Конфигурация
const CONFIG = {
  sourceFiles: [
    'mainpage_ui.json',
    'searchpage_ui.json', 
    'clinic_ui.json',
  ],
  outputDir: 'assets/images',
  manifestFile: 'assets/images/manifest.json',
};

// Создаем папку для изображений
if (!fs.existsSync(CONFIG.outputDir)) {
  fs.mkdirSync(CONFIG.outputDir, { recursive: true });
}

// Функция для извлечения всех URL изображений из JSON
function extractImageUrls(jsonContent) {
  const urls = new Set();
    
  // Регулярное выражение для поиска URL изображений
  const urlRegex = /https:\/\/cdn\.builder\.io\/api\/v1\/image\/assets\/TEMP\/([a-f0-9]+)\?width=(\d+)/g;
    
  let match;
  while ((match = urlRegex.exec(jsonContent)) !== null) {
    urls.add({
      url: match[0],
      hash: match[1],
      width: parseInt(match[2]),
    });
  }
    
  return Array.from(urls);
}

// Функция для скачивания изображения
function downloadImage(imageInfo) {
  return new Promise((resolve, reject) => {
    const filename = `${imageInfo.hash}_${imageInfo.width}.jpg`;
    const filepath = path.join(CONFIG.outputDir, filename);
        
    // Проверяем, существует ли файл
    if (fs.existsSync(filepath)) {
      console.log(`✓ Файл уже существует: ${filename}`);
      resolve({ ...imageInfo, filename, filepath });
      return;
    }
        
    console.log(`📥 Скачиваем: ${filename}`);
        
    const file = fs.createWriteStream(filepath);
        
    https.get(imageInfo.url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode}: ${imageInfo.url}`));
        return;
      }
            
      response.pipe(file);
            
      file.on('finish', () => {
        file.close();
        console.log(`✅ Скачано: ${filename}`);
        resolve({ ...imageInfo, filename, filepath });
      });
            
      file.on('error', (err) => {
        fs.unlink(filepath, () => {}); // Удаляем поврежденный файл
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Функция для создания placeholder изображения
function createPlaceholder(imageInfo) {
  const filename = `${imageInfo.hash}_${imageInfo.width}_placeholder.svg`;
  const filepath = path.join(CONFIG.outputDir, filename);
    
  const svg = `<svg width="${imageInfo.width}" height="${Math.round(imageInfo.width * 0.6)}" viewBox="0 0 ${imageInfo.width} ${Math.round(imageInfo.width * 0.6)}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#f0f0f0"/>
  <rect x="10%" y="10%" width="80%" height="80%" fill="#e0e0e0" rx="8"/>
  <circle cx="30%" cy="40%" r="8%" fill="#d0d0d0"/>
  <rect x="20%" y="60%" width="60%" height="8%" fill="#d0d0d0" rx="4"/>
  <rect x="20%" y="75%" width="40%" height="6%" fill="#d0d0d0" rx="3"/>
  <text x="50%" y="50%" text-anchor="middle" fill="#999" font-size="12" font-family="Arial, sans-serif">
    ${imageInfo.width}x${Math.round(imageInfo.width * 0.6)}
  </text>
</svg>`;
    
  fs.writeFileSync(filepath, svg);
  return { ...imageInfo, filename, filepath, isPlaceholder: true };
}

// Основная функция
async function main() {
  console.log('🚀 Извлекаем изображения из UI JSON файлов...\n');
    
  const allImages = new Map();
    
  // Обрабатываем каждый JSON файл
  for (const sourceFile of CONFIG.sourceFiles) {
    if (!fs.existsSync(sourceFile)) {
      console.log(`⚠️  Файл не найден: ${sourceFile}`);
      continue;
    }
        
    console.log(`📄 Обрабатываем: ${sourceFile}`);
        
    const jsonContent = fs.readFileSync(sourceFile, 'utf8');
    const images = extractImageUrls(jsonContent);
        
    console.log(`   Найдено изображений: ${images.length}`);
        
    // Добавляем изображения в общий список
    images.forEach(img => {
      const key = `${img.hash}_${img.width}`;
      if (!allImages.has(key)) {
        allImages.set(key, { ...img, sources: [sourceFile] });
      } else {
        allImages.get(key).sources.push(sourceFile);
      }
    });
  }
    
  console.log(`\n📊 Всего уникальных изображений: ${allImages.size}\n`);
    
  // Скачиваем изображения
  const downloadedImages = [];
  const failedImages = [];
    
  for (const imageInfo of allImages.values()) {
    try {
      // Сначала пытаемся скачать настоящее изображение
      const result = await downloadImage(imageInfo);
      downloadedImages.push(result);
    } catch (error) {
      console.log(`❌ Ошибка скачивания ${imageInfo.hash}: ${error.message}`);
            
      // Создаем placeholder
      const placeholder = createPlaceholder(imageInfo);
      downloadedImages.push(placeholder);
      failedImages.push({ ...imageInfo, error: error.message });
    }
        
    // Небольшая задержка между запросами
    await new Promise(resolve => setTimeout(resolve, 100));
  }
    
  // Создаем манифест
  const manifest = {
    generated: new Date().toISOString(),
    totalImages: downloadedImages.length,
    failedImages: failedImages.length,
    images: downloadedImages.map(img => ({
      hash: img.hash,
      width: img.width,
      filename: img.filename,
      sources: img.sources,
      isPlaceholder: img.isPlaceholder || false,
      localPath: `assets/images/${img.filename}`,
    })),
    failed: failedImages,
  };
    
  fs.writeFileSync(CONFIG.manifestFile, JSON.stringify(manifest, null, 2));
    
  console.log('\n✅ Готово!');
  console.log(`📁 Изображения сохранены в: ${CONFIG.outputDir}`);
  console.log(`📋 Манифест создан: ${CONFIG.manifestFile}`);
  console.log(`✅ Успешно: ${downloadedImages.length - failedImages.length}`);
  console.log(`❌ Ошибки: ${failedImages.length}`);
    
  if (failedImages.length > 0) {
    console.log('\n⚠️  Для следующих изображений созданы placeholder\'ы:');
    failedImages.forEach(img => {
      console.log(`   - ${img.hash}_${img.width}.jpg`);
    });
  }
}

// Запускаем скрипт
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { extractImageUrls, downloadImage, createPlaceholder }; 