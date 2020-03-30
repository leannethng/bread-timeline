//creating li items for timeline
const timeLine = document.querySelector(".timing");
//creating div bars for timeline
const output = document.querySelector(".output");
//Grabbing the input values
const inputs = Array.from(document.querySelectorAll('[name="breadInputs"]'));

//Dataset
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

let startTime = 1;

function createView() {
  // Summing the total hours to create the timeline
  var timeLineHours = breadSteps.reduce(function(prev, cur) {
    return prev + cur.time;
  }, 0);

  // Counter to help cycle through am/pm and to loop through 1-12
  let counter = 0;
  // Clear the timeLine.innerHTML so it refreshes rather than appends when looped through
  timeLine.innerHTML = "";

  // Create timeline elements, likely li items for i in timeLineHours create a li
  for(let i = 0; i < timeLineHours; i++){ 
    if(`${i + startTime}` <= 12){
    timeLine.innerHTML += `<li class="hour">${i + startTime}</li>`; } 
    else {
      timeLine.innerHTML += `<li class="hour">${(i + 
      // Using the counter to flatten back down to 1-12
      startTime-(12 * `${counter}`))}</li>`;
    };
    // Set counter
    if(`${i + startTime}` % 12 === 0){
      counter ++; 
    };
  };

  // using modulo to check for am or pm
  // need to them append the word am or pm to the end of the li
  // also need a radio button to determine if the user is starting on am or pm then the other one
  if(counter % 2 === 0){
    console.log(`counter: ${counter}`);
     console.log(`am`); 
  } else {
    console.log(`counter: ${counter}`);
    console.log(`pm`); 
};
  
  //Clear output div
  output.innerHTML = "";
  //Map through each object in data structure and return template 
  const view = breadSteps.map(step => {
    return `<div class="${step.id} timeLineItem" style='width: ${step.time * 2}%'>
              <div class="timeLineBlock"></div>
              <p>${step.name}</p>
              <p>${step.time}hr/s</p>
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
      step.time = parseInt(event.target.value) ;
    }
  });

  // Time can then be a variable that will be changed with the start making parameter.
  if (event.target.id === 'time') {
    startTime = parseInt(event.target.value);
    console.log(startTime);
  }

  // Recreate view once data structure has been updated
  createView();
}

// Create view on page load
// document.addEventListener("DOMContentLoaded", createView, false);


// Listening for input
inputs.forEach(input => input.addEventListener("input", updateView));
