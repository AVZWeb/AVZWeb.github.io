var button = document.querySelector(".appointment-button");
var popup = document.querySelector(".modal");
var form = document.querySelector(".field-appointment-form");
var datein = form.querySelector("[name=date-in]");
var dateout = form.querySelector("[name=date-out]");
var adults = form.querySelector("[name=adult-count]");
var child = form.querySelector("[name=child-count]");
var adultsStored = localStorage.getItem("adults");
var childStored = localStorage.getItem("children");
var submit = document.querySelector(".field-appointment-btn");

button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-show");
    if (popup.classList.contains("modal-show")) {
    popup.classList.add("modal-animation");
        if (adultsStored) {
            adults.value = adultsStored;
            child.focus();
        } else if (childStored) {
            childStored.value = childStored;
            adults.focus();
        } else {
            submit.focus();
        };
    };
});

form.addEventListener("submit", function (evt) {
    if (!datein.value || !dateout.value || !adults.value || !child.value) {
        evt.preventDefault();
        alert("Все поля необходимо заполнить");
    } else {
        localStorage.setItem("adults", adults.value);
        localStorage.setItem("child", child.value);
    }
});
