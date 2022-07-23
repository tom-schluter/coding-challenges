// We need to write some code to return the original price of a product, the return type must be of type decimal and the number must be rounded to two decimal places.

// We will be given the sale price (discounted price), and the sale percentage, our job is to figure out the original price.

// For example:
// Given an item at $75 sale price after applying a 25% discount, the function should return the original price of that item before applying the sale percentage, which is ($100.00) of course, rounded to two decimal places.

// DiscoverOriginalPrice(75, 25) => 100.00M where 75 is the sale price (discounted price), 25 is the sale percentage and 100 is the original price

// parameters

// a number representing the discounted price and a number representin the percentage of discount the price had applied on it

// returns

// the original price rounded to 2 decimals (only if necessary);

// examples, see above

// psuedo code

// use a formula to get the original price

// use a formula to ensure it shows up to 2 decimals only when necessary

// return the result

const discoverOriginalPrice = (discountedPrice, salePercentage) => {
  let num = discountedPrice / (1 - salePercentage / 100);
  return parseFloat(num.toFixed(2));
};
