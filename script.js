//JS Event Listeners

//An event is an action preformed by a user on a website
//addEventListener(event, function) command is used to "turn on"a Button
//getElementById(ID) command tells JavaScript to look for an element using the ID
//A function is group of code that runs when called on

//console error: cannot read properties of null. this is almost always a spelling mistake on the ID

document.getElementById("order").addEventListener("click", orderpizza);

function orderpizza() {
  var size = prompt("what size pizza?");
  var topping1 = prompt("first topping?");
  var topping2 = prompt("second topping?");

  var output = `Your ${size} pizza with ${topping1} and ${topping2} will be ready shortly.`;
  alert(output);
}
document.getElementById("greet-btn").addEventListener("click", greet);
function greet() {
  //Input
  var name = prompt("What is your name");
  var city = prompt("what city are you from");
  //Process
  var goodday = `Greetings ${name} from ${city}!`;
  //Output
  alert(goodday);
}
