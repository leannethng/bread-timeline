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
