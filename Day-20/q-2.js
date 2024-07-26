//.Write a function calculateSimpleInterest(principal, rate, time) that calculates and returns the simple interest based on the principal amount, interest rate, and time period.
function calculateSimpleInterest(principal, rate, time) {
   let interest = (principal * rate * time) / 100;
   return interest;
}
console.log(calculateSimpleInterest(1000, 5, 2));