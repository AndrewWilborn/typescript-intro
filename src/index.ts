
// Implicit typing
let fName = 'bob'

// This will give a type error
// fName = 4

// Explicit typing
let lName: string | number = 'smith'

lName = 5
// Will give type error
//lName = null;

import {sum} from "./typePractice"

sum({ num1: 5, num2: 9, message: "hello world"})