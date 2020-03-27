
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

  let counter = 0;
  // Create timeline elements, likely li items for i in timeLineHours create a li
  timeLine.innerHTML = "";
  for(let i = 0; i < timeLineHours; i++){ 
 
    if(`${i + startTime}` <= 12){
    // console.log(`i: ${i} startTime: ${startTime}`); 
    timeLine.innerHTML += `<li class="hour">${i + startTime}</li>`;
    // } else if (`${i + startTime}` <= 24) {
    //   timeLine.innerHTML += `<li class="hour">${(i + startTime)-12}</li>`;  
    // } else if (`${i + startTime}` <= 48) {
    //   timeLine.innerHTML += `<li class="hour">${(i + startTime-(12 * 2))}</li>`; 
    // } 
    } else {
      console.log(`counter: ${counter}`);
      timeLine.innerHTML += `<li class="hour">${(i + startTime-(12 * `${counter}`))}</li>`;
    };

    if(`${i + startTime}` % 12 === 0){
      counter ++; 
    };
  };



  //Clear output div
  output.innerHTML = "";
  //Map through each object in data structure and return template 
  const view = breadSteps.map(step => {
    return `<div class="${step.id} timeLineItem" style='width: ${step.time * 2}%'>
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
