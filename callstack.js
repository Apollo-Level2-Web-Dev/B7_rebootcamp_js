function one(){
    two();
}
function two() {
    three();
}

function three(){
    console.log("Done");
}

one();

// queryBuilder -> class -> method -> 
//  const newPromise = new Promise() -> Object.entries -> class Promise {
//  resolve()}
// array -> 
// async await -> 