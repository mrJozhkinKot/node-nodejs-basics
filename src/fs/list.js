import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const pathToFiles = path.resolve(__dirname, 'files');

  if (!existsSync(pathToFiles)) {
  }

  fs.access(pathToFiles, fs.F_OK, (err) => {
    if (err) {
      throw Error('FS operation failed');
    } else {
      fs.readdir(pathToFiles, (err, files) => {
        if (err) {
          throw err;
        } else {
          console.log(files);
        }
      });
    }
  });
};

await list();
