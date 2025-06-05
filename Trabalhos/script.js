        function loadTheme() {
            const theme = localStorage.getItem('theme') || 'light';
            document.body.classList.remove('light-theme', 'dark-theme');
            document.body.classList.add(`${theme}-theme`);
            updateButtonText(theme);
        }

        function toggleTheme() {
            const isDark = document.body.classList.contains('dark-theme');
            const newTheme = isDark ? 'light' : 'dark';

            document.body.classList.remove(isDark ? 'dark-theme' : 'light-theme');
            document.body.classList.add(`${newTheme}-theme`);
            localStorage.setItem('theme', newTheme);
            updateButtonText(newTheme);
        }

        function updateButtonText(theme) {
            const button = document.getElementById('toggle-theme');
            button.textContent = theme === 'dark' ? 'Tema Claro' : 'Tema Escuro';
        }

        document.addEventListener('DOMContentLoaded', () => {
            loadTheme();
            document.getElementById('toggle-theme').addEventListener('click', toggleTheme);
        });

const translations = {
  pt: {
 
    eNnav1: "Introdução",
    eNnav2: "Gostos",
    eNnav3: "Habilidades",
    eNh1a1: "Um Site Sobre Mim",


    eNpag1intro: "Introdução",
    eNescritasb: "Meu nome é Pedro Augusto e se você está lendo isso é porque está no meu site que falará um pouco sobre mim. Nesta seção será somente uma introdução sobre o que vai ter neste site e o porquê eu estou fazendo este site.",
    eNpag1oque: "Como e Porque Estou Fazendo Esse Site",
    eNescritasoq: "Eu estou fazendo esse site por um motivo de prática dos meus conhecimentos sobre o que eu estou estudando e também para uma atividade do meu curso, sendo ele Ciência da Computação. Atualmente estou no início desse meu curso, mas acredito que mesmo com o meu conhecimento atual posso ser capaz de fazer um site minimamente apresentável. Eu também estou programando esse site com a linguagem HTML e estilizando com CSS, e no futuro pretendo melhorar ainda mais esse site com JavaScript para deixá-lo animado e cheio de transições.",

 
    eNtitulojogos: "Jogos",
    eNescritajogos: "Um dos meus maiores gostos atualmente são jogar. Eu jogo em média 5 jogos diferentes: Valorant, League of Legends, Rust, Minecraft e Overwatch. Na maior parte do tempo costumo jogar League of Legends sozinho. Já os outros jogos costumo jogar com amigos. Além desses jogos, tenho grande interesse em jogos de maquinário, nos quais você tem que construir uma fábrica e gerenciar recursos e máquinas.",
    eNtitulofilmes: "Filmes e Séries",
    eNescritafilmes: "Eu também gosto de filmes e séries diferentes, mas na maior parte do tempo costumo assistir séries. Uma das minhas séries favoritas é Arcane e Breaking Bad, que no caso ainda não terminei de assistir por completo. Também é comum eu ver filmes e séries resumidos em canais do YouTube.",

    eNhabilidades: "Habilidades",
    eNcaixa1: "Sou dedicado aos estudos e procuro fazer todas as minhas tarefas do meu curso com o máximo de atenção possível.",
    eNcaixa2: "Tenho facilidade para aprender línguas e acho muito fácil aprender inglês.",
    eNcaixa3: "Sei programar em HTML, CSS e JavaScript.",
    eNcaixa4: "Tenho uma boa comunicação e sou uma pessoa calma e amigável.",

  
    eNfooter1: "Pedro Augusto de Almeida Gonçalves",
    eNfooter2: "Número: +55 11 99134-2470",
    eNfooter3: "Email: pedrobrzrks@gmail.com",
  },
  en: {
 
    eNnav1: "Introduction",
    eNnav2: "Hobbies",
    eNnav3: "Skills",
    eNh1a1: "A Website About Me",


    eNpag1intro: "Introduction",
    eNescritasb: "My name is Pedro Augusto and if you are reading this it is because you are on my website that talks a little about me. This section is only an introduction about what will be on this site and why I am making this site.",
    eNpag1oque: "How and Why I Am Making This Site",
    eNescritasoq: "I am making this site to practice my knowledge about what I am studying and also for an assignment in my course, which is Computer Science. I am currently at the beginning of this course, but I believe that even with my current knowledge I can make a minimally presentable website. I am also programming this site with HTML and styling it with CSS, and in the future I intend to improve it even more with JavaScript to make it animated and full of transitions.",


    eNtitulojogos: "Games",
    eNescritajogos: "One of my biggest hobbies currently is playing games. I usually play 5 different games: Valorant, League of Legends, Rust, Minecraft and Overwatch. Most of the time I play League of Legends alone. I play the other games with friends. Besides these games, I am very interested in machinery games where you have to build a factory and manage resources and machines.",
    eNtitulofilmes: "Movies and Series",
    eNescritafilmes: "I also like different movies and series, but most of the time I usually watch series. One of my favorite series is Arcane and Breaking Bad, which I haven't finished watching yet. It is also common for me to watch summarized movies and series on YouTube channels.",


    eNhabilidades: "Skills",
    eNescritashabilidade: "My current skills are: basic C language, basic CSS and HTML. I'm also good at English - I'd say my English is intermediate to advanced. I'm also pretty good at self-studying. For example, I learned how to do CSS while developing this website.",

  
    eNfooter1: "Pedro Augusto de Almeida Gonçalves",
    eNfooter2: "Phone: +55 11 99134-2470",
    eNfooter3: "Email: pedrobrzrks@gmail.com",
  }
};

function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const languageBtn = document.getElementById("toggle-language");
  let currentLang = "pt";

  languageBtn.addEventListener("click", () => {
    currentLang = currentLang === "pt" ? "en" : "pt";
    setLanguage(currentLang);
    languageBtn.textContent = currentLang === "pt" ? "English" : "Português";
  });

  setLanguage(currentLang);
});

let currentLang = localStorage.getItem("language") || "pt";

languageBtn.addEventListener("click", () => {
  currentLang = currentLang === "pt" ? "en" : "pt";
  localStorage.setItem("language", currentLang);
  setLanguage(currentLang);
  languageBtn.textContent = currentLang === "pt" ? "English" : "Português";
});

