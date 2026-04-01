// const add = (a,b) => a+b;


// const sum = add(5,8);
// console.log(sum);

//template string
// const name = "Shafayat";
// console.log(`Hello ${name}`)

// const user = {
//     name: "Shafayat",
//     age: 130
// }
// // destructuring - vanga venge venge property neya
// const {name} = user;

// // console.log(user.name);
// // console.log(user[`age`]);
// console.log(name);

// spread -- chhorano
const arr = [1,2,3,4,5];
const newArr = [...arr,5,4,3,2,1];
// console.log(arr,newArr);
console.log(arr.map((n)=>n*2));