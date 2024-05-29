import imagemin from 'imagemin'
import imageminMozjpeg from 'imagemin-mozjpeg'
import fs from 'fs'
import path from 'path'

async function compressImage(inputPath, outputPath, quality) {
  try {
    // 确保输出目录存在
    const outputDir = path.dirname(outputPath)
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
    }

    const files = await imagemin([inputPath], {
      destination: outputDir,
      plugins: [imageminMozjpeg({ quality: quality })],
    })

    if (files.length > 0) {
      const compressedFile = files[0]
      fs.renameSync(compressedFile.destinationPath, outputPath)
      console.log(`Image compressed and saved to ${outputPath}`)
    } else {
      console.error('No files were compressed.')
    }
  } catch (error) {
    console.error('Error compressing image:', error)
  }
}

// 示例：压缩图片
const inputPath = `${process.cwd()}/src/assets/image/menu` // 输入图片路径
const quality = 20 // 压缩质量，0-100

const compressImageSrc = async (src) => {
  const dirs = fs.readdirSync(src)
  if (dirs.length) {
    for (let index = 0; index < dirs.length; index++) {
      const fileName = dirs[index]
      const itemPath = path.join(src, fileName)
      const temp = fs.statSync(itemPath)
      if (temp.isFile()) {
        const isAsset = fileName.split('.')[0]
        if (isAsset) {
          await compressImage(itemPath, itemPath, quality)
        }
      } else if (temp.isDirectory()) {
        compressImageSrc(itemPath)
      }
    }
  }
}

compressImageSrc(inputPath)
