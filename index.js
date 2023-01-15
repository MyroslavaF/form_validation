var form = document.getElementById("form");
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var passwordConf = document.getElementById("passwordConf");




function validateForm() {
   
  var NombreOk = checkNombre();
  var EmailOk = checkEmail();
  var PasswordOk = checkPassword(); 
  var result = NombreOk && EmailOk && PasswordOk;
  
   
  if(result) 
  alert("La incripcion ha sido correcta"); 
  return result; 
}


form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
  
}
);


function checkNombre() {
  let nameValue = username.value.trim();
  if(nameValue==="") { 
    setStatus(username, "Rellene este campo", "error");
     return false; 
    }
  const pattern = new RegExp('^[A-Za-z]+$', 'i');
   if (!pattern.test(nameValue)) {
    setStatus(username, "Solo letras", "error");
    return false; 
  }
    setStatus(username, null, "success");
    return true;
  
  
};

function checkEmail() {
  
  let emailValue = email.value;

  if (emailValue === "") {
    setStatus(email, "Rellene este campo", "error");
    return false;
  }  

  const pattern = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");

  if (!pattern.test(emailValue)) {
    setStatus(email, "Email invalido", "error");
    return false;
  }


  
    setStatus(email, null, "success");
    return true;
};

function checkPassword() {

  let password1 = password.value;
  let password2 = passwordConf.value;
  let isValid = true;

  if (password1 === "") {
    setStatus(password, "Rellene este campo", "error");
    isValid = false;
  } else if (password1.length > 8) {
    setStatus(password, "No debe tener mas de 8 caracteres", "error");
    isValid = false;
  } else {
    setStatus(password, null, "success");
  }


  if (password2 === "") {
    setStatus(passwordConf, "Rellene este campo", "error");
    isValid = false;
  } else {
    setStatus(passwordConf, null, "success");
  }

  if (password2 !== password1) {
    setStatus(passwordConf, "Las contraseñas no coinciden", "error");
    setStatus(password, "Las contraseñas no coinciden", "error");
    isValid = false;
  }
   return isValid;
};


  var setStatus = (field, message, status) => {
  const successIcon = field.parentElement.querySelector(".icon-success");
  const errorIcon = field.parentElement.querySelector(".icon-error");
  const errorMessage = field.parentElement.querySelector(".error-message");

  if (status === "success") {
    if (errorIcon) {
      errorIcon.classList.add("hidden");
    }
    if (errorMessage) {
      errorMessage.innerText = "";
    }

    successIcon.classList.remove("hidden");
    field.classList.add("success");
    field.classList.remove("error-input");
  }

  if (status === "error") {
    if (successIcon) {
      successIcon.classList.add("hidden");
    }
    field.parentElement.querySelector(".error-message").innerText = message;

    errorIcon.classList.remove("hidden");
    field.classList.add("error-input");
    field.classList.remove("success");

  }
};