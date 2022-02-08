document.getElementsByClassName("item")[0].getElementsByTagName("span")[0]
  .textContent;

// initialize a variable to store the entire content
let csv = "name,price,unit\n";

// Query the dom to find all the element that represent each product.
const elements = Array.from(document.getElementsByClassName("item"));

// Iterate over each element found
elements.forEach((el) => {
  // inside the closure
  let priceAndUnitElement = el.getElementsByTagName("span")[0];
  let priceAndUnit = priceAndUnitElement.textContent.split("/");
  let price = priceAndUnit[0].trim();
  let unit = priceAndUnit[1].trim();

  // then query for name:
  let name = el.getElementsByTagName("a")[0].textContent;

  // append all information to the variable initialize in step 1, separating the values with commas. don't forget to add newline characters to each line you append to

  csv += `${name}, ${price}, ${unit} \n`;
});

// price the varible containing the accumulates date using the console.log function
console.log(csv);
