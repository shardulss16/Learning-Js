const promiseOne = new Promise(function(resolve, reject){
    //Do an Async task
    setTimeout(function (){
        console.log('Async task is complete');
        resolve()
    }, 1000)
}) 

promiseOne.then(function(){
    // console.log("Promise done");
})


const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 2000)
}).then(function(){
    // console.log("async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Shardul", email: "abc@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "shardul", password: "123" })
            
        } else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(() => console.log("the promise is either resolved or rejected"))