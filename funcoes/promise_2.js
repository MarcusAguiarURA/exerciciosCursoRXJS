/**
 * Aula 30
 * Promises
 */


/*
setTimeout(() => {
   console.log("Executando callback...")
   setTimeout(() => {
       console.log("Executando callback...")
       setTimeout(() => {
           console.log("Executando callback...")
       }, 2000)
   }, 2000)
}, 2000)*/

//waitFor = (time = 2000) => 

waitFor = (time = 1000) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Executando callback...")
            resolve(time)
        }, time)
    })
}

waitFor(2000)
    .then(waitFor)
    .then(waitFor)
