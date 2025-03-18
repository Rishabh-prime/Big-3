// ! filter 

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = number.filter( (num) =>  {
//     return num > 4
// })

// console.log(newNum); // []

// ! useing for each(for a example )

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

// const newNum = numbers.forEach( (num)=>{
//     if(num >4 ){
//         console.log(num); 
//     }
//      return num; // if you want to return a new array with filtered numbers
// })

// console.log(newNum); // undefined  (because forEach doesn't return a new array)


const crickter = [
    {
        name: 'Dhoni', age: 42, role: 'Captain',country: 'India'
    },
    {
        name: 'Virat', age: 32,role: 'Vice Captain',country: 'India'
    },
    {
        name: 'Rohit', age: 34, role: 'Batsman',country: 'India'
    },
    {
        name: 'ponting',age: 45,role: 'Coach',country: 'Australia'
    },
    {
        name: 'Smith',age: 35, role: 'Batsman',country: 'Australia'
    },
    {
        name: 'Warner',age: 33,role: 'Batsman',country: 'Australia'
    },
    {
        name: 'Buttler', age: 31, role: "Batsman",country: 'England'
    },
    {
        name: 'Root',age: 30, role: 'Batsman',country: 'England'
    },
    {
        name: 'Stokes', age: 29,role: 'All Rounder',country: 'England'
    },
    {
        name: 'Archer', age: 28,role: 'Bowler',country: 'England'
    }
]

// !! example one 
// const worldCrickter = crickter.filter( (cric)=>{
//     return cric.country === 'India' 
// })

// ! example two 
// const  worldCrickter =  crickter.filter( (cric)=> ( cric.age > 28))

// ! example three 
// const worldCrickter =  crickter.filter( (cric) => {
//     return cric.role === 'Batsman'
// }) 

// ! example four
// const worldCrickter = crickter.filter( (cric)=> {
//    return cric.role === 'Batsman' && cric.country === 'Australia'
// })
// console.log(worldCrickter);