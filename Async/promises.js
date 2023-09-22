let myPromise = new Promise(function (resolve, reject) {
    const a = 4
    const b = 4


    if (a === b) {
        resolve('fullfilled')
    } else {
        reject('not fulfilled')
    }
    // setTimeout(() => {
    //     if (a === b) {
    //         resolve('fullfilled')
    //     } else {
    //         reject('not fulfilled')
    //     }
    // }, 3000);


})

console.log(myPromise)
myPromise.then(function (res) {
    console.log(res)
})

myPromise.catch(function (err) {
    console.log(err)
})