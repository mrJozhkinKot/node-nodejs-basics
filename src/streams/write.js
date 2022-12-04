import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.resolve(__dirname, 'files', 'fileToWrite.txt');
  const stream = createWriteStream(filePath, { encoding: 'utf8' });
  console.log('Please enter your text:');

  process.stdin.on('data', (data) => {
    try {
      stream.write(data);
      console.log('Done!');
      process.exit();
    } catch (error) {
      console.log(error);
    }
  });
};

await write();
