#!/usr/bin/env ts-node

import * as fs from 'fs'
import * as path from 'path'

const directoryPath = './public/gallery'
const outputPath = 'gallery.ts'

function writeGalleryFile(directoryPath: string, outputPath: string): void {
  const files = fs.readdirSync(directoryPath)

  const galleryPaths = files.map((file) => `gallery/${file}`)

  const fileContent = `export const gallery = ${JSON.stringify(
    galleryPaths,
    null,
    2
  )};\n`

  fs.writeFileSync(outputPath, fileContent, 'utf-8')
  console.log(`Gallery paths written to ${outputPath}`)
}

writeGalleryFile(directoryPath, outputPath)
