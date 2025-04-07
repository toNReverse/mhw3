// Apre la modale quando clicchi su "Accedi"
document.querySelector('#linksRIGHT a:nth-child(2)').addEventListener('click', () => {
    document.querySelector('#login-modal').classList.remove('hidden');
    document.querySelector('#login-modal').classList.add('show');
  });
  
  // Chiude la modale
  document.querySelector('.close-btn-log').addEventListener('click', () => {
    document.querySelector('#login-modal').classList.remove('show');
    document.querySelector('#login-modal').classList.add('hidden');
  });
  
// Apre la modale quando clicchi su "Carrello"
  document.querySelector('#linksRIGHT a:nth-child(3)').addEventListener('click', () => {
    document.querySelector('#reg-modal').classList.remove('hidden');
    document.querySelector('#reg-modal').classList.add('show');
  });
  // Chiude la modale
  document.querySelector('.close-btn-reg').addEventListener('click', () => {
    document.querySelector('#reg-modal').classList.remove('show');
    document.querySelector('#reg-modal').classList.add('hidden');
  });  