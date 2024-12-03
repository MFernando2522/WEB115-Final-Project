//Name: Marc F
//Date: 12/2/2024
//Final (Individual) Project

let display = document.getElementById("myForm")
//https://www.youtube.com/watch?v=U2vxAEiaVRY

//Function validation, done in html
//function SetMeals, input here a list to put into meal plan
// Quick validation function inside the form for name and email

// Function to set meals based on user input
function setMeals() {
    // this grabs the user's meal input, each one is stored in variables
    //I LOVE PROMPT ITS LIKE HIDDEN HTML INPUTS GRAHHHHH
    //https://www.w3schools.com/jsref/met_win_prompt.asp
    let breakfast = prompt("Enter your breakfast for the week:"); // prompt to get breakfast
    let snack = prompt("Enter your snack for the week:"); // prompt to get first snack
    let lunch = prompt("Enter your lunch for the week:"); // prompt to get lunch
    let snacktwo = prompt("Enter your second snack for the week:"); // prompt to get second snack
    let dinner = prompt("Enter your dinner for the week:"); // prompt to get dinner

    // creates the meal plan object with the user's inputs
    let weeklyMealPlan = new MealPlan(breakfast, snack, lunch, snacktwo, dinner); // call the MealPlan class
    weeklyMealPlan.displayInfo(); // display the user's meal plan, basically the final print yuhr
}

// Class for MealPlan
class MealPlan {
    constructor(breakfast, snack, lunch, snacktwo, dinner) {
        // this sets the meals for the week
        this.breakfast = breakfast; // breakfast for the week
        this.snack = snack; // first snack for the week
        this.lunch = lunch; // lunch for the week
        this.snacktwo = snacktwo; // second snack for the week
        this.dinner = dinner; // dinner for the week, im going crazy typing all this but I had an error here once NEVER aAGIN
    }

    // Method to display meal plan info
    displayInfo() {
        // this updates the form display with the meal plan
        //Made it print multiple times for all the days ehehehehehe I love this funny function shoutouts to Will
        display.innerHTML += `<p>Sunday:<br> Breakfast: ${this.breakfast}<br>Snack: ${this.snack}<br>Lunch: ${this.lunch}<br>SnackTwo: ${this.snacktwo}<br>Dinner: ${this.dinner}</p>`; // add meals to HTML
        display.innerHTML += `<p>Monday:<br> Breakfast: ${this.breakfast}<br>Snack: ${this.snack}<br>Lunch: ${this.lunch}<br>SnackTwo: ${this.snacktwo}<br>Dinner: ${this.dinner}</p>`; // add meals to HTML
        display.innerHTML += `<p>Tuesday:<br> Breakfast: ${this.breakfast}<br>Snack: ${this.snack}<br>Lunch: ${this.lunch}<br>SnackTwo: ${this.snacktwo}<br>Dinner: ${this.dinner}</p>`; // add meals to HTML
        display.innerHTML += `<p>Wednesday:<br> Breakfast: ${this.breakfast}<br>Snack: ${this.snack}<br>Lunch: ${this.lunch}<br>SnackTwo: ${this.snacktwo}<br>Dinner: ${this.dinner}</p>`; // add meals to HTML
        display.innerHTML += `<p>Thursday:<br> Breakfast: ${this.breakfast}<br>Snack: ${this.snack}<br>Lunch: ${this.lunch}<br>SnackTwo: ${this.snacktwo}<br>Dinner: ${this.dinner}</p>`; // add meals to HTML
        display.innerHTML += `<p>Friday:<br> Breakfast: ${this.breakfast}<br>Snack: ${this.snack}<br>Lunch: ${this.lunch}<br>SnackTwo: ${this.snacktwo}<br>Dinner: ${this.dinner}</p>`; // add meals to HTML
        display.innerHTML += `<p>Saturday:<br> Breakfast: ${this.breakfast}<br>Snack: ${this.snack}<br>Lunch: ${this.lunch}<br>SnackTwo: ${this.snacktwo}<br>Dinner: ${this.dinner}</p>`; // add meals to HTML
    }
}

// Button handler to HTML
//imma be fr w3school tutorials are so goated with the sauce 
document.getElementById("submitBtn").addEventListener("click", function(e) {
    e.preventDefault(); // stops the form from reloading the page ye
    console.log("Clicked Submit Button"); // just to make sure the button works
    setMeals(); // call the setMeals function to let user add meals
});


//--------------------------SCRAPPED CODE:------------------------------------------------------------------
//Function validation, done in html
//function SetMeals, input here a list to put into meal plan
// Define the class
//The meal plan will display the users input for 5 meals 
//(Breakfast, snack, lunch, snack & dinner) for the week (Monday – Sunday). 
//class MealPlan {
//  constructor(breakfast,snack,lunch,snacktwo,dinner) {
  // Breakfast, snack, lunch, snackdinner
//    this.breakfast = breakfast
//    this.snack = snack
 //   this.lunch = lunch
 //   this.snacktwo = snacktwo
 //   this.dinner = dinner
 // }
  // Method to update the food of the plan
  //Dont delete will kill code
  //updateRating(newRating) {
    //this.dinner = newRating
    
  //}
  // Method to display the information
  //displayInfo() {
    //display.innerHTML += `<p>Breakfast: ${this.breakfast}<br>Snack: ${this.snack}<br>Lunch: ${this.lunch}<br>SnackTwo: ${this.snacktwo}</p><br><p>Dinner: ${this.dinner}`
  //}
//};

// Test your implementation
//Meal Plan Days:
//const MealPlaySunday = new MealPlan(this.breakfast)
//MealPlanSunday.displayInfo();
//const MealPlanMonday = new MealPlan()
//MealPlanMonday.displayInfo();
//const MealPlanTuesday = new MealPlan()
//MealPlanTuesday.displayInfo();
//const MealPlanWednesday = new MealPlan()
//MealPlanWednesday.displayInfo();
//const MealPlanThursday = new MealPlan()
//MealPlanThursday.displayInfo();
//const MealPlanFriday = new MealPlan()
//MealPlanFriday.displayInfo();
//const MealPlanSaturday = new MealPlan()
//MealPlanSaturday.displayInfo();
