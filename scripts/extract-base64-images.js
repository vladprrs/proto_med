#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Конфигурация
const CONFIG = {
  sourceFiles: [
    'mainpage_ui.json',
    'searchpage_ui.json', 
    'clinic_ui.json',
  ],
  outputDir: 'assets/images/base64',
  manifestFile: 'assets/images/base64/manifest.json',
};

// Создаем папку для base64 изображений
if (!fs.existsSync(CONFIG.outputDir)) {
  fs.mkdirSync(CONFIG.outputDir, { recursive: true });
}

// Функция для извлечения base64 изображений из JSON
function extractBase64Images(jsonContent, sourceFile) {
  const images = [];
    
  // Регулярное выражение для поиска imageData массивов
  const imageDataRegex = /"imageData":\s*\[([^\]]+)\]/g;
    
  let match;
  while ((match = imageDataRegex.exec(jsonContent)) !== null) {
    try {
      // Парсим массив base64 строк
      const imageDataArray = JSON.parse(`[${match[1]}]`);
            
      imageDataArray.forEach((base64String, index) => {
        if (typeof base64String === 'string' && base64String.startsWith('/9j/')) {
          // Создаем хеш для уникального имени файла
          const hash = crypto.createHash('sha1').update(base64String).digest('hex');
                    
          // Определяем формат изображения по сигнатуре
          let extension = 'jpg'; // По умолчанию JPEG
          if (base64String.startsWith('iVBOR')) {
            extension = 'png';
          } else if (base64String.startsWith('R0lGOD')) {
            extension = 'gif';
          } else if (base64String.startsWith('UklGR')) {
            extension = 'webp';
          }
                    
          const filename = `${hash}.${extension}`;
          const filepath = path.join(CONFIG.outputDir, filename);
                    
          // Проверяем, не существует ли уже файл
          if (!fs.existsSync(filepath)) {
            try {
              // Декодируем base64 и сохраняем файл
              const buffer = Buffer.from(base64String, 'base64');
              fs.writeFileSync(filepath, buffer);
                            
              console.log(`✅ Сохранено: ${filename} (${(buffer.length / 1024).toFixed(1)}KB)`);
            } catch (error) {
              console.error(`❌ Ошибка сохранения ${filename}:`, error.message);
              return; // Пропускаем это изображение
            }
          } else {
            console.log(`⏭️  Пропущено (уже существует): ${filename}`);
          }
                    
          // Получаем размер файла
          const stats = fs.statSync(filepath);
                    
          images.push({
            hash,
            filename,
            extension,
            size: stats.size,
            sizeKB: Math.round(stats.size / 1024 * 10) / 10,
            sourceFile,
            arrayIndex: index,
            localPath: `assets/images/base64/${filename}`,
            base64Preview: `${base64String.substring(0, 50)  }...`,
          });
        }
      });
    } catch (error) {
      console.error(`❌ Ошибка парсинга imageData в ${sourceFile}:`, error.message);
    }
  }
    
  return images;
}

// Основная функция
async function main() {
  console.log('🚀 Начинаем извлечение base64 изображений из UI JSON файлов...\n');
    
  const allImages = [];
  let totalFiles = 0;
  let totalSize = 0;
    
  for (const sourceFile of CONFIG.sourceFiles) {
    if (!fs.existsSync(sourceFile)) {
      console.log(`⚠️  Файл не найден: ${sourceFile}`);
      continue;
    }
        
    console.log(`📁 Обрабатываем: ${sourceFile}`);
        
    try {
      const jsonContent = fs.readFileSync(sourceFile, 'utf8');
      const images = extractBase64Images(jsonContent, sourceFile);
            
      console.log(`   Найдено изображений: ${images.length}`);
            
      allImages.push(...images);
      totalFiles += images.length;
      totalSize += images.reduce((sum, img) => sum + img.size, 0);
            
    } catch (error) {
      console.error(`❌ Ошибка чтения ${sourceFile}:`, error.message);
    }
        
    console.log(''); // Пустая строка для разделения
  }
    
  // Создаем манифест
  const manifest = {
    generated: new Date().toISOString(),
    totalImages: totalFiles,
    totalSizeBytes: totalSize,
    totalSizeKB: Math.round(totalSize / 1024 * 10) / 10,
    totalSizeMB: Math.round(totalSize / (1024 * 1024) * 100) / 100,
    sourceFiles: CONFIG.sourceFiles,
    images: allImages.sort((a, b) => b.size - a.size), // Сортируем по размеру
  };
    
  // Сохраняем манифест
  fs.writeFileSync(CONFIG.manifestFile, JSON.stringify(manifest, null, 2));
    
  // Выводим итоговую статистику
  console.log('📊 ИТОГОВАЯ СТАТИСТИКА:');
  console.log(`   Всего изображений: ${totalFiles}`);
  console.log(`   Общий размер: ${manifest.totalSizeKB} KB (${manifest.totalSizeMB} MB)`);
  console.log(`   Манифест сохранен: ${CONFIG.manifestFile}`);
    
  // Статистика по источникам
  console.log('\n📁 По источникам:');
  CONFIG.sourceFiles.forEach(file => {
    const fileImages = allImages.filter(img => img.sourceFile === file);
    const fileSize = fileImages.reduce((sum, img) => sum + img.size, 0);
    console.log(`   ${file}: ${fileImages.length} изображений (${Math.round(fileSize / 1024 * 10) / 10} KB)`);
  });
    
  // Статистика по форматам
  console.log('\n🎨 По форматам:');
  const formatStats = {};
  allImages.forEach(img => {
    if (!formatStats[img.extension]) {
      formatStats[img.extension] = { count: 0, size: 0 };
    }
    formatStats[img.extension].count++;
    formatStats[img.extension].size += img.size;
  });
    
  Object.entries(formatStats).forEach(([format, stats]) => {
    console.log(`   .${format}: ${stats.count} файлов (${Math.round(stats.size / 1024 * 10) / 10} KB)`);
  });
    
  // Топ-5 самых больших изображений
  console.log('\n📏 Топ-5 самых больших изображений:');
  allImages.slice(0, 5).forEach((img, index) => {
    console.log(`   ${index + 1}. ${img.filename} - ${img.sizeKB} KB (${img.sourceFile})`);
  });
    
  console.log('\n✅ Извлечение base64 изображений завершено!');
}

// Запускаем скрипт
main().catch(error => {
  console.error('💥 Критическая ошибка:', error);
  process.exit(1);
}); 