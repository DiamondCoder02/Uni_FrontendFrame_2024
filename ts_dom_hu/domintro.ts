const message = document.getElementById('message');
const changeTextBtn = document.getElementById('changeTextBtn');

// Direkt bent hagytam egy TS hibát/figyelmeztetést here.  1. feladat: ennek kijavítása
changeTextBtn.addEventListener('click', () => {
  if (message) {
    message.textContent = 'Text Updated!';
    message.classList.add('text-green-600');
    message.classList.remove('text-blue-500');
  }
});

//  querySelector getElementById helyett
const toggleDiv = document.querySelector('#toggleDiv');
const toggleVisibilityBtn = document.querySelector('#toggleVisibilityBtn');

// Itt már kezeljük a TS problémát.
// A toggleVisibilityBtn típusa lehet null, ebben az esetben nem szerencsés megívni az eseménykezelőt.

if (toggleVisibilityBtn === null) {
  alert('Error: toggleVisibilityBtn is null!');
} else {
toggleVisibilityBtn.addEventListener('click', () => {
  if (toggleDiv) {
    toggleDiv.classList.toggle('hidden');
  }
});
}


const items = document.getElementById('items');
const addItemBtn = document.getElementById('addItemBtn');

// A feltételes elágazás a típusbiztonságot szolgálja...
if (addItemBtn === null) {
  alert('Error: addItemBtn is null!');
} else if (items === null) {
  alert('Error: items is null!');
} else {
  addItemBtn.addEventListener('click', () => {
    // Új elemet hozunk létre...
    const newItem = document.createElement('div');
    newItem.textContent = `Item ${items.children.length + 1}`;
    newItem.className = 'bg-blue-100 text-blue-800 p-2 m-2 rounded w-1/4';
    // ... és hozzáadjuk a DOM-hoz, mint div-et, 'items' id-vel.
    items.appendChild(newItem);
  });
}

const form = document.getElementById('form');
// 'Type assertion': az inputText elemet HTMLInputElement típussá kényszerítjük.
const inputText: HTMLInputElement = document.getElementById('inputText') as HTMLInputElement;
const formOutput = document.getElementById('formOutput');

if (form === null) {
  alert('Error: form is null!');
} else if (inputText === null) {
  alert('Error: inputText is null!');
} else if (formOutput === null) {
  
} else {
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // A default viselkedés az oldal újratöltése lenne
    if (inputText.value) {
      // Ha van az inputText-ben valami, akkor kiszedjük az értékét
      formOutput.textContent = `The text you've entered: ${inputText.value}`;
      // Hozzáadunk némi stílust:
      formOutput.className = 'text-green-800';
      inputText.value = ''; // Töröljük az input mezőt.
    }
  });
}

// Valamiért a TS/JS-ben nincs beépített randint, ezért definiálunk egy egysorost.
const randInt = (max: number): number => Math.floor(Math.random() * max);

const colors = ['red-600', 'green-600', 'blue-600', 'yellow-600', 'purple-600', 'cyan-300', 'amber-700'];
const colorNum = colors.length;
// A típust HTMLDivElement-be kényszerítjük: 
const keyPressDiv: HTMLDivElement = document.querySelector('#keyPressDiv') as HTMLDivElement;

document.addEventListener('keydown', () => {  // bármelyik gombot megnyomhatjuk
  // véletlenszerű szín kiválasztva és beállítva a keyPressDiv-ben.
  keyPressDiv.className = 'text-' + colors[randInt(colorNum)];
});



