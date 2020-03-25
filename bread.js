console.log('I work!')
// Grabbing the button
const inputButton = document.querySelector('.inputButton')

//creating div bars for timeline
const output = document.querySelector('.output');


//Grabbing the input values
const inputs = Array.from(document.querySelectorAll('[name="breadInputs"]'));

// const prepTime = document.querySelector('#prepTime');
// const bulkFermTime = document.querySelector('#BulkFermTime');

// let breadSteps = 
// {
//   prep: 0,
//   bulkFerm:0,
// }
// ;

//option to put data in an array? 
let breadSteps = [
{
  name : "Prep",
  time : 0,
  id: "prepTime"
},
{
  name : "Bulk Fermentation",
  time : 0,
  id : "BulkFermTime",
}
]

// Method to add to the button when clicked
// This will be adding the inputs to an object
function saveInputs(e){
  e.preventDefault(); //To stop the form submitting
  // console.log(time);
  for (i = 0; i < breadSteps.length; i++){
    // if the id of the object matches the input name
    // if(breadSteps[i].id === )
    // breadSteps[i].time = 
    console.log(`${breadSteps[i].name}: ${breadSteps[i].time}`);
  }

  // breadSteps = breadSteps.map(p => p.name === inputs.classList)
// Example
  // const newProjects = projects.map(p =>
  //   p.value === 'jquery-ui'
  //     ? { ...p, desc: 'new description' }
  //     : p
  // );

  


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



// addDiv.innerHTML = step;
output.insertAdjacentElement('afterbegin', generateTimeline(breadSteps));

// I need to listen for the inputs for the creation of the divs too so they will update. 
