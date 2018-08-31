var ahi = {
fishType: "Ahi",
sauce: " shoyu",
price:100.00,
rice:"White",
ounces: 8
};

//Ask the user for amount of spicy ahi to buy.
var amount = prompt("Amount to buy?");
//display the total amount of ounces the user will buy.
var totalOunces = amount * ahi.ounces;
window.alert("buying " + totalOunces);
//Then display the total dollar amount.
var totalDollar = amount * ahi.price;
window.alert("Your total price: " + totalDollar);

