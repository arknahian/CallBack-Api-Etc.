const promise1 = new Promise((resolve, reject) => {
    const userLeft = true;
    const watchingCatMeme = false;
    if (userLeft) {
        reject({
            name: 'User Left',
            message: ':('
        })
    }
    else if(watchingCatMeme) {
        reject('user watching cat meme');
    }
    else{
        resolve('subscribe');
    }
})

promise1.then(res => {
    console.log(res);
})
.catch(err => {
    console.log(err.name)
})