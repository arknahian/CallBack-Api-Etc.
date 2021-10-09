const taskOne = (callback) => {
    console.log("Task one is completed");
    callback();
}
const taskTwo = (callback) => {
    setTimeout(() => {
        console.log('task two is loading...');
        callback();
    }, 1000);
}
const taskThree = (callback) => {
    console.log('task three is completed');
    callback();
}
const taskFour = () => {
    console.log('task four is completed');
}

taskOne(() => {
    taskTwo(() => {
        taskThree(() => {
            taskFour()
        })
    });
})