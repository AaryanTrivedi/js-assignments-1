/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

    // Iterate through transactions
    transactions.forEach(transaction => {
        const { category, price } = transaction;

        // Check if the category already exists in the object
        if (categoryTotals.hasOwnProperty(category)) {
            // If it does, add the transaction price to the existing total
            categoryTotals[category] += price;
        } else {
            // If it doesn't, create a new entry with the category and transaction price
            categoryTotals[category] = price;
        }
    });

    // Convert the object to an array of objects with the required format
    const result = Object.keys(categoryTotals).map(category => ({
        category,
        totalSpent: categoryTotals[category],
    }));

    return result;
}

module.exports = calculateTotalSpentByCategory;
