import { fileURLToPath } from 'url';
import { createHash } from 'crypto';
import fs from 'fs/promises';
import path from 'path';

const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathToFile = path.resolve(
    __dirname,
    'files',
    'fileToCalculateHashFor.txt'
  );
  try {
    const content = await fs.readFile(pathToFile);
    console.log(createHash('sha256').update(content).digest('hex'));
  } catch (error) {}
};

await calculateHash();
