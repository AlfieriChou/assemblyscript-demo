const fs = require('fs')

const compiled = new WebAssembly.Module(fs.readFileSync(__dirname + '/build/prime.wasm'))
const { isPrime } = new WebAssembly.Instance(compiled).exports

console.log('5: ', isPrime(5))
console.log('6: ', isPrime(6))
