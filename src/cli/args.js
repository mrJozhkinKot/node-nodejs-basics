const parseArgs = () => {
  const args = process.argv.slice(2);
  const result = {};
  let str = '';

  for (let i = 0; i < args.length; i++) {
    result[args[i]] = args[i + 1];
    i++;
  }
  for (const [key, value] of Object.entries(result)) {
    str += `${key} is ${value}`;
    if (Object.keys(result).pop !== key) {
      str += ', ';
    }
  }
  console.log(str);
};

parseArgs();
