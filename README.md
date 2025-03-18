JavaScript: The Big 3 Array Methods

Welcome to the Big 3 repository! 🚀 This repo contains fundamental examples of three powerful JavaScript array methods: map(), filter(), and reduce(). These methods provide a clean and efficient way to manipulate arrays without using traditional loops.

🔥 Topics Covered

map() – Transforms each element in an array.

filter() – Filters elements based on a condition.

reduce() – Reduces an array to a single value.

📂 Repository Structure

Each method has a dedicated file with simple, beginner-friendly examples:

📁 Big-3/
 ├── map.js
 ├── filter.js
 ├── reduce.js

🚀 Getting Started

Clone this repository:

git clone https://github.com/Rishabh-prime/Big-3

Navigate to the directory:

cd Big-3

Open the files in any code editor and run them in the browser console or Node.js.

📌 Examples

🛠 map() – Transforming Array Elements

const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num * num);
console.log(squared);

Output: [1, 4, 9, 16]

🔍 filter() – Filtering Based on a Condition

const numbers = [10, 25, 30, 45];
const filtered = numbers.filter(num => num > 20);
console.log(filtered);

Output: [25, 30, 45]

➕ reduce() – Reducing an Array to a Single Value

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

Output: 10

💡 Why Learn These Methods?

map() simplifies element transformation.

filter() is perfect for extracting specific data.

reduce() helps in aggregating values efficiently.

⭐ Contribute

Have improvements or new examples? Feel free to fork this repository and submit a pull request!

📜 License

This project is open-source and available under the MIT License.

Happy Coding! 🚀
