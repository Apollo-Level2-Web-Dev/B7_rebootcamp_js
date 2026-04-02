// const posts = [
//     {id: 1, user: "Shafayat", likes: 10},
//     {id: 2, user: "Rahim", likes: 5}
// ];

// const fruits = ['apple', "banana", "mango"];

// for(let i = 0; i<fruits.length; i++) {
//     console.log(fruits[i]);
// }

// for(const fruit of fruits){
//     console.log(fruit)
// }

// fruits.forEach((fruit)=>{
//     console.log(fruit);
// })

const user = {
    name: "Shafayat",
    team: "Next Level Team",
    age: 130
}

// for(const [key,value] of Object.entries(user)){
//     console.log(key, value);
// }

// console.log(Object.entries(user))
// console.log(Object.keys(user));
// console.log(Object.values(user));

// const numbers = [1,2,3,4,5];
// const doubles = numbers.map(num=>num**2);
//  console.log(doubles);

//  const even = numbers.filter(n=>n%2==0);
//  console.log(even);
// const even = numbers.find(n=>n%2==0);
//  console.log(even);

// const sum = numbers.reduce((acc, curr)=> acc*curr,10);

// console.log(sum)

/* 
this is a comment 
multiline comment
*/

// const products = [
//     {
//         name: "Phone", price: 100
//     },
//     {
//         name: "Laptop", price: 1000
//     },
//     {
//         name: "Mouse", price: 20
//     }
// ]

// const nameArr = products.map((pro)=>pro.name);

// console.log(nameArr);

// return `<p>${p.name}</p>`

const result = [1,2,3,4].map(num=>{
    if(num>1)return num;
})

console.log(result);