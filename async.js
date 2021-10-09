const taskOne = () => {
    console.log("Task one is completed");
}
const taskTwo = () => {
    setTimeout(() => {
        console.log('task two is loading...');
    }, 0);
}
const taskThree = () => {
    console.log('task three is completed');
}
taskOne();
taskTwo();
taskThree();