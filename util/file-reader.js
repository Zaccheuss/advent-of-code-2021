import path from 'path'
import fs from 'fs'

export function inputFile(fileName = 'input.txt', split = '\n') {
  const file = path.resolve(fileName);
  const buffer = fs.readFileSync(file, 'utf8');

  return split ? buffer.split(split) : buffer;
}