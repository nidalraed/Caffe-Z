const name = prompt("Please enter your name:");
const gender = prompt("Please enter your gender (male or female):").toLowerCase();

let title = "";

if (gender === "male") {
    title = "Mr";
} else if (gender === "female") {
    title = "Ms";
}

const drinkType = prompt("Do you want a hot or cold drink? (hot/cold):");
const drinkName = prompt("Please enter the name of your drink:");


const userDataDiv = document.getElementById("user-data");
const userDataList = userDataDiv.querySelector("ul").children;

userDataDiv.querySelector("p").textContent = `Name: ${name}`;
userDataList[0].textContent = `Gender: ${gender}`;
userDataList[1].textContent = `Drink Type: ${drinkType}`;
userDataList[2].textContent = `Drink Name: ${drinkName}`;
