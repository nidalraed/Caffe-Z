const name = prompt("Please enter your name:");
const gender = prompt("Please enter your gender (male or female):").toLowerCase();

let title = "";

if (gender === "male") {
    title = "Mr";
} else if (gender === "female") {
    title = "Ms";
}

const age = prompt("How Old Are You? ");
const drinkType = prompt("Do you want a hot or cold drink and name of your drink? (hot/cold):");

const userOutputDiv = document.createElement("div");
userOutputDiv.setAttribute("id", "user-output");

const userOutputParagraph = document.createElement("p");
userOutputParagraph.textContent = "User Information:";

const userOutputList = document.createElement("ul");
const nameListItem = document.createElement("li");
nameListItem.textContent = `Name: ${name}`;

const genderListItem = document.createElement("li");
genderListItem.textContent = `Gender: ${gender}`;

const ageListItem = document.createElement("li");
ageListItem.textContent = `Age : ${age}`;

const drinkListItem = document.createElement("li");
drinkListItem.textContent = `Drink Type & Name: ${drinkType}`;

userOutputList.appendChild(nameListItem);
userOutputList.appendChild(genderListItem);
userOutputList.appendChild(ageListItem);
userOutputList.appendChild(drinkListItem);

userOutputParagraph.appendChild(userOutputList);
userOutputDiv.appendChild(userOutputParagraph);

document.body.appendChild(userOutputDiv);