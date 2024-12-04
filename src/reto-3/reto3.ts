import organizeInventory from "./inventory";

const inventary = [
  { name: "doll", quantity: 5, category: "toys" },
  { name: "car", quantity: 3, category: "toys" },
  { name: "ball", quantity: 2, category: "sports" },
  { name: "car", quantity: 2, category: "toys" },
  { name: "racket", quantity: 4, category: "sports" },
];

const result1 = organizeInventory(inventary);
console.log(result1);
// Resultado esperado:
// {
//   toys: {
//     doll: 5,
//     car: 5
//   },
//   sports: {
//     ball: 2,
//     racket: 4
//   }

const inventary2 = [
  { name: "book", quantity: 10, category: "education" },
  { name: "book", quantity: 5, category: "education" },
  { name: "paint", quantity: 3, category: "art" },
];

const result2 = organizeInventory(inventary2);
console.log(result2);

// Resultado esperado:
// {
//   education: {
//     book: 15
//   },
//   art: {
//     paint: 3
//   }
// }
