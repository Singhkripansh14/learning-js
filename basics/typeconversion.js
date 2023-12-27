//*******string ->number******
let myName='kripansh'
let roll_no='131'
let password='2001abc'
let sum;
let convertedAsNumber=Number(roll_no)
console.log(convertedAsNumber)
console.log(typeof convertedAsNumber)

// string with only digits=>number with that digit
// string with digits & alphabets=>NaN
// string with only alphabets=>NaN
// undefined value =>NaN

//*******Number->boolean*********
const pi=3.14
let id=0
let result=null
let finding=NaN

let convertedAsBoolean1=Boolean(id)

console.log(convertedAsBoolean1)
console.log(typeof convertedAsBoolean1)

//any number except 0 =>true
//0=>false
// null=>false
// NaN=>false

//*****string->boolean*********

let MyClass='IT'
let data=''
let date=undefined
let mixed="krip2001"
let convertedAsBoolean2=Boolean(MyClass)


console.log(convertedAsBoolean2)
console.log(typeof convertedAsBoolean2)

// empty string =>false
// string of alphabets =>true
// string of alphabets and digits => true
// undefined => false
