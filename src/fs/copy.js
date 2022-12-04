import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const pathToFileSource = path.resolve(__dirname, 'files');
  const pathToFileDest = path.resolve(__dirname, 'files_copy');

  const copyFiles = async () => {
    fs.mkdir(pathToFileDest, (err) => {
      if (err) {
        throw err;
      }
    });
    fs.readdir(pathToFileSource, (err, files) => {
      if (err) {
        throw err;
      } else {
        files.forEach((file) => {
          fs.copyFile(
            path.resolve(pathToFileSource, file),
            path.resolve(pathToFileDest, file),
            (err) => {
              if (err) {
                throw err;
              }
            }
          );
        });
      }
    });
  };

  fs.access(pathToFileSource, fs.F_OK, (err) => {
    if (err) {
      throw Error('FS operation failed');
    }
  });

  fs.access(pathToFileDest, fs.F_OK, (err) => {
    if (err) {
      copyFiles();
    } else {
      throw Error('FS operation failed');
    }
  });
};

copy();
