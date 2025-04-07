// Apre la modale quando clicchi su "Accedi"
document.querySelector('#linksRIGHT a:nth-child(2)').addEventListener('click', () => {
    document.querySelector('#login-modal').classList.remove('hidden');
    document.querySelector('#login-modal').classList.add('show');
  });
  
  // Chiude la modale
  document.querySelector('.close-btn').addEventListener('click', () => {
    document.querySelector('#login-modal').classList.remove('show');
    document.querySelector('#login-modal').classList.add('hidden');
  });
  