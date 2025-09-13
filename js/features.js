// general way. for advanced way see features2.js file and utilities.js


// show-add-money from

document.getElementById("show-add-money-button").addEventListener("click", function () {
    document.getElementById("add-money-form").classList.remove("hidden");
    document.getElementById("cash-out-form").classList.add("hidden");
})

// show-cash-out from

document.getElementById("show-cash-out-button").addEventListener("click", function () {
    document.getElementById("cash-out-form").classList.remove("hidden");
    document.getElementById("add-money-form").classList.add("hidden");
})
