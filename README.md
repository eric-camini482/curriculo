# 📄 Currículo Web Interativo

## 📌 Sobre o Projeto

Este projeto consiste em um **currículo profissional estático e interativo**, desenvolvido como requisito avaliativo para a disciplina de Programação IV. A aplicação foi feita utilizando HTML5, CSS3 responsivo e JavaScript com manipulação do DOM e Canvas.

## 🧱 Estrutura & Funcionalidades

### 🌐 HTML5 Semântico
- Estruturação semântica utilizando `<header>`, `<main>`, `<section>`, `<article>` e `<footer>`.
- Seções dedicadas para apresentação, habilidades, histórico de projetos e canais de contato.
- Suporte a tags de mídia (`<img>`) e formulários funcionais.

### 🎨 Estilização com CSS3 (`style.css`)
- **Layout com Flexbox:** Organização alinhada para cabeçalho, botões e listas.
- **Design Responsivo:** Adaptação fluida para dispositivos móveis e telas menores.
- **Identidade Visual:** Efeitos de `hover` e transições suaves nos botões.

### 🧠 Interatividade com JavaScript (`script.js`)
1. **Saudação:** Captura do nome digitado pelo usuário com atualização do cabeçalho (`innerText`) e alerta interativo (`alert()`).
2. **Exibição Dinâmica (Toggle):** Botão interativo com `addEventListener()` para ocultar e mostrar a seção de projetos.
3. **Interação de Formulário:** Validação e feedback visual após submissão do formulário de contato.

### 🖼️ Recursos com HTML5 Canvas
- Renderização visual de um gráfico de barras desenhado via JavaScript no elemento `<canvas>`, apresentando o nível de domínio em tecnologias.

## 📁 Organização dos Arquivos

```text
/curriculo/
├── index.html       # Estrutura principal da página
├── style.css        # Estilização visual e responsividade
├── script.js        # Lógica JS, manipulação do DOM e Canvas
└── /media/
    └── foto.jpg     # Foto de perfil
