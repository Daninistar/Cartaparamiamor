function startLetter() {
  document.querySelector('.overlay').style.display = 'none';
  document.querySelector('.container').classList.remove('hidden');

  const music = document.getElementById('music');
  if (music) {
    music.volume = 0.3;
    music.play().catch(() => {});
  }
}
