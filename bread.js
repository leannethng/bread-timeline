console.log('I work!')
// Grabbing the button
const inputButton = document.querySelector('.inputButton')

//creating div bars for timeline
const output = document.querySelector('.output');


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

//option to put data in an array? 
// let breadSteps = [
// {
//   "stage" : "prep",
//   "time" : 0,
// },
// {
//   "stage" : "bulkFerm",
//   "time" : 0,
// }
// ]

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



// Listening for input
inputs.forEach(input => input.addEventListener('input', saveInputs));
// Listening for click on the button
// inputButton.addEventListener('click', saveInputs)



//-------
function generateTimeline(data){
const addDiv = document.createElement('div');
addDiv.classList.add(`step`);

console.log(data.prep)
return addDiv;
}

let step = generateTimeline(breadSteps);

// addDiv.innerHTML = step;
output.insertAdjacentElement('afterbegin', step);

// I need to listen for the inputs for the creation of the divs too so they will update. 
