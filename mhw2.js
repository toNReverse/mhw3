// Funzione per aprire una modale
function apriModale(triggerSelector, modalSelector) {
  document.querySelector(triggerSelector).addEventListener('click', () => {
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
    const searchText = document.querySelector('.search-text');
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

    // Toggle search text
    searchText.textContent = isSearchOpen ? "CHIUDI" : "CERCA";
});