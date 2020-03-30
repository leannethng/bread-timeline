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
  let am = "am"
  let pm = "pm"


  // Clear the timeLine.innerHTML so it refreshes rather than appends when looped through
  timeLine.innerHTML = "";



  // Create timeline elements, likely li items for i in timeLineHours create a li
  for(let i = 0; i < timeLineHours; i++){ 

    //  amPm sets if the time is am or pm
    let amPm = isEven(counter)
    console.log(`amPm: ${amPm}`);

    if(`${i + startTime}` <= 12){
    timeLine.innerHTML += `<li class="hour">${i + startTime}${amPm}</li>`; } 
    else {
      timeLine.innerHTML += `<li class="hour">${(i + 
      // Using the counter to flatten back down to 1-12
      startTime-(12 * `${counter}`))}${amPm}</li>`;
    };
    // Set counter
    if(`${i + startTime}` % 12 === 0){
      counter ++; 
    };

    // using modulo to check for am or pm
    // made an am/pm function so I can return the values to use above
    function isEven(value){
      if (value % 2 === 0)
          return am;
      else
          return pm;
    }
};

  
  //Clear output div
  output.innerHTML = "";
  //Map through each object in data structure and return template 
  const view = breadSteps.map(step => {
    console.log(`stepTime: ${step.time}`)
    if (step.time === 0){
      return `<div class="${step.id} timeLineItem" style='display: none;'>
    </div>`;
    } else {
    return `<div class="${step.id} timeLineItem" style='width: ${step.time * 4}%'>
              <div class="timeLineBlock"></div>
              <p>${step.name}</p>
              <p>${step.time}hr/s</p>
            </div>`;
    }
  });

  // Add each template to the DOM
  view.forEach(breadStep => {
    output.innerHTML += breadStep;
  });
};

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
