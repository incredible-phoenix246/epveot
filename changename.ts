#!/usr/bin/env ts-node
// @ts-nocheck
const fs = require("fs");
const path = require("path");

function renameFilesInDirectory(directoryPath: string): void {
  const files = fs.readdirSync(directoryPath);

  files.forEach((file, index) => {
    const ext = path.extname(file);
    const newFileName = `image${index + 1}${ext}`;
    const oldFilePath = path.join(directoryPath, file);
    const newFilePath = path.join(directoryPath, newFileName);

    fs.renameSync(oldFilePath, newFilePath);
    console.log(`Renamed: ${file} -> ${newFileName}`);
  });
}

const directoryPath = "./public/gallery";
renameFilesInDirectory(directoryPath);
