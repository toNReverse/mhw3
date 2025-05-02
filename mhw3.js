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
apriModale('#linksRIGHT a:nth-child(3)', '#cart-modal');
chiudiModale('.close-btn-cart', '#cart-modal');

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

/* MENU MOBILE */
const openBtn = document.getElementById('menu-mobile');
const closeBtn = document.getElementById('close-menu');
const menu = document.getElementById('side-menu');

openBtn.addEventListener('click', () => {
  menu.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('open');
});

// Tabs attivi
const tabs = document.querySelectorAll('#gender-tabs .tab');
const contents = document.querySelectorAll('.menu-content');

tabs.forEach(tab => {
  tab.addEventListener('click', function (e) {
    e.preventDefault();

    // Aggiorna tab attivo
    tabs.forEach(t => t.classList.remove('active'));
    this.classList.add('active');

    // Mostra il contenuto corretto
    const gender = this.getAttribute('data-gender');
    contents.forEach(content => content.style.display = 'none');
    document.getElementById('menu-' + gender).style.display = 'block';
  });
});

/* API */
const selector = document.getElementById('currency-selector');
const menuValuta = document.getElementById('currency-menu');
const dropdown = document.getElementById('currency-dropdown');

// Mappa simboli-valuta
const symbols = {
  EUR: '€',
  USD: '$',
  GBP: '£',
  JPY: '¥',
  CAD: 'C$',
  AUD: 'A$',
  CHF: 'CHF'
};

const reverseSymbols = Object.fromEntries(
  Object.entries(symbols).map(([code, symbol]) => [symbol, code])
);

selector.addEventListener('click', () => {
  menuValuta.classList.toggle('hidden');
});

dropdown.addEventListener('change', () => {
  const selectedCurrency = dropdown.value;
  console.log('Valuta selezionata:', selectedCurrency);
  menuValuta.classList.add('hidden');
  updateExchangeRates(selectedCurrency);
});

function updateExchangeRates(toCurrency) {
  // Qui includi tutte le classi che contengono prezzi
  const priceSelectors = ['.price', '.price-red', '.price-old']; // Aggiungi qui altre classi
  const priceElements = document.querySelectorAll(priceSelectors.join(', '));

  priceElements.forEach(priceElement => {
    const text = priceElement.textContent.trim();

    // Regex dinamica con tutti i simboli presenti nella mappa
    const currencySymbols = Object.values(symbols)
      .map(s => s.replace(/[$^.*+?()[\]{}|\\]/g, '\\$&'))
      .join('|');
    const regex = new RegExp(`^([\\d,.]+)\\s*(${currencySymbols})$`);
    const match = text.match(regex);

    if (!match) return;

    const amount = parseFloat(match[1].replace(',', '.'));
    const symbol = match[2];
    const fromCurrency = reverseSymbols[symbol];

    if (fromCurrency === toCurrency) return;

    const apiKey = 'INSERISCI API KEY :P';
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) throw new Error('Errore nella risposta API');
        return response.json();
      })
      .then(json => {
        const rate = json.conversion_rates[toCurrency];
        if (!rate) return;

        const converted = (amount * rate).toFixed(2);
        const newSymbol = symbols[toCurrency] || toCurrency;
        priceElement.textContent = `${converted} ${newSymbol}`;
      })
      .catch(error => {
        console.error('Errore:', error);
      });
  });
}