const args = process.argv.slice(2).map((value) => Number(value)).sort((a, b) => a - b).filter((value) => Number.isInteger(value))

for(let value of args){
    setTimeout(()=> {
      process.stdout.write('\x07')
    }, value * 1000)
}