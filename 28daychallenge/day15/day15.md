# Day 15 — Array Methods Practice

## Task 1 — Filter and Transform

Return the customer names for completed orders.

**Expected shape:**

```js
["John", "John", "Peter"];
```

**Hint:** One method selects the orders; another transforms them into names.

## Task 2 — Calculate Total Revenue

Calculate the total amount from completed orders only.

**Hint:** First exclude orders that shouldn't contribute. Then aggregate the remaining amounts.

## Task 3 — Customer Spending Summary

Produce an object showing the total amount spent by each customer across **completed orders only**.

**Expected shape:**

```js
{
  John: 320,
  Peter: 90
}
```

**Hint:** I struggled a bit

- Your filter() is already limiting the orders to completed ones. For the reduce() callback:
- _finalObj_ is the object you’re building; x is the current completed order.
- If finalObj doesn’t have a key for x.customer, initialize that customer’s total to 0.
- Add x.amount to that customer’s total.
- Return finalObj so the next iteration receives the updated object.

## Task 4 — Find an Order

Find the first completed order with an amount greater than 100.

Return the entire order object.

**Hint:** Think about the difference between `find()` and `filter()`.

## Task 5 — Choose the Right Method

For each requirement, choose the most appropriate built-in method and explain why:

1. Return all pending orders.
2. Return the first order with ID 3.
3. Produce an array containing only order amounts.
4. Calculate the sum of all order amounts.
5. Check whether any order is cancelled.

**Hint:** Consider `filter`, `find`, `map`, `reduce`, and `some`.

## Day 15 checkpoint

Can you explain why each method is appropriate, rather than simply getting the correct output?
