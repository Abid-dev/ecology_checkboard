let scroll = new SmoothScroll('a[href="#milestones"]', {
  speed: 1000,
});

// let numOfWindows = 9;
// const window = `<div class="window"></div>`;
// const windows = window * numOfWindows;


// document.addEventListener("DOMContentLoaded", function(event) { 
//   alert("Hello World");
// });

let numOfWindows = 15;
const bWindow = document.createElement("div");
bWindow.classList.add("window");
const buildingMain = document.getElementById('building-main');
for(let i = 0; i < numOfWindows; i++) {
  buildingMain.appendChild(bWindow.cloneNode(true));
}

let doors = document.getElementById("doors");
let leftDoor = document.querySelector(".left-door");
let rightDoor = document.querySelector(".right-door");
doors.addEventListener('click', function() {
  leftDoor.classList.toggle("leftDoorOpen");
  rightDoor.classList.toggle("rightDoorOpen");
  console.log("open door");
})

