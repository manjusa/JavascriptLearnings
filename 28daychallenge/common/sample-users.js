export const users = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 28,
    isActive: true
  },
  {
    id: 1000,
    firstName: "",
    lastName: "",
    age: 28,
    isActive: true
  },
  {
    id: 2000,
    firstName: "",
    lastName: "Smith",
    age: 34,
    isActive: false
  },
  {
    id: 3,
    firstName: "Sam",
    lastName: null, // edge case
    age: 22,
    isActive: true
  },
  {
    id: 4,
    firstName: "Emily",
    // lastName missing → edge case
    age: 40,
    isActive: false
  },
  {
    id: 5,
    firstName: null, // edge case
    lastName: "Brown",
    age: 30,
    isActive: true
  },
  {
    id: 6,
    firstName: "Michael",
    lastName: "Clark",
    age: undefined, // edge case
    isActive: true
  }
];