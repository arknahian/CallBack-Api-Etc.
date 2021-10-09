console.log('hello world')

const promise1 = new Promise((resolve, reject) => {
    const firstVideoRecorded = false;
    if (firstVideoRecorded) {
        resolve('First video recorded already')
    }
    else{
        reject("first video hasn't recorded yet")
    }
})
const promise2 = new Promise((resolve, reject) => {
    const secondVideRecorded = true;
    if (secondVideRecorded) {
        setTimeout(() => {
            resolve('second video has recorded')
        }, 1000);
    }
    else{
        reject('second video has not recorded yet')
    }
})
const promise3 = new Promise((resolve, reject) => {
    const thirdVideoRecorded = true;
    if (thirdVideoRecorded) {
        resolve('Third video has recorded')
    }
    else{
        reject('third video has not recorded yet')
    }
})

console.log('bye')
// promise1.then(res => {
//     console.log(res);
// }).then(promise2.then(res => {
//     console.log(res)
// })).then(promise3.then(res => {
//     console.log(res)
// }))

const allPromise = async () => {
    try{
        const promiseOne = await promise1;
    console.log(promiseOne);
    const promiseTwo = await promise2
    console.log(promiseTwo);
    const promiseThree = await promise3
    console.log(promiseThree);
    }
    catch(error){
        console.log(error)
    }
}
allPromise();