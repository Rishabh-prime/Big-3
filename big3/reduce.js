// const numbers1 = [1, 2, 3, 4, 5];

// const myNums = numbers1.reduce(
//     (acc, cv) => {
//         return acc + cv;
//     },0
// )


// console.log(myNums); // 15

// !! exmaple two

const course = [
    {
        itemName: 'js course',
        price: 100
    },
    {
        itemName: 'react course',
        price: 200
    },
    {
        itemName: 'node course',
        price: 150
    },
    {
        itemName: 'python course',
        price: 250
    }
]

const totalshoping = course.reduce( (acc, cv)=> {
   return acc + cv.price
},0)

console.log(totalshoping); // 700