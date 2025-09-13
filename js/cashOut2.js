document.getElementById("cash-out-button").addEventListener("click", function (event) {
    event.preventDefault();

    const cashOut = getInputValueById("input-cash-out");
    const pin = getInputValueById("input-cash-out-pin");

    if (isNaN(cashOut)) {
        alert("failed to add money, Not a Number");
        return;
    }


    if (pin === 2025) {
        const balance = getTextValueById("balance");

        if (balance < cashOut) {
            alert("Balance Low, please try again");
            return;
        }


        const newBalance = balance - cashOut;

        document.getElementById("balance").innerText = newBalance;

        // cash out history
        const div = document.createElement("div");
        div.classList.add("bg-blue-200", "mt-4", "text-left", "p-4", "m-4", "rounded-2xl")
        div.innerHTML = ` 
        <h4 class="font-semibold  ">Add Money:</h4>
        <p class=" ">Cash Out ${cashOut}.New Balance ${newBalance} TK.</p>
        `
        document.getElementById("transaction-container").appendChild(div);
    }
    else {
        alert("failed to add money, please try again");
    }

})