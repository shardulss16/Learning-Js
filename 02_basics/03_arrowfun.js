const username  = {
    username: "silas",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// username.welcomeMessage()
// username.username = "sam"
// username.welcomeMessage()

const  one = () => {
    let username = "shardul"
    console.log(this);

}
// one()

// Implicit method arrow function

// const addTwo = (num1, num2) =>  num1 + num2

//** returning object in arrow func */
const addTwo = (num1,  num2) => ({username: "shardul"})

console.log(addTwo(3, 4));