// # [JSL04] Submission: Monster Ternary Operator

// #### Challenge 1: Flavor Selection
// Given a variable that holds a user's preferred type of Monster Energy drink, 
// print whether the user prefers a "Regular" or "Sugar-free" variety. If the preference is not set, default to "Regular".

let userPreference = ''; // Possible values: 'Regular', 'Sugar-free', or undefined
let prefer = userPreference == '' ? 'Regular' : 'Sugar-Free';
console.log(prefer);

// #### Challenge 2: Stock Check
// You have a variable that tracks the number of Monster Energy cans left in the fridge. 
// Use a ternary operator to print "Time to restock!" if the number is less than 5, or "We're stocked!" if the number is 5 or more.

let cansLeft = 5; // Any number of cans
let restock = cansLeft < 5 ? "Time to restock!" : cansLeft >= 5 ? "We're stocked!": "Report to management";
console.log(restock);


// #### Challenge 3: Workout Intensity
// Based on the current heart rate, determine if the user should drink a Monster Energy drink to boost their workout. 
// If the heart rate is below 100 bpm, print "Boost needed!", otherwise, print "Energy levels are high!". '}

let heartRate = 95; // Current heart rate in bpm
let boost = heartRate < 100 ? "Boost Needed" : "Energy levels are high!";
console.log(boost);


// #### Challenge 4: Temperature Suitability
// Monster Energy drinks are best served cold. Given the current temperature, use a ternary to print "Chilled to perfection!" 
// if the temperature is below or equal to 5°C, or "Needs a cooler!" if above 5°C.

let currentTemp = 4; // Current temperature in °C
let cold = currentTemp <=5 ? "Chilled to perfection!" : "Needs a cooler!";
console.log(cold);


// #### Challenge 5: Late Night Coding Session
// Determine if it's a good idea to have a Monster Energy drink based on the current hour.
// If it's between 7am and midnight (24-hour format), print "Unleash the beast!", 07:00am - 00:00am 
// otherwise, print "Better stick to water."

// Define the current hour in 24-hour format
let currentHour = 3;   
let drinkTime = currentHour >= 7 && currentHour <= 24? "Unleash the beast!": "Better stick to water.";
console.log(drinkTime);

// Write your code below this line to determine if it's a good idea to have a Monster Energy drink based on the current hour
// If it's between 7am and midnight (24-hour format), print "Unleash the beast!"
// Otherwise, print "Better stick to water."






// In each of these challenges, the ternary operator is used to decide between two options based on a condition, 
// demonstrating its utility for concise conditional logic. Remember that while ternaries can make the code more succinct, 
// they should be used judiciously to maintain readability, especially for more complex conditions.