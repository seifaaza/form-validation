// 3 letters minimum
function validateName() {
  Name = document.querySelector("#name")
  if (Name.value.length < 3) {
    Name.style.border = "2px solid red"
  } else {
    Name.style.border = "2px solid green"
  }
}

// only 5 numbers
function validateCode() {
  reg = /^[0-9]{5}$/
  code = document.querySelector("#code")
  if (reg.test(code.value) == 0) {
    code.style.border = "2px solid red"
  } else {
    code.style.border = "2px solid green"
  }
}

// 2 capitals letters + 6 numbers
function validateCIN() {
  reg = /^[A-Z]{2}[0-9]{6}$/
  cin = document.querySelector("#CIN")
  if (reg.test(cin.value) == 0) {
    cin.style.border = "2px solid red"
  } else {
    cin.style.border = "2px solid green"
  }
}

// capitals / lower case letters or numbers (between 5 and 16 characters) + finish with '@gmail.com' 
function validateEmail() {
  reg =
    /^[a-zA-Z0-9].{5,16}(@gmail.com){1}$/ 
  email = document.querySelector("#email")
  if (reg.test(email.value) == 0) {
    email.style.border = "2px solid red"
  } else {
    email.style.border = "2px solid green"
  }
}

// capitals or lower case letters(between 4 and 10 charachters) + special charachters + numbers 
function validatePassword() {
  reg = /^[a-zA-Z]{4,10}.{0,1}\d$/
  password = document.querySelector("#password")
  if (reg.test(password.value) == 0) {
    password.style.border = "2px solid red"
  } else {
    password.style.border = "2px solid green"
  }
  confirm = document.querySelector("#confirm")
  if (confirm.value != password.value) {
    confirm.style.border = "2px solid red"
  } else {
    confirm.style.border = "2px solid green"
  }
}