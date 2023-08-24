let timer = setInterval(() => {
    console.log("heyyyyyy")
}, 2000);

setTimeout(() => {
    clearInterval(timer)
}, 8000);