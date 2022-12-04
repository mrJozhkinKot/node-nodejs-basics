import { createReadStream, createWriteStream } from 'fs';
import zlib from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream';

const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const gzip = zlib.createGzip();
  const r_stream = createReadStream(
    path.resolve(__dirname, 'files', 'fileToCompress.txt')
  );
  const w_stream = createWriteStream(
    path.resolve(__dirname, 'files', 'archive.gz')
  );

  pipeline(r_stream, gzip, w_stream, (err) => {
    if (err) {
      console.log(`Error: ${err}`);
    }
    console.log('Done');
  });
};

await compress();
