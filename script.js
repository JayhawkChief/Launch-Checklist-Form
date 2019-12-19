// Write your JavaScript code here!
// Adding Validating and Alerts!
window.addEventListener("load", function() {
   let form = document.querySelector("form"); 
   let pilot = document.querySelector("input[name=pilotName]");
   let copilot = document.querySelector("input[name=copilotName]");
   let fuel = document.querySelector("input[name=fuelLevel]");
   let cargo = document.querySelector("input[name=cargoMass]");
   let faultyItems = document.getElementById("faultyItems");
   let launch = document.getElementById("launchStatus");
   let pilotStatus = document.getElementById("pilotStatus"); 
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus"); 
   form.addEventListener("submit", function(event) {
      event.preventDefault(); 
      if (pilot.value === "" || copilot.value === "" || fuel.value === "" || cargo.value === ""){
         alert("All fields are required!");
      } else if (isNaN(pilot.value) === false || isNaN(copilot.value) === false || isNaN(fuel.value) === true || isNaN(cargo.value) === true) {
         alert("Make sure to enter valid information for each field!");
      } else {
         faultyItems.style.visibility = "visible"; 
         pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch!`;
         copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch!`;
         if (fuel.value < 10000) {
            faultyItems.style.visibility = "visible";
            launch.innerHTML = "Shuttle Not Ready for Launch";
            launch.style.color = "red";
            fuelStatus.innerHTML = `Fuel level is too low for launch`;
         } else if (cargo.value > 10000) {
            faultyItems.style.visibility = "visible";
            launch.innerHTML = "Shuttle Not Ready for Launch";
            launch.style.color = "red";
            cargoStatus.innerHTML = `Cargo mass is too high for launch`;
         } else {
            faultyItems.style.visibility = "hidden"; 
            launch.innerHTML = "Shuttle Is Ready for Launch!";
            launch.style.color = "green";
         }
      }
   });

   
// Fetching Planetary Data 
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json){
         const div = document.getElementById("missionTarget");
         {  let data = json[2]; 
            div.innerHTML = `
            <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${data.name}</li>
                  <li>Diameter: ${data.diameter}</li>
                  <li>Star: ${data.star}</li>
                  <li>Distance from Earth: ${data.distance}</li>
                  <li>Number of Moons: ${data.moons}</li>
               </ol>
            <img src="${data.image}">`
         }
      })
   });
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
