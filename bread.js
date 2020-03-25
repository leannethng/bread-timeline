//creating div bars for timeline
const output = document.querySelector('.output');

//Grabbing the input values to use on the event listener
const inputs = Array.from(document.querySelectorAll('[name="breadInputs"]'));

//Grabbing individual inputs to match with the object values, this likely should be streamlined
const prepTime = document.querySelector('#prepTime');
const bulkFermTime = document.querySelector('#BulkFermTime');


// My initial data object
let breadSteps = 
{
  prep: 0,
  bulkFerm:0,
}
;

// Method for event listener action
function saveInputs(e){
  e.preventDefault(); //To stop the form submitting
  
  // Saving over the values of each stage with the values entered into the input
  breadSteps.prep = prepTime.value;
  breadSteps.bulkFerm = bulkFermTime.value;

  // Logging the values for each input
  inputs.forEach(input => console.log(input.value));

  // Outputting the data, only hooked up to prepTime currently
  output.innerHTML = prepTime.value;
  output.style.width = (prepTime.value * 10) + "%";
  console.log(breadSteps);
  
  // returning the object with new values
  return breadSteps;

}

// Listening for input into the fields then running the saveInputs method
inputs.forEach(input => input.addEventListener('input', saveInputs));

console.log(breadSteps);


//-------
// Try to write out the data this with be the method for the event handler
// function generateTimeline(data){
//   const addDiv = document.createElement('p');
//   addDiv.innerText = data.bulkFerm;
// // for (value in breadSteps){  
// // const addDiv = document.createElement('p');
// // }
// console.log(addDiv);
// return addDiv;
// }

// const steps = generateTimeline(breadSteps);

// output.insertAdjacentElement('afterbegin',steps );

console.log(output)

// I need to listen for the inputs for the creation of the divs too so they will update. 



