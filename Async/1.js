const fs = require('fs')

console.log('First Line')

// let data = fs.readFileSync('file1.txt')
// console.log(`file 1 data -> ${data}`)

// let data2 = fs.readFileSync('file2.txt')
// console.log(`file 2 data -> ${data2}`)

fs.readFile('file1.txt', (err, data) => {
    console.log(`this is file1  ${data}`)
    fs.readFile('file2.txt', (err, data) => {
        console.log(`this is file2  ${data}`)
    })
    fs.readFile('file3.txt', (err, data) => {
        console.log(`this is file3  ${data}`)
    })
})






console.log('Last line')