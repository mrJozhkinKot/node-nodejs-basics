const parseEnv = () => {
  let result = [];
  Object.keys(process.env).forEach((key) => {
    if (key.split('_')[0] === 'RSS') {
      result.push(`${key}=${process.env[key]}`);
    }
  });
  console.log(result.join('; '));
};

parseEnv();
