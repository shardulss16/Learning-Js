 
  function addTwoNumbers(number1, number2){
     let result = number1 +  number2
     return result


//can also be returned in this way
     return number1 + number2

}

const result =  addTwoNumbers(3, 4)

//  console.log("result:", result);


function loginUserMessage(username = "sam" ) {
    if(!username){
        console.log("Please Enter a Username");
        return

    }
    return `${ username } just logged in`
}

// console.log(loginUserMessage("Shardul"));


function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "shardul",
    price: 200
}

function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} nad price is ${anyobject.price}`);

}

// handleObject(user)
handleObject({
    username: "sam",
    price: 400
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[0, 2]
}

console.log(returnSecondValue(myNewArray));