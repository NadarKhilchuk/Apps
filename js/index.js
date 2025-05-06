document.querySelectorAll('.overlord-pl-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    chip.classList.toggle('flipped');
  });
});