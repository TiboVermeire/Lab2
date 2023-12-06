# Lab2
const colors = ['red', 'green', 'blue'];
const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor);  // Output: 'red'
console.log(secondColor); // Output: 'green'
console.log(thirdColor);  // Output: 'blue'

const person = { name: 'John', age: 30, city: 'New York' };
const { name, age, city } = person;

console.log(name); // Output: 'John'
console.log(age);  // Output: 30
console.log(city); // Output: 'New York'

//In dit voorbeeld worden zowel array destructuring als object destructuring gedemonstreerd. Deze features bieden een elegante manier om waarden uit arrays en objecten te extraheren en toewijzingen te maken in één regel code. Het kan de leesbaarheid van je code verbeteren en het gemakkelijker maken om met complexe datastructuren om te gaan. 
