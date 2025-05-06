function toggleTranslation() {
    const translation = document.getElementById('translation');
    translation.classList.toggle('show');
    
    // Обновляем текст кнопки
    const button = document.querySelector('.omega-pl-button');
    if (translation.classList.contains('show')) {
      button.textContent = 'Hide Translation';
    } else {
      button.textContent = 'Show Translation';
    }
  }