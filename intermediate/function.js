function loginUserName(username="sam"){
    console.log(`${username} is logged in`)
}
//loginUserName()



function loginUserName(username){

    if(!username){
    console.log("enter username");
    return;
    }
    console.log(`${username} is logged in`);
}
// loginUserName()
// loginUserName('kripansh')


function calculateCarPrice(val1, val2, ...num){
    return num;
}
// console.log(calculateCarPrice(10, 12, 200, 500, 600))


const user={
    name:'kripansh singh',
    price:199
}

function handledObject(anyObject){
    console.log(`my name is ${anyObject.name} and price is ${anyObject.price}`);
}
// handledObject(user)

const myArray=[200, 400, 600, 700];

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myArray))