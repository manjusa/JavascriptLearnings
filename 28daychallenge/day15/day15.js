const orders = [
  {
    id: 1,
    customer: "John",
    amount: 120,
    status: "completed",
  },
  {
    id: 2,
    customer: "Sarah",
    amount: 80,
    status: "pending",
  },
  {
    id: 3,
    customer: "John",
    amount: 200,
    status: "completed",
  },
  {
    id: 4,
    customer: "Sarah",
    amount: 150,
    status: "cancelled",
  },
  {
    id: 5,
    customer: "Peter",
    amount: 90,
    status: "completed",
  },
];
//task1
const customerNames = orders
  .filter((order) => {
    return order.status == "completed";
  })
  .map((o) => o.customer);

console.log(customerNames);

//task2

const totalAmount = orders
  .filter((o) => o.status == "completed")
  .reduce((total, y) => y.amount + total, 0);

console.log(totalAmount);

//task3
const custSpendingSummary = orders
  .filter((o) => o.status == "completed")
  .reduce((finalObj, x) => {
    // if (!finalObj[x.customer]) finalObj[x.customer].push(0);
    // else finalObj[x.customer].push(x.amount);
    if (!finalObj[x.customer]) finalObj[x.customer] = 0;
    const total = x.amount + finalObj[x.customer];
    finalObj[x.customer] = total;
    console.log(finalObj);
    return finalObj;
  }, {});

//task 4
const orderAmtGreaterThan100 = orders.find(
  (order) => order.amount > 100 && order.status == "completed",
);
console.log(orderAmtGreaterThan100);

//task5 agree with all hints
//only task5 5th pt where i have to use "some"

const isAnyCancelled = orders.some(
  (o) => o.status.toLowerCase() == "cancelled",
);
console.log(isAnyCancelled);
