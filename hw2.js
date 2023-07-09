let promise = new Promise(function (resolve) {
    setTimeout(function () {
    resolve('Promise resolved')}, 3000); 
});

async function asyncFunc() {
 
    let result = await promise; 

    console.log(result);
    console.log('hello');
}

asyncFunc()