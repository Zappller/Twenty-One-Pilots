var date = new Date();
const nome = document.getElementById("nomebanda");
let cliques = 0;

nome.addEventListener("click", (e) => {
  e.preventDefault();
  cliques++;
  console.log("Cliques:", cliques);
  
  if (cliques === 1) {
    window.open("https://www.twentyonepilots.com/", "_blank");
  } else if (cliques === 20) {
    window.open("Homenagem.html", "_blank");
  }
  else if (cliques === 21) {
    window.open("https://www.youtube.com/watch?v=DRasWWSmI4o", "_blank");
  }
});

