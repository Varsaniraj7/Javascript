// Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 discount have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0

let purchaseAmount = 150;

if (purchaseAmount >= 100) {
  let discount = purchaseAmount * 0.20;
  console.log(`Discount: $${discount}`);
  let discountedPrice = purchaseAmount - discount;
  console.log(`Discounted Price: $${discountedPrice}`);
} else if (purchaseAmount >= 50) {
  let discount = purchaseAmount * 0.10;
  console.log(`Discount: $${discount}`);
  let discountedPrice = purchaseAmount - discount;
  console.log(`Discounted Price: $${discountedPrice}`);
} else {
  console.log("No discount");
  console.log(`Discounted Price: $${purchaseAmount}`);
}