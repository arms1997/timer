const args = process.argv.slice(2).map((value) => Number(value)).sort((a, b) => a - b).filter((value) => Number.isInteger(value))

const beep = function(value){
  setTimeout(()=> {
    process.stdout.write('\x07')
  }, value * 1000)
}

for(let num of args){
  beep(num)
}