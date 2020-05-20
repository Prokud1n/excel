console.log('Module.js');

async function start() {
  return await Promise.resolve('async workiiing !');
}

start().then(console.log);
