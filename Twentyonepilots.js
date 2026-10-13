var date = new Date();
const nome = document.getElementById("nomebanda");
let cliques = 0;

nome.addEventListener("click", (e) => {
  e.preventDefault();
  cliques++;

  if (cliques === 1) {
    window.open("https://www.twentyonepilots.com/", "_blank");
  } else if (cliques === 21) {
    window.location.href = "Homenagem.html";
  }
});

