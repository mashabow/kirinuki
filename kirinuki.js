#!/usr/bin/env node

// Usage: kirinuki.sh foo.json [bar.json ...]
//
// 切り抜きデータ JSON から、実際に画像を切り抜く
//
// - 切り抜きデータ JSON と元画像は、同じディレクトリに入れておくこと
// - ImageMagick のインストールが必要

const childProcess = require('child_process');
const fs = require('fs');

const jsonRE = /\.json$/;

process.argv.slice(2).forEach(jsonFile => {
  if (!jsonFile.match(jsonRE)) {
    console.error(`Invalid file: ${jsonFile}`);
    process.exit(1);
  }

  const crops = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));
  crops.forEach(({ rotate, width, height, x, y }, i) => {
    const inputFile = jsonFile.replace(jsonRE, '.jpg');
    const outputFile = jsonFile.replace(
      jsonRE,
      `-${(i + 1).toString().padStart(2, '0')}.jpg`,
    );
    console.log(`${inputFile} -> ${outputFile}`);

    childProcess.execFileSync('magick', [
      inputFile,
      '-rotate',
      rotate,
      '+repage', // 回転後の画像の左上を基準に crop するために必要
      '-crop',
      `${width}x${height}+${x}+${y}`,
      outputFile,
    ]);
  });
});
