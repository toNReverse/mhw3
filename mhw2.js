// funzione per chiudere tutte le finestre di navigazione tranne quella attiva
function chiudiAltriModaliNav(activeModalId) {
    const navModals = ['#nav-donna', '#nav-uomo', '#nav-bskteen'];
    
    navModals.forEach(modalId => {
        if (modalId !== activeModalId) {
            const modal = document.querySelector(modalId);
            if (modal) {
                modal.classList.remove('show');
                modal.classList.add('hidden');
            }
        }
    });
}

// Funzione per aprire una modale
function apriModale(triggerSelector, modalSelector) {
  document.querySelector(triggerSelector).addEventListener('click', () => {
    chiudiAltriModaliNav(modalSelector); // chiudi gli altri prima di aprire il nuovo
    const modale = document.querySelector(modalSelector);
    modale.classList.remove('hidden');
    modale.classList.add('show');
  });
}

// Funzione per chiudere una modale
function chiudiModale(closeBtnSelector, modalSelector) {
  document.querySelector(closeBtnSelector).addEventListener('click', () => {
    const modale = document.querySelector(modalSelector);
    modale.classList.remove('show');
    modale.classList.add('hidden');
  });
}

// Apertura e chiusura modale "Accedi"
apriModale('#linksRIGHT a:nth-child(2)', '#login-modal');
chiudiModale('.close-btn-log', '#login-modal');

// Apertura e chiusura modale "Carrello"
apriModale('#linksRIGHT a:nth-child(3)', '#reg-modal');
chiudiModale('.close-btn-reg', '#reg-modal');

function chiudiNavModale(modalSelector) {
  const navModale = document.querySelector(modalSelector);

  navModale.addEventListener('mouseleave', () => {
    navModale.classList.remove('show');
    navModale.classList.add('hidden');
  });
}

// Apertura modali Navbar
apriModale('#linksLEFT a:nth-child(1)', '#nav-donna');
apriModale('#linksLEFT a:nth-child(2)', '#nav-uomo');
apriModale('#linksLEFT a:nth-child(3)', '#nav-bskteen');

// Chiusura modali Navbar al mouseleave
chiudiNavModale('#nav-donna');
chiudiNavModale('#nav-uomo');
chiudiNavModale('#nav-bskteen');

let isSearchOpen = false;

document.querySelector('.search-container').addEventListener('click', function() {
    const searchText = document.querySelector('#search-text');
    const searchIcon = document.querySelector('.search-icon');
    const navbar = document.querySelector('.navbar-container');
    const elementsToToggle = [
        document.querySelector('section'),
        document.querySelector('#linksLEFT'),
    ];

    isSearchOpen = !isSearchOpen;

    // Toggle elements visibility
    elementsToToggle.forEach(el => {
        if (el) {
            el.style.display = isSearchOpen ? 'none' : '';
        }
    });

    // Toglie il bordo da navbar 
    navbar.style.borderBottom = isSearchOpen ? 'none' : '1px solid black';


    // Attiva/disattiva la visibilità dell'input di ricerca
    searchText.textContent = isSearchOpen ? "CHIUDI" : "CERCA";
    searchIcon.src = isSearchOpen ? "./img/close-icon.png" : "./img/54481.png";
    
    // Cambia il colore del testo dell'input di ricerca
    document.querySelector('#search-page').style.display = isSearchOpen ? 'block' : 'none';


});
document.querySelectorAll('.right-icon img').forEach(heartIcon => {
  heartIcon.addEventListener('click', function() {
      // Toggle between filled and empty heart
      const isFilled = this.src.includes('filled-hearth');
      this.src = isFilled ? './img/hearth-search-page.png' : './img/filled-hearth-search-page.png';
  });
});