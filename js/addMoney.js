// general way. for advanced way see addMoney2.js file and utilities.js

document.getElementById("add-button").addEventListener("click", function (event) {
    event.preventDefault();

    const addMoney = document.getElementById("input-add-money").value;
    const addMoneyNumber = parseFloat(addMoney);
    const pinNumber = document.getElementById("input-pin-number").value;

    if (pinNumber === "2025") {

        const balance = document.getElementById("balance").innerText;
        const balanceNumber = parseFloat(balance);

        const newBalance = addMoneyNumber + balanceNumber;
        document.getElementById("balance").innerText = newBalance;


    }
    else {
        alert("failed to add money, please try again")
    }

})