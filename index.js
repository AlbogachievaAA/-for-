
let cars = ["Mercedes", "BMW", "AUDI"]

//for
for ( let i = 0; i < cars.length; i++){
    cars[i] += " abc"
    console.log(cars[i]);
    
}


//for...of - цикл для массива
let fruits = ["apple", "kiwi", "banana", "orange"]
for (let element of fruits){
    // element += " aaa"
    console.log(element);
    
}



// for...in - цикл для объектов

let user = {
    name: "maga",
    age: 23,
    city: "magas"
}

for (const key in user){
    console.log(key);
    
}


// методы объекта /

let person  = {
    name: "alex",
    age: 2

}

console.log(Object.keys(person)); //[ "name", "age"]
console.log(Object.values(person));// ["alex", 2]
console.log(Object.entries(person));// i tak i tak 

// перебор массива с конца
for (let i = array[array.length-1]; i < 0; i--) {
 
}