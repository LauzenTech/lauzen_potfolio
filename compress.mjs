import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function compressAllPngs() {
  const publicDir = 'public';
  const files = fs.readdirSync(publicDir).filter(file => file.endsWith('.png'));

  for (const file of files) {
    const filePath = path.join(publicDir, file);
    const webpPath = path.join(publicDir, file.replace('.png', '.webp'));
    
    try {
      console.log(`Compressing ${file}...`);
      await sharp(filePath)
        .webp({ quality: 75 })
        .toFile(webpPath);
      
      const stats = fs.statSync(webpPath);
      console.log(`Successfully compressed to ${file.replace('.png', '.webp')} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
    } catch (error) {
      console.error(`Error compressing ${file}:`, error);
    }
  }
}

compressAllPngs();
