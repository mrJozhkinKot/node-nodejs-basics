import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const pathToFile = path.resolve(__dirname, 'files', 'fileToRead.txt');

  fs.access(pathToFile, fs.F_OK, (err) => {
    if (err) {
      throw Error('FS operation failed');
    }
    return fs.readFile(pathToFile, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        throw error;
      }
      console.log(data);
    });
  });
};

await read();
