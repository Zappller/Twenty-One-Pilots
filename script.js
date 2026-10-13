const player = document.getElementById('player');
const musica1 = document.querySelector('.RegionalAtBest');
const musica2 = document.querySelector('.Vessel');
const musica3 = document.querySelector('.Blurryface');
const musica4 = document.querySelector('.Trench');
const musica5 = document.querySelector('.ScaledAndIcy');
const musica6 = document.querySelector('.Clancy');
const musica7 = document.querySelector('.Breach');

let musicaAtual = null;



function getVinil(musica) {
  return musica.closest('.album').querySelector('.vinil');
}


function getVinil(musica) {
  return musica.closest('.album').querySelector('.vinil');
}


function animarSaida(musica, aoTerminar) {
  const vinil = getVinil(musica);
  vinil.classList.remove('recolhendo');
  vinil.classList.add('tocando');

  vinil.addEventListener('animationend', function fim(e) {
    if (e.animationName !== 'sair-vinil') return;
    vinil.removeEventListener('animationend', fim);
    if (aoTerminar && vinil.classList.contains('tocando')) aoTerminar();
  });
}


function animarRecolher(musica) {
  const vinil = getVinil(musica);
  vinil.classList.remove('tocando');
  vinil.classList.add('recolhendo');

  vinil.addEventListener('animationend', function fim(e) {
    if (e.animationName !== 'recolher') return;
    vinil.removeEventListener('animationend', fim);
    vinil.classList.remove('recolhendo');
  });
}



function tocarMusica(musica) {
  musicaAtual = musica;
  player.src = musica.getAttribute('data-audio');
  animarSaida(musica, () => player.play());
}

function pausarMusica(musica) {
  player.pause();
  animarRecolher(musica);
}

function retomarMusica(musica) {
  animarSaida(musica, () => player.play());
}



function clicarMusica(musica) {
  if (musicaAtual === musica) {
    if (player.paused) {
      retomarMusica(musica);
    } else {
      pausarMusica(musica);
    }
    return;
  }

  if (musicaAtual) pausarMusica(musicaAtual);
  tocarMusica(musica);
}


[musica1, musica2, musica3, musica4, musica5, musica6, musica7].forEach((musica) => {
  musica.addEventListener('click', () => clicarMusica(musica));
});

player.addEventListener('ended', () => {
  animarRecolher(musicaAtual);
  musicaAtual = null;
});