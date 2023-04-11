function valida(input) {

    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    }

    if (input.validity.valid) {
        input.parentElement.classList.remove("formcontato__message__error--error");
        input.parentElement.querySelector(".formcontato__message__error").innerHTML = "";
        console.log(input);

    } else {
        input.parentElement.classList.add("formcontato__message__error--error");
        input.parentElement.querySelector(".formcontato__message__error").innerHTML = errorMessage(tipoDeInput, input);
        console.log(input);
    }

}

function validaTextAreas(textarea) {
    const tipoDeInput = textarea.dataset.tipo;
    if (validadores[tipoDeInput]) {
      validadores[tipoDeInput](textarea);
    }
  
    if (textarea.validity.valid) {
      textarea.parentElement.classList.remove("formcontato__message__error--error");
      textarea.parentElement.querySelector(".formcontato__message__error").innerHTML = "";
      textarea.style.background = "lightgreen"; 
    } else {
      textarea.parentElement.classList.add("formcontato__message__error--error");
      textarea.parentElement.querySelector(".formcontato__message__error").innerHTML =
        errorMessage(tipoDeInput, textarea);
      textarea.style.background = "#FBCDCB";  
    }
  }

  const input = document.querySelector(".formcontato__input");
  const textarea = document.querySelector(".formcontato__textarea");
  const botonEnviar = document.querySelector(".formcontato__botao");
  botonEnviar.addEventListener("click", () => {
    if(input.value=="" && textarea.value=="") {
      alert("No se puede enviar el mensaje. Todos los campos son obligatorios.");
    } else {
      alert("El mensaje ha sido enviado.");
      input.innerHTML=="";
      textarea.innerHTML=="";
    }
  });

const errorTypes = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío",
    },
    email: {
        valueMissing: "El campo correo no puede estar vacío",
        typeMismatch: "El correo no es válido",
        
    },
    asunto: {
        valueMissing: "El campo asunto no puede estar vacío",
    
    },
    mensaje: {
        valueMissing: "El campo mensaje no puede estar vacio",
    },
};


function validarNombre(input) {
    return
}

const validadores = {
    nombre: (input) => validarNombre(input),
};

function errorMessage(tipoDeInput, input) {

    let mensaje = "";
    errorTypes.forEach((error) => {
        if (input.validity[error]) {
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje;

}
const inputs = document.querySelectorAll("input");
const texttareas = document.querySelectorAll("textarea");

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    });
});

texttareas.forEach((textarea) => {
    textarea.addEventListener("blur", (textarea) => {
        validaTextAreas(textarea.target);
    });
});
