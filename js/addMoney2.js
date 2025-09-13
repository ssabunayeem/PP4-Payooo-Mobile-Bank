document.getElementById("add-button").addEventListener("click", function (event) {
    event.preventDefault();

    const addMoney = getInputValueById("input-add-money");
    const pin = getInputValueById("input-pin-number");


    if (isNaN(addMoney)) {
        alert("failed to add money, Not a Number");
        return;
    }

    if (pin === 2025) {
        const balance = getTextValueById("balance");
        const newBalance = balance + addMoney;

        document.getElementById("balance").innerText = newBalance;



        // add history
        const div = document.createElement("div");
        div.classList.add("bg-green-200", "mt-4", "text-left", "p-4", "m-4", "rounded-2xl")
        div.innerHTML = ` 
        <h4 class="font-semibold  ">Add Money:</h4>
        <p class=" ">${addMoney} added. New Balance ${newBalance} TK.</p>
        `
        document.getElementById("transaction-container").appendChild(div);



    }
    else {
        alert("failed to add money, please try again");
    }

})