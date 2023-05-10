//Primitives

let age: number;
age = 23;

console.log(age);

let uname: string; //for a single string value
uname = "Maxie";

let isDev: boolean;
isDev = true;

//More complex types


let hobbies: string[];   //for an array of values. 
hobbies = ['one', 'two'];


let person: {
    name: string,
    age: number,
}

person = {
    name : "Maxie",
    age : 32,
}

//Type Inference //typescript guessing type of a variable without us wriring its type

//Type Alias

type Person= {
    name: string,
    age: number,
}

let people:Person;

people = {
    name : "Maxie",
    age : 32,
}

let org: Person[];
