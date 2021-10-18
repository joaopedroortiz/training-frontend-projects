// Campos do formulário e botão
const nome = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const phone = document.querySelector("#phone");
const button = document.querySelector("#button");

//Confirmação para submissão

let nomeValid = false;
let emailValid = false;
let messageValid = false;
let phoneValid = false;

// Aviso status do submit
const warning = document.querySelector("#warning");

// Labels
const nameLabel = document.getElementById("name-label");
const emailLabel = document.getElementById("email-label");
const messageLabel = document.getElementById("message-label");
const phoneLabel = document.getElementById("phone-label");

// Criação do evento click
button.addEventListener("click", sendJson);

async function sendJson() {
  const body = {
    name: nome.value,
    email: email.value,
    phone: phone.value,
    message: message.value,
  };

  //status de cada input
  if (nome.value == "" || !nome.value.includes(" ")) {
    document.getElementById("warning-name").innerText =
      "Informe o nome completo";
  } else {
    document.getElementById("warning-name").innerText = "";
    nomeValid = true;
  }

  if (email.value == "" || !email.value.includes("@", ".")) {
    document.getElementById("warning-email").innerText = "Informe o email";
  } else {
    document.getElementById("warning-email").innerText = "";
    emailValid = true;
  }

  if (message.value.length < 5) {
    document.getElementById("warning-text").innerText = "Informe a mensagem";
  } else {
    document.getElementById("warning-text").innerText = "";
    messageValid = true;
  }

  if (phone === "") {
    document.getElementById("warning-phone").innerText =
      "Informe o telefone corretamente";
  } else {
    document.getElementById("warning-phone").innerText = "";
    phoneValid = true;
  }

  //Condição de envio das informações caso todos campos estejam preenchidos
  if (nomeValid && emailValid && phoneValid && messageValid) {
    const response = await fetch(
      "https://otterwise-fake-api.herokuapp.com/contact",
      {
        method: "post",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();

    if (data.type == "Sucesso") {
      nome.value = "";
      email.value = "";
      phone.value = "";
      message.value = "";
      warning.innerText = `Dados enviados com sucessso!`;
      setTimeout(() => {
        warning.innerText = "";
      }, 3500);
    } else if (data.type) {
      warning.innerText = `Erro, por favor tente novamente mais tarde.`;
      console.log();
    }
    console.log(data);
  }
}
