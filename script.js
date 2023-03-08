const inputName = document.querySelector(".input_name"),
  inputNumber = document.querySelector(".input_number"),
  inputMonth = document.querySelector(".input_date_month"),
  inputYear = document.querySelector(".input_date_year"),
  inputCvc = document.querySelector(".input_cvc");

const cardName = document.querySelector(".card_name"),
  cardNumber = document.querySelector(".card_number"),
  cardMonth = document.querySelector(".card_date_month"),
  cardYear = document.querySelector(".card_date_year"),
  cardCvc = document.querySelector(".card_cvc"),
  btn = document.querySelector(".btn"),
  form = document.querySelector("form"),
  thankWindow = document.querySelector(".thank_window"),
  continueBtn = document.querySelector(".btn_continue"),
  label = document.querySelectorAll("label");

inputName.addEventListener("input", () => {
  cardName.innerHTML = inputName.value;

  if (inputName.value.length == 30) {
    inputNumber.focus();
  }
});

inputNumber.addEventListener("input", () => {
  cardNumber.innerHTML = inputNumber.value;
  
  if (inputNumber.value.length == 20) {
    inputMonth.focus();
  }
});

inputMonth.addEventListener("input", () => {
  cardMonth.innerHTML = inputMonth.value;
  if (inputMonth.value.length == 2) {
    inputYear.focus();
  }
});

inputYear.addEventListener("input", () => {
  cardYear.innerHTML = inputYear.value;
  if (inputYear.value.length == 2) {
    inputCvc.focus();
  }
});

inputCvc.addEventListener("input", () => {
  cardCvc.innerHTML = inputCvc.value;
  if (inputCvc.value.length == 3) {
    btn.focus();
  }
});



thankWindow.style.display = "none";

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!inputName.value) {
    label[0].classList.add("error_message");
  } else if (inputName.value) {
    label[0].classList.remove("error_message");
  }

  if (!inputNumber.value) {
    label[1].classList.add("error_message");
  } else if (inputName.value) {
    label[1].classList.remove("error_message");
  }

  if (!inputMonth.value) {
    label[2].classList.add("error_message");
  } else if (inputMonth.value) {
    label[2].classList.remove("error_message");
  }

  if (!inputYear.value) {
    label[2].classList.add("error_message");
  } else if (inputYear.value) {
    label[2].classList.remove("error_message");
  }

  if (!inputCvc.value) {
    label[3].classList.add("error_message");
  } else if (inputCvc.value) {
    label[3].classList.remove("error_message");
  }

  if (
    inputName.value &&
    inputNumber.value &&
    inputMonth.value &&
    inputYear.value &&
    inputCvc.value
  ) {
    thankWindow.style.display = "block";
    form.style.display = "none";
  }
});

continueBtn.addEventListener("click", () => {
  window.location.reload();
});
