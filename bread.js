console.log('I work!')
// Grabbing the button
const inputButton = document.querySelector('.inputButton')

//creating div bars for timeline
const output = document.querySelector('.output');
const addDiv = document.createElement('div');


//Grabbing the input values
const inputs = Array.from(document.querySelectorAll('[name="breadInputs"]'));

const prepTime = document.querySelector('#prepTime');
const bulkFermTime = document.querySelector('#BulkFermTime');

let breadSteps = 
{
  prep: 0,
  bulkFerm:0,
}
;

// Method to add to the button when clicked
// This will be adding the inputs to an object
function saveInputs(e){
  e.preventDefault(); //To stop the form submitting
  
  breadSteps.prep = prepTime.value,
  breadSteps.bulkFerm = bulkFermTime.value,
  
  // document.forms[0].reset();
    //saving to localStorage
  localStorage.setItem('MyBreadTimeline', JSON.stringify(breadSteps) );
  console.log(breadSteps);
  return breadSteps;

}

console.log(breadSteps)

// Listening for input
inputs.forEach(input => input.addEventListener('input', saveInputs));
// Listening for click on the button
// inputButton.addEventListener('click', saveInputs)

