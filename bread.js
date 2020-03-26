// Grabbing the button
const inputButton = document.querySelector(".inputButton");

//creating div bars for timeline
const output = document.querySelector(".output");

//Grabbing the input values
const inputs = Array.from(document.querySelectorAll('[name="breadInputs"]'));
//option to put data in an array?
let breadSteps = [
  {
    name: "Prep",
    time: 0,
    id: "prepTime"
  },
  {
    name: "Bulk Fermentation",
    time: 0,
    id: "BulkFermTime"
  },
  {
    name: "Another bread step",
    time: 0,
    id: "AnotherBreadStep"
  }
];

function createView() {
  //Clear output div
  output.innerHTML = "";

  //Map through each object in data structure and return template template
  const view = breadSteps.map(step => {
    return `<div class="${step.id} timeLineItem" style='width: ${step.time}'>
              <p>${step.name}</p>
              <p>${step.time}</p>
            </div>`;
  });

  // Add each template to the DOM
  view.forEach(breadStep => {
    output.innerHTML += breadStep;
  });
}

function updateView(event) {
  // Loop through data structure, look for step that matches target, update time
  breadSteps.forEach(step => {
    if (event.target.id === step.id) {
      step.time = parseInt(event.target.value);
    }
  });
  // Recreate view once data structure has been updated
  createView();
}

// Create view on page load
document.addEventListener("DOMContentLoaded", createView, false);
// Listening for input
inputs.forEach(input => input.addEventListener("input", updateView));

// Method to add to the button when clicked
// This will be adding the inputs to an object
// function saveInputs(event) {
//   //e.preventDefault(); //To stop the form submitting
//   // console.log(time);

//   breadSteps.forEach(step => {
//     output.innerHTML += `<div class="${step.id} timeLineItem" style='width: ${step.time}'>
//         <p>${step.name}</p>
//         <p class="time">${step.time}</p>
//       </div>`;

//     if (step.id === e.target.id) {
//       step.time = e.target.value;
//       updateBreadSteps(step);
//     }
//   });
// for (let i = 0; i < breadSteps.length; i++){
//   // if the id of the object matches the input name
//   if(breadSteps[i].id === e.target.id ){
//     breadSteps[i].time = e.target.value;
//     // console.log(breadSteps);
//   }

//   // breadSteps[i].time =
//   // console.log(`${breadSteps[i].name}: ${breadSteps[i].time}`);
// };

// // console.log(e.target.id);
// console.log(breadSteps);
// return breadSteps;
//}

// function updateBreadSteps(){
//   return breadSteps.forEach(step => {
//     let something =
//     `<div class="${step.id} timeLineItem" style='width: ${step.time}'>
//       <p>${step.name}</p>
//       <p>${step.time}</p>
//     </div>
//     `;
//   })
// };

//function updateBreadSteps(step) {
//console.log(step);
//const time = document.querySelector(`.prepTime .time`);
//console.log(time);
// time.innerHTML = step.time;
//}
