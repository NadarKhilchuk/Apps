function toggleTranslation() {
  const translation = document.getElementById('translation');
  const button = document.querySelector('.omega-pl-button');
  
  translation.classList.toggle('show');
  
  // Обновляем текст кнопки
  if (translation.classList.contains('show')) {
    button.textContent = 'Hide Translation';
  } else {
    button.textContent = 'Show Translation';
  }
}