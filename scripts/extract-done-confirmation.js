import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class StreamingImageExtractor {
  constructor(outputDir) {
    this.outputDir = outputDir;
    this.extractedCount = 0;
    this.processedFiles = [];
    
    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
  }

  async extractFromFile(filePath) {
    console.log(`\nProcessing: ${filePath}`);
    
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(filePath, { encoding: 'utf8' });
      let buffer = '';
      let images = [];
      
      stream.on('data', (chunk) => {
        buffer += chunk;
        
        // Look for complete imageData arrays
        let imageDataStart = buffer.indexOf('"imageData":[');
        
        while (imageDataStart !== -1) {
          // Find the matching closing bracket for this array
          let bracketCount = 0;
          let i = imageDataStart + '"imageData":['.length;
          let arrayEnd = -1;
          
          while (i < buffer.length) {
            if (buffer[i] === '[') bracketCount++;
            else if (buffer[i] === ']') {
              if (bracketCount === 0) {
                arrayEnd = i;
                break;
              }
              bracketCount--;
            }
            i++;
          }
          
          // If we found a complete array, process it
          if (arrayEnd !== -1) {
            const arrayContent = buffer.substring(imageDataStart + '"imageData":['.length, arrayEnd);
            
            // Extract individual base64 strings from the array
            const base64Regex = /"([^"]+)"/g;
            let base64Match;
            
            while ((base64Match = base64Regex.exec(arrayContent)) !== null) {
              const base64Data = base64Match[1];
              
              if (this.isValidBase64Image(base64Data)) {
                images.push(base64Data);
                this.saveBase64Image(base64Data, filePath);
              }
            }
            
            // Remove processed part from buffer
            buffer = buffer.substring(arrayEnd + 1);
            imageDataStart = buffer.indexOf('"imageData":[');
          } else {
            // Incomplete array, wait for more data
            break;
          }
        }
        
        // Keep only the last part of buffer that might contain incomplete data
        // Increased buffer size to handle large imageData arrays (can be 200KB+)
        if (buffer.length > 500000) {  // Keep reasonable buffer size (500KB)
          buffer = buffer.substring(buffer.length - 300000);
        }
      });
      
      stream.on('end', () => {
        console.log(`Extracted ${images.length} images from ${path.basename(filePath)}`);
        this.processedFiles.push({
          file: filePath,
          imagesFound: images.length
        });
        resolve(images.length);
      });
      
      stream.on('error', reject);
    });
  }

  isValidBase64Image(base64String) {
    // Check if it's a valid base64 string and appears to be an image
    if (!base64String || base64String.length < 100) return false;
    
    // Check for common image file signatures in base64
    const imageSignatures = [
      '/9j/',  // JPEG
      'iVBOR', // PNG
      'R0lGO', // GIF
      'UklGR'  // WebP
    ];
    
    return imageSignatures.some(sig => base64String.startsWith(sig));
  }

  saveBase64Image(base64Data, sourceFile) {
    try {
      // Create hash of the image content for unique filename
      const hash = crypto.createHash('sha256').update(base64Data).digest('hex').substring(0, 32);
      
      // Determine file extension based on base64 header
      let extension = 'jpg'; // default
      if (base64Data.startsWith('iVBOR')) extension = 'png';
      else if (base64Data.startsWith('R0lGO')) extension = 'gif';
      else if (base64Data.startsWith('UklGR')) extension = 'webp';
      
      const fileName = `${hash}.${extension}`;
      const filePath = path.join(this.outputDir, fileName);
      
      // Skip if file already exists
      if (fs.existsSync(filePath)) {
        return;
      }
      
      // Convert base64 to buffer and save
      const buffer = Buffer.from(base64Data, 'base64');
      fs.writeFileSync(filePath, buffer);
      
      this.extractedCount++;
      console.log(`  → Saved: ${fileName} (${Math.round(buffer.length / 1024)}KB)`);
      
    } catch (error) {
      console.error(`Error saving image from ${sourceFile}:`, error.message);
    }
  }

  async processAllFiles(jsonFiles) {
    console.log('🎯 Starting streaming image extraction from done.json and confirmation.json...\n');
    
    for (const file of jsonFiles) {
      if (fs.existsSync(file)) {
        await this.extractFromFile(file);
      } else {
        console.log(`⚠️  File not found: ${file}`);
      }
    }
    
    this.printSummary();
  }

  printSummary() {
    console.log('\n' + '='.repeat(50));
    console.log('📊 EXTRACTION SUMMARY');
    console.log('='.repeat(50));
    
    this.processedFiles.forEach(file => {
      console.log(`${path.basename(file.file)}: ${file.imagesFound} images`);
    });
    
    console.log(`\nTotal images extracted: ${this.extractedCount}`);
    console.log(`Output directory: ${this.outputDir}`);
    console.log('✅ Extraction complete!');
  }
}

// Main execution
async function main() {
  const outputDir = path.join(__dirname, '..', 'public', 'assets', 'images', 'extracted');
  const jsonFiles = [
    'done.json',
    'confirmation.json'
  ].map(file => path.join(__dirname, '..', file));

  const extractor = new StreamingImageExtractor(outputDir);
  await extractor.processAllFiles(jsonFiles);
}

// Run if called directly
main().catch(console.error);

export default StreamingImageExtractor; 