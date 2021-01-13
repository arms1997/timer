const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf-8');

stdin.on('data', (key) => {
  if (Number.isInteger(Number(key))) {
    if (Number(key) < 1) {
      console.log("please provide a number between 1 and 9")
    } else {
      setTimeout(() => {
        console.log('hey')
        process.stdout.write('\x07')
      }, Number(key) * 1000)
    }
  } else {
    console.log('Please provide a number')
  }

  if (key === 'b') {
    process.stdout.write('\x07');
  }
  if (key === '\u0003') {
    console.log('Thanks for using me, ciao!')
    process.exit()
  }
})

