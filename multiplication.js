console.log("Enter two numbers: ");
var input = prompt("");
var splitted = input.split(" * ");
function multiplication(x, y){
   return x * y; 
}
var result = multiplication(parseInt(splitted[0], 10), parseInt(splitted[1], 10));
console.log(result);