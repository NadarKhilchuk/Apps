document.querySelectorAll('.hero-pl-block').forEach(block => {
  const showBtn = block.querySelector('.hero-pl-toggle-answer.show');
  const hideBtn = block.querySelector('.hero-pl-toggle-answer.hide');
  const answerBox = block.querySelector('.hero-pl-answer-box');
  const translation = block.getAttribute('data-answer');

  showBtn.addEventListener('click', () => {
    answerBox.classList.add('show');
    block.querySelector('.hero-pl-en-answer').textContent = translation;
    showBtn.style.display = 'none';
    hideBtn.style.display = 'inline-block';
  });

  hideBtn.addEventListener('click', () => {
    answerBox.classList.remove('show');
    showBtn.style.display = 'inline-block';
    hideBtn.style.display = 'none';
  });
});