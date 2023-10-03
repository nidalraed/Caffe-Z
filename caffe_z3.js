const answers = [];

function getGender() {
    let gender = null;
    while (gender !== "male" && gender !== "female") {
        gender = prompt("Please enter your gender (male or female):").toLowerCase();
    }
    return gender;
}

const name = prompt("Please enter your name:");
const gender = getGender();
const drinkType = prompt("Do you want a hot or cold drink?");
const drinkName = prompt("Please enter the name of the drink you want:");

const title = gender === "male" ? "Mr" : "Ms";
console.log(`Welcome, ${title}. ${name}! Your ${drinkType} ${drinkName} is being prepared.`);

answers.push([name, gender, drinkType, drinkName]);
for (let i = 0; i < answers.length; i++) {
    const [userName, userGender, userDrinkType, userDrinkName] = answers[i];
    console.log(`Name: ${userName}, Gender: ${userGender}, Type of Drink: ${userDrinkType}, Drink Name: ${userDrinkName}`);
}
