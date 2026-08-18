document.addEventListener("DOMContentLoaded", function () {
  
  // ---------------------------------------------------------------------
  // Funcionalidade 1: Boas-vindas com alert + Alteração dinâmica (innerText)
  // ---------------------------------------------------------------------
  const btnSaudacao = document.getElementById("btn-saudacao");
  const inputNome = document.getElementById("nome-usuario");
  const tituloBoasVindas = document.getElementById("boas-vindas-titulo");

  btnSaudacao.addEventListener("click", function () {
    const nome = inputNome.value.trim();
    
    if (nome !== "") {
      // Atualiza o h1 dinamicamente
      tituloBoasVindas.innerText = `Olá, ${nome}! Seja bem-vindo(a) ao meu currículo`;
      alert(`Obrigado por visitar a página, ${nome}!`);
      inputNome.value = "";
    } else {
      alert("Por favor, digite seu nome no campo indicado.");
    }
  });

  // ---------------------------------------------------------------------
  // Funcionalidade 2: Mostrar / Ocultar Seção (addEventListener + toggle)
  // ---------------------------------------------------------------------
  const btnToggle = document.getElementById("btn-toggle-projetos");
  const conteudoProjetos = document.getElementById("conteudo-projetos");

  btnToggle.addEventListener("click", function () {
    if (conteudoProjetos.style.display === "none") {
      conteudoProjetos.style.display = "block";
      btnToggle.innerText = "Ocultar";
    } else {
      conteudoProjetos.style.display = "none";
      btnToggle.innerText = "Mostrar";
    }
  });

  // ---------------------------------------------------------------------
  // Funcionalidade 3 (Formulário): Feedback de envio
  // ---------------------------------------------------------------------
  const btnEnviarEmail = document.getElementById("btn-enviar-email");
  const emailInput = document.getElementById("email-contato");

  btnEnviarEmail.addEventListener("click", function () {
    if (emailInput.checkValidity() && emailInput.value !== "") {
      alert(`Mensagem registrada para o e-mail: ${emailInput.value}`);
      emailInput.value = "";
    }
  });

  // ---------------------------------------------------------------------
  // Elemento Canvas: Desenhando um gráfico simples de barras
  // ---------------------------------------------------------------------
  const canvas = document.getElementById("meu-canvas");
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext("2d");

    // Limpar fundo
    ctx.fillStyle = "#f8f9fa";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Dados do gráfico (Rótulo, Valor de 0 a 100)
    const dados = [
      { label: "HTML/CSS", valor: 85 },
      { label: "JS", valor: 70 },
      { label: "Python", valor: 90 }
    ];

    const larguraBarra = 40;
    const espacamento = 50;
    const inicioX = 30;
    const baseY = 120;

    dados.forEach((item, index) => {
      const x = inicioX + index * (larguraBarra + espacamento);
      const alturaBarra = (item.valor / 100) * 80;
      const y = baseY - alturaBarra;

      // Desenhar a barra
      ctx.fillStyle = "#3498db";
      ctx.fillRect(x, y, larguraBarra, alturaBarra);

      // Texto do rótulo
      ctx.fillStyle = "#333333";
      ctx.font = "12px sans-serif";
      ctx.fillText(item.label, x - 5, baseY + 18);
    });
  }
});