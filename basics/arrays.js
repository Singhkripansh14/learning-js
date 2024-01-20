const myarr=[1,2,3,4,5,6] 
const arr1=new Array(5,6,7,8)

//console.log(myarr)

const arr2=myarr.slice(1,3)
const arr3=myarr.splice(1,3)

//console.log('A',myarr)
//console.log('A',arr2)

//console.log('B',arr3)
//console.log('B',myarr)

//*********************

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

const allheros=marvel_heros.concat(dc_heros)

console.log(allheros)

marvel_heros.push(dc_heros)
console.log(marvel_heros)


const all_newHeros=[...marvel_heros, ...dc_heros, ...[2,3,5]]
console.log(all_newHeros)

const anotherArray=[1,3,4,[5,6],[7,8,9],[11,12,[13,14,15]]]
const real_anotherArray=anotherArray.flat(1)

console.log(real_anotherArray)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:'shubham'}))

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))