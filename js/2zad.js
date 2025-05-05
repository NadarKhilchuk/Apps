document.querySelectorAll('.hero-pl-block').forEach(block => {
    const input = block.querySelector('input');
    const showBtn = block.querySelector('.hero-pl-toggle-answer.show');
    const hideBtn = block.querySelector('.hero-pl-toggle-answer.hide');
    const enAnswer = block.querySelector('.hero-pl-en-answer');
    const ruAnswer = block.querySelector('.hero-pl-ru-answer');
    const answerBox = block.querySelector('.hero-pl-answer-box');
  
    // Показать ответ
    showBtn.addEventListener('click', () => {
      enAnswer.textContent = block.dataset.answer;
      ruAnswer.textContent = block.dataset.answerRu;
      answerBox.classList.add('show');
      answerBox.style.display = 'block';
      showBtn.style.display = 'none';
      hideBtn.style.display = 'inline-block';
    });
  
    // Скрыть ответ
    hideBtn.addEventListener('click', () => {
      answerBox.classList.remove('show');
      setTimeout(() => {
        answerBox.style.display = 'none';
      }, 400);
      showBtn.style.display = 'inline-block';
      hideBtn.style.display = 'none';
    });
  });
  