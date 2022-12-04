import { stdin, stdout } from 'process';
import { pipeline, Transform } from 'stream';

const transform = async () => {
  const reverse = new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.toString().trim().split('').reverse().join(''));
      callback();
    },
  });
  pipeline(stdin, reverse, stdout, (err) => {
    console.log(`Error: ${err}`);
  });
};

await transform();
