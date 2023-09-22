const fs = require('fs')

console.log('first line')

fs.readFile('file1.txt', cb1)
function cb1(err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log('file1->data' + data)
    }
}

fs.readFile('file2.txt', cb2)
function cb2(err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log('file1->data' + data)
    }
}

console.log('last line')