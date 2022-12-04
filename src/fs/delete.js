import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const pathToFile = path.resolve(__dirname, 'files', 'fileToRemove1.txt');

  fs.access(pathToFile, fs.F_OK, (err) => {
    if (err) {
      throw Error('FS operation failed');
    }
    fs.rm(pathToFile, (err) => {
      if (err) throw err;
    });
  });
};

await remove();
