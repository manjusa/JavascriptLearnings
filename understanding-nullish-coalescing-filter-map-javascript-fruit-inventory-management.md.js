const fruitsInStore = [
  {
    id: 1,
    name: "Apple",
    inStock: true,
  },
  {
    id: 2,
    name: "Banana",
    inStock: true,
  },
  {
    id: 3,
    name: "Strawberry",
    inStock: false,
  },
  {
    id: 4,
    name: "Mango",
    inStock: false,
  },
];

const newStock = [
  { id: 101, name: "Cherry", inStock: true },
  { id: 102, name: "Blueberry", inStock: true },
];

//I want to create a global object. Say it is consumed by a third party app. Third party app requires "inStock","outofStock" and "newStock" separetely
// Approach1
const inStock = fruitsInStore.filter((x) => x.inStock);
const outStock = fruitsInStore.filter((x) => !x.inStock);

const allFruits = () => {
  let x = [];
  if (inStock)
    inStock.forEach((y) => {
      x.push({ ...y, orderAgain: "no" });
    });
  if (outStock)
    outStock.forEach((y) => {
      x.push({ ...y, orderAgain: "yes" });
    });
  if (newStock)
    newStock.forEach((y) => {
      x.push({ ...y, orderAgain: "maybe" });
    });
  return x;
};
console.log("Approach1:- ", allFruits());

// Apporach2
const allFruits1 = () => [
  ...fruitsInStore
    .filter((x) => x.inStock)
    .map((z) => ({ ...z, orderAgain: "no" })),
  ...fruitsInStore
    .filter((x) => !x.inStock)
    .map((z) => ({ ...z, orderAgain: "yes" })),
  ...newStock,
];
console.log("Approach2:- ", allFruits1());
