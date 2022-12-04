import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const pathToFile = path.resolve(__dirname, 'files', 'wrongFilename.txt');
  const newPathToFile = path.resolve(__dirname, 'files', 'properFilename.md');

  fs.access(pathToFile, fs.F_OK, (err) => {
    if (err) {
      throw Error('FS operation failed');
    }
  });

  fs.access(newPathToFile, fs.F_OK, (err) => {
    if (err) {
      fs.rename(pathToFile, newPathToFile, (err) => {
        if (err) {
          throw err;
        }
      });
    } else {
      throw Error('FS operation failed');
    }
  });
};

await rename();
