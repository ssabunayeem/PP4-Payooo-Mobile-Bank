// general way. for advanced way see cashOut2.js file and utilities.js


document.getElementById("cash-out-button").addEventListener("click", function (event) {
    event.preventDefault();

    const cashOut = document.getElementById("input-cash-out").value;
    const cashOutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById("input-cash-out-pin").value;

    if (pinNumber === "2025") {

        const balance = document.getElementById("balance").innerText;
        const balanceNumber = parseFloat(balance);

        console.log(cashOut, pinNumber, balance)


        const newBalance = balanceNumber - cashOutNumber;

        document.getElementById("balance").innerText = newBalance;

    }
    else {
        alert("failed to Cash Out money, please try again")
    }

})