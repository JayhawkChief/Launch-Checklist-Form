// Write your JavaScript code here!
// Adding Validating and Alerts!
window.addEventListener("load", function() {
   let form = document.querySelector("form"); 
   let pilot = document.querySelector("input[name=pilotName]");
   let copilot = document.querySelector("input[name=copilotName]");
   let fuel = document.querySelector("input[name=fuelLevel]");
   let cargo = document.querySelector("input[name=cargoMass]");
   let inputs = document.getElementById("faultyItems");
   let launch = document.getElementById("launchStatus");
   let pilotStatus = document.getElementById("pilotStatus"); 
   let copilotStatus = document.getElementById("copilotStatus"); 
   form.addEventListener("submit", function(event) {
      event.preventDefault(); 
      if (pilot.value === "" || copilot.value === "" || fuel.value === "" || cargo.value === ""){
         alert("All fields are required!");
      } else if (isNaN(pilot.value) === false || isNaN(copilot.value) === false || isNaN(fuel.value) === true || isNaN(cargo.value) === true) {
         alert("Make sure to enter valid information for each field!");
      } 
   let pilotName = `${pilotStatus} is ready for launch!`;
   let copilotName = `${copilotStatus} is ready for launch!`;
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      if (inputs.fuelStatus < 10000) {
         inputs.style.visibility = "visible";
         launch = "Shuttle not ready for launch";
         launch.style.color = "red";
         alert("There isn't enough fuel for the journey!") 
      } else if (inputs.cargoMass > 10000) {
         inputs.style.visibility = "visible";
         launch = "Shuttle not ready for launch";
         launch.style.color = "red";
         alert("There is too much mass for the shuttle to take off!") 
      } else {
         launch = "Shuttle is ready for launch";
         launch.style.color = "green";
      }
   });
   }); 
// Fetching Planetary Data 
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json){
         const div = document.getElementById("missionTarget");
         for (let i = 0; i < json.length; i++) {
            div.innerHTML += `
            <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[i].name}</li>
                  <li>Diameter: ${json[i].diameter}</li>
                  <li>Star: ${json[i].star}</li>
                  <li>Distance from Earth: ${json[i].distance}</li>
                  <li>Number of Moons: ${json[i].moons}</li>
               </ol>
            <img src="${json[i].picture}"> `
         }
      })
   })
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
