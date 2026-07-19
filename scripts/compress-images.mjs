// Compression de toutes les images du site (mêmes noms de fichiers,
// donc aucun changement de code nécessaire).
// Usage : node scripts/compress-images.mjs
import sharp from 'sharp'
import { readdirSync, statSync, renameSync, unlinkSync } from 'fs'
import { join, extname } from 'path'
import { fileURLToPath } from 'url'

const ROOT = fileURLToPath(new URL('../src/assets/images', import.meta.url))

// Largeur max : suffisant pour un affichage plein écran
const MAX_DIMENSION = 1920
const JPEG_QUALITY = 80
const PNG_QUALITY = 85

function walk(dir) {
  const files = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) files.push(...walk(full))
    else files.push(full)
  }
  return files
}

let totalBefore = 0
let totalAfter = 0
let count = 0

for (const file of walk(ROOT)) {
  const ext = extname(file).toLowerCase()
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue

  const before = statSync(file).size
  const tmp = file + '.tmp'

  try {
    let img = sharp(file).rotate() // .rotate() applique l'orientation EXIF
    const meta = await sharp(file).metadata()

    if ((meta.width ?? 0) > MAX_DIMENSION || (meta.height ?? 0) > MAX_DIMENSION) {
      img = img.resize(MAX_DIMENSION, MAX_DIMENSION, { fit: 'inside' })
    }

    if (ext === '.png') {
      await img.png({ quality: PNG_QUALITY, compressionLevel: 9, palette: true }).toFile(tmp)
    } else {
      await img.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(tmp)
    }

    const after = statSync(tmp).size

    if (after < before) {
      unlinkSync(file)
      renameSync(tmp, file)
      totalBefore += before
      totalAfter += after
      count++
      if (before > 500 * 1024) {
        console.log(`${file.replace(ROOT, '')} : ${(before / 1024 / 1024).toFixed(1)} Mo -> ${(after / 1024 / 1024).toFixed(2)} Mo`)
      }
    } else {
      unlinkSync(tmp) // déjà optimale
    }
  } catch (err) {
    try { unlinkSync(tmp) } catch {}
    console.error(`ERREUR sur ${file} : ${err.message}`)
  }
}

console.log(`\n=== ${count} images compressées : ${(totalBefore / 1024 / 1024).toFixed(1)} Mo -> ${(totalAfter / 1024 / 1024).toFixed(1)} Mo ===`)
