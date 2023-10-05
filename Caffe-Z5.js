const userForm = document.getElementById("user-form");
const userDataDiv = document.getElementById("user-data");

userForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = userForm.elements.username.value;
    const age = userForm.elements.age.value;

    let drinkType = "";
    if (userForm.elements.hot.checked) {
        drinkType = "Hot";
    } else if (userForm.elements.cold.checked) {
        drinkType = "Cold";
    }

    const drinkName = userForm.elements.drinkName.value;

    userDataDiv.innerHTML = `
        <p>Name: ${username}</p>
        <p>Age: ${age}</p>
        <p>Drink Type & Name: ${drinkType} ${drinkName}</p>
    `;

    userForm.reset();
});