import { createReadStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.resolve(__dirname, 'files', 'fileToRead.txt');
  try {
    const stream = createReadStream(filePath, { encoding: 'utf8' });
    stream.on('data', (chunk) => {
      process.stdout.write(chunk);
    });
  } catch (error) {
    console.log(error.message);
  }
};

await read();
