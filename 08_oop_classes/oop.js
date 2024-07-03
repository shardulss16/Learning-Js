//Object literal

const user = {
    username: "shardul",
    loginCount: 9,
    signedIn: true,

    getUserDetails: function(){
        // console.log("got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this); // using this for current context

    }

}
// console.log(user.getUserDetails());
// console.log(this); //using this in global context


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("saam", 4, true)
const userTwo = new User("sim", 2 , false)

console.log(userOne);
console.log(userTwo);

