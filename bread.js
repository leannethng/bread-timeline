console.log('I work!')
// Grabbing the button
const inputButton = document.querySelector('.inputButton')

//Grabbing the input values
const prepTime = document.querySelector('#prepTime');
const bulkFermTime = document.querySelector('#BulkFermTime');
console.log(inputButton);

let breadSteps = [];
console.log(breadSteps)
// Method to add to the button when clicked
// This will be adding the inputs to an object
function saveInputs(e){
  e.preventDefault(); //To stop the form submitting
  let breadStep = {
    prep: prepTime.value,
    bulkFerm: bulkFermTime.value,
  }
  breadSteps.push(breadStep);
  document.forms[0].reset();
  console.log(breadSteps)
  //saving to localStorage
  localStorage.setItem('MyBreadTimeline', JSON.stringify(breadSteps) );
}

// Listening for click on the button
inputButton.addEventListener('click', saveInputs)