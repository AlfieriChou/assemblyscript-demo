const loader = require('@assemblyscript/loader')
const fs = require('fs')

const bootstrap = async () => {
  const instance = await loader.instantiate(
    fs.readFileSync('./build/prime.wasm'),
    {}
  )
  
  console.log('5: ', instance.exports.isPrime(5))
  console.log('6: ', instance.exports.isPrime(6))
}

bootstrap()
