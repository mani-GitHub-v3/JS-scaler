let myPromise = new Promise((resolve, reject) => {
    let a = 8
    let b = 8

    if (a === b) {
        resolve("resolved")
    } else {
        reject("rejected")
    }
})

myPromise.then((res) => {
    console.log(res)
})