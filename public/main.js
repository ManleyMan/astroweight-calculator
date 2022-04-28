// Write your JavaScript code here!
var planets = [ 
    [ 'Pluto',  0.06], 
    ['Neptune', 1.148], 
    ['Uranus',  0.917], 
    ['Saturn',  1.139], 
    ['Jupiter', 2.640], 
    ['Mars',  0.3895], 
    ['Moon', 0.1655], 
    ['Earth', 1], 
    ['Venus', 0.9032], 
    ['Mercury', 0.377], 
    ['Sun',  27.9] 
];

planets.reverse();

  planets.forEach(myFunction);
  function myFunction(item, index){
    document.getElementById("planets");
    var option = document.createElement("option");
    var text = document.createTextNode(item[0]);
    option.value = item[0];
    option.appendChild(text);
    document.getElementById("planets").appendChild(option);
  }


    
function calculateWeight(weight, planetName) { 
    
var weight = document.getElementById("user-weight").value;
var planetName = document.getElementById("planets").selectedIndex;
var name = planets[planetName][0];
var gravity = planets[planetName][1];

var newWeight = gravity * weight;
let result = newWeight.toFixed();
document.getElementById("output").innerHTML = "If you were on " + name + ", you would weigh " + result + "lbs!";

} 

function handleClickEvent(e) {
   
    var  userWeight = document.getElementById("user-weight").value;
    
    var planetName = document.getElementById("planets").value;
    
    return calculateWeight(userWeight, planetName);

}


