const arr = [1, 2 , 3, 4, 5]

for (const num of arr){
    // console.log(num);
}

const greetings = "Heloooo"
for (const greet of greetings){
    // console.log(`Each char is ${greet}`)
}

//Maps
const map = new Map()
map.set('IN',"India")
map.set('FR', "France")
map.set('GM', "Germany")

// console.log(map);

for (const [key, value] of map){
    // console.log(key), ':',value;
}

const coding = ["js", "ruby", "py", "java"]

    // coding.forEach( function (item) {
    //     console.log(item + 1);
    // })

/* using arrow function*/

    // coding.forEach( (item) => {
    //     console.log(item);
    // })

// function printMe (item){
//     console.log(item);
// }

// coding.forEach( printMe)

// coding.forEach

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "ruby",
        languageFileName: "rb"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
   
})