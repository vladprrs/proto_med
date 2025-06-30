import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class ImageDataRemover {
  constructor() {
    this.processedFiles = [];
  }

  async removeImageDataFromFile(filePath) {
    console.log(`\nProcessing: ${filePath}`);
    
    return new Promise((resolve, reject) => {
      const inputStream = fs.createReadStream(filePath, { encoding: 'utf8' });
      const outputPath = `${filePath  }.tmp`;
      const outputStream = fs.createWriteStream(outputPath, { encoding: 'utf8' });
      
      let buffer = '';
      let removedArrays = 0;
      
      inputStream.on('data', (chunk) => {
        buffer += chunk;
        
        // Process complete imageData arrays
        let imageDataStart = buffer.indexOf('"imageData":[');
        
        while (imageDataStart !== -1) {
          // Write everything before imageData
          outputStream.write(buffer.substring(0, imageDataStart));
          
          // Find the matching closing bracket for this array
          let bracketCount = 0;
          let i = imageDataStart + '"imageData":['.length;
          let arrayEnd = -1;
          
          while (i < buffer.length) {
            if (buffer[i] === '[') {
              bracketCount++;
            } else if (buffer[i] === ']') {
              if (bracketCount === 0) {
                arrayEnd = i;
                break;
              }
              bracketCount--;
            }
            i++;
          }
          
          // If we found a complete array, replace it with empty array
          if (arrayEnd !== -1) {
            outputStream.write('"imageData":[]');
            removedArrays++;
            
            // Update buffer to continue from after the array
            buffer = buffer.substring(arrayEnd + 1);
            imageDataStart = buffer.indexOf('"imageData":[');
          } else {
            // Incomplete array, wait for more data
            break;
          }
        }
        
        // Keep buffer size reasonable
        if (buffer.length > 500000) {
          // Write part of buffer that doesn't contain imageData
          const safeEnd = buffer.length - 100000;
          const safeBuffer = buffer.substring(0, safeEnd);
          
          // Make sure we don't cut in the middle of imageData
          const lastImageDataStart = safeBuffer.lastIndexOf('"imageData"');
          if (lastImageDataStart !== -1 && lastImageDataStart > safeEnd - 50) {
            // Keep everything from the last imageData occurrence
            const keepFrom = lastImageDataStart;
            outputStream.write(buffer.substring(0, keepFrom));
            buffer = buffer.substring(keepFrom);
          } else {
            outputStream.write(safeBuffer);
            buffer = buffer.substring(safeEnd);
          }
        }
      });
      
      inputStream.on('end', () => {
        // Write remaining buffer
        outputStream.write(buffer);
        outputStream.end();
        
        outputStream.on('finish', () => {
          // Replace original file with cleaned version
          fs.renameSync(outputPath, filePath);
          
          console.log(`✅ Removed ${removedArrays} imageData arrays from ${path.basename(filePath)}`);
          this.processedFiles.push({
            file: filePath,
            removedArrays,
          });
          resolve(removedArrays);
        });
      });
      
      inputStream.on('error', reject);
      outputStream.on('error', reject);
    });
  }

  async processAllFiles(jsonFiles) {
    console.log('🧹 Starting imageData removal from done.json and confirmation.json...\n');
    
    for (const file of jsonFiles) {
      if (fs.existsSync(file)) {
        await this.removeImageDataFromFile(file);
      } else {
        console.log(`⚠️  File not found: ${file}`);
      }
    }
    
    this.printSummary();
  }

  printSummary() {
    console.log(`\n${  '='.repeat(50)}`);
    console.log('📊 REMOVAL SUMMARY');
    console.log('='.repeat(50));
    
    let totalRemoved = 0;
    this.processedFiles.forEach(file => {
      console.log(`${path.basename(file.file)}: ${file.removedArrays} imageData arrays removed`);
      totalRemoved += file.removedArrays;
    });
    
    console.log(`\nTotal imageData arrays removed: ${totalRemoved}`);
    console.log('✅ Cleanup complete!');
  }
}

// Main execution
async function main() {
  const jsonFiles = [
    'done.json',
    'confirmation.json',
  ].map(file => path.join(__dirname, '..', file));

  const remover = new ImageDataRemover();
  await remover.processAllFiles(jsonFiles);
}

// Run if called directly
main().catch(console.error);

export default ImageDataRemover; 