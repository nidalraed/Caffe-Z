const name = prompt("Please enter your name:");
const gender = prompt("Please enter your gender (male or female):").toLowerCase();

let title = "";

if (gender === "male") {
    title = "Mr";
} else if (gender === "female") {
    title = "Ms";
}

const Age = prompt("How Old Are You? ");
const drinkType = prompt("Do you want a hot or cold drink and name of your drink? (hot/cold):");


const userDataDiv = document.getElementById("user-data");
const userDataList = userDataDiv.querySelector("ul").children;

userDataDiv.querySelector("p").textContent = `Name: ${name}`;
userDataList[0].textContent = `Gender: ${gender}`;
userDataList[1].textContent = `Age : ${Age}`;
userDataList[2].textContent = `Drink Type & Name: ${drinkType}`;

