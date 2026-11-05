const employees = [
  { name: "John", department: "IT", salary: 90000 },
  { name: "Sarah", department: "HR", salary: 75000 },
  { name: "Peter", department: "IT", salary: 95000 },
  { name: "Mary", department: "Finance", salary: 85000 },
  { name: "Alex", department: "HR", salary: 70000 },
];

// Task1 - Create an object grouping employees by their department.

const task1Res = employees.reduce((finalObj, curr) => {
  if (!finalObj[curr.department]) {
    finalObj[curr.department] = [];
  }
  finalObj[curr.department].push(curr);
  return finalObj;
}, {});
console.log(task1Res);
// o/p
/*
{
  IT: [
    // John and Peter
  ],
  HR: [
    // Sarah and Alex
  ],
  Finance: [
    // Mary
  ]
}
*/
// Task2 - Calculate the total salary for each department.

const task2Res = employees.reduce((finalObj, curr) => {
  if (!finalObj[curr.department]) {
    finalObj[curr.department] = 0;
  }
  let amt = finalObj[curr.department];
  finalObj[curr.department] = amt + curr.salary;
  return finalObj;
}, {});
console.log(task2Res);

/*Expected output:


{
  IT: 185000,
  HR: 145000,
  Finance: 85000
}

*/

// Task 3 — Remove Duplicate Values
const skills = ["JavaScript", "C#", "JavaScript", "React", "C#", "SQL"];
const uniqueSkills = [...new Set(skills)];
console.log(uniqueSkills);
