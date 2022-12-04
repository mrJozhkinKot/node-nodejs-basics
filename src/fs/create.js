import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathToFile = path.resolve(__dirname, 'fresh.txt');

  fs.access(pathToFile, fs.F_OK, (err) => {
    if (err) {
      fs.writeFile(pathToFile, `I am fresh and young`, (err) => {
        if (err) throw err;
      });
    } else {
      throw Error('FS operation failed');
    }
  });
};

await create();
