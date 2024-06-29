const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
    
//     return acc + currval
// }, 0)


const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "iphone",
        price: 1000
    },
    {
        itemName: "poco",
        price: 599
    },
    {
        itemName: "samsung",
        price: 999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);