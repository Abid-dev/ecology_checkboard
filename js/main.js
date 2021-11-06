let scroll = new SmoothScroll('a[href="#milestones"]', {
  speed: 1000,
});

// Create building with dymanic number of windows
let numOfWindows = 18;
const bWindow = document.createElement("div");
bWindow.classList.add("window");
const buildingMain = document.getElementById('building-main');
for(let i = 0; i < numOfWindows; i++) {
  buildingMain.appendChild(bWindow.cloneNode(true));
}

// Open/close door function
let doors = document.getElementById("doors");
let leftDoor = document.querySelector(".left-door");
let rightDoor = document.querySelector(".right-door");
doors.addEventListener('click', function() {
  leftDoor.classList.toggle("leftDoorOpen");
  rightDoor.classList.toggle("rightDoorOpen");
  console.log("open door");
});

//Expand milestones section element in accordance to the size of the building (number of windows)


