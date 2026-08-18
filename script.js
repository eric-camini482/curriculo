document.addEventListener("DOMContentLoaded", function () {

  const btnOi = document.getElementById("btn-oi");
  if (btnOi) {
    btnOi.addEventListener("click", function () {
      alert("Olá! Obrigado por acessar meu currículo.");
    });
  }

  const btnSaudacao = document.getElementById("btn-saudacao");
  const inputNome = document.getElementById("nome-usuario");
  const inputEmail = document.getElementById("email-contato");
  const tituloBoasVindas = document.getElementById("boas-vindas-titulo");

  if (btnSaudacao) {
    btnSaudacao.addEventListener("click", function () {
      const nome = inputNome.value.trim();
      const email = inputEmail.value.trim();

      if (nome !== "") {
        tituloBoasVindas.innerText = `Olá, eu sou Eric Camini (Bem-vindo, ${nome})`;
        alert(`Obrigado pelo contato, ${nome}! ${email ? "Responderemos via " + email : ""}`);
        inputNome.value = "";
        inputEmail.value = "";
      } else {
        alert("Por favor, preencha o seu nome.");
      }
    });
  }

  const btnTrocaFundo = document.getElementById("btn-troca-fundo");
  const bodyApp = document.getElementById("body-app");

  if (btnTrocaFundo) {
    btnTrocaFundo.addEventListener("click", function () {
      bodyApp.classList.toggle("dark-theme");
      if (bodyApp.classList.contains("dark-theme")) {
        btnTrocaFundo.innerText = "☀️ Tema";
      } else {
        btnTrocaFundo.innerText = "🌑 Tema";
      }
    });
  }

  const btnToggle = document.getElementById("btn-toggle-projetos");
  const conteudoProjetos = document.getElementById("conteudo-projetos");

  if (btnToggle) {
    btnToggle.addEventListener("click", function () {
      if (conteudoProjetos.style.display === "none") {
        conteudoProjetos.style.display = "block";
        btnToggle.innerText = "Ocultar";
      } else {
        conteudoProjetos.style.display = "none";
        btnToggle.innerText = "Mostrar";
      }
    });
  }

});
