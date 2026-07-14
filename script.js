
let variable = "this is my variable declared with let";
const constant = "this variable can never change";

let object = {
    name: "Calvin",
    age: 17,
    brother:{
        name:"Cody",
        age: 23,
    }
}

//optional chaining allows me to check if the name attribute is there without throwing an error if it isn't
let brother = object.brother?.name;
alert(brother); //"Cody"

//nullish coalescing so if no age is provided it will default to 18
let age = object.age ?? 18;
alert(age); //17

//arrow function allows you to write a function in just 1 line or write a function without a name
let func = (num1, num2) =>{return num1 + num2;}
alert(func(1,3));//4

//the prompt says no console errors but I can't see the console for some reason so I will just hope there aren't any errors