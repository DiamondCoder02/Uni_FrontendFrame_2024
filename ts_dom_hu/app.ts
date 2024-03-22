// Egy html elemet hoz létr TailwindCSS osztállyal
// A függvénynek a következő paraméterei vannak:
// 1. A HTML elem stílusa
// 2. A stíluselemek amit az elemre alkalmazunk 
// 3. Az elem szöveg tartalma, ha van. Az alapértelmezett egy üres szöveg. 
function createElementWithClasses(type: string, classes: string, textContent: string = ''): HTMLElement {
  const element = document.createElement(type);
  element.className = classes;
  // Ellenőrizzük az elemet, hogy van-e benne szöveg. Ha van, akkor hozzáadjuk a szöveget.
  if (textContent) element.textContent = textContent;
  return element;
}

// Append children (in an array) to a parent element
function appendChildren(parent: HTMLElement, children: HTMLElement[]) {
  children.forEach(child => {
      parent.appendChild(child);
  });
}

// The 'DOMContentLoaded' event fires when the HTML document has been completely parsed, 
// and all deferred scripts have downloaded and executed. It doesn't wait for other things 
//like images, subframes, and async scripts to finish loading.
document.addEventListener('DOMContentLoaded', () => {
  const appDiv = document.getElementById('app');

  //  Létrehoz egy elemet
  const heading = createElementWithClasses('h1', 'text-3xl font-bold underline text-center mb-8', 'TypeScript által generálva');
  const paragraph = createElementWithClasses('p', 'text-lg text-gray-700 mb-4', 'This webpage is created entirely from TypeScript function calls.');
  const button = createElementWithClasses('button', 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded', 'Click Me');
  const flexContainer = createElementWithClasses('div', 'flex flex-wrap justify-center items-center mt-4');

  button.addEventListener('click', () => {
    const colorInfo = randomColor();
    const newDiv = createElementWithClasses('div', `${colorInfo.class} w-20 h-20 m-2 flex justify-center items-center text-white font-bold text-sm`, colorInfo.name.toUpperCase());
    flexContainer.appendChild(newDiv);
  });

  // A létrehozott elemet az appDiv-hez adja hozzá
  if (appDiv) {
      appendChildren(appDiv, [heading, paragraph, button, flexContainer]);
  }
});

// Random színt (osztályt) és a nevét adja vissza
function randomColor(): { class: string; name: string } {
  const colors = [
    'red', 'green', 'blue', 'yellow', 'purple', 'pink', 'violet', 'sky', 'emerald',
    'cyan', 'amber', 'indigo', 'fuchsia', 'lime', 'orange', 'rose', 'teal', 'lime',
    'slate', 'zinc', 'stone', 'gray'
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  const color = colors[randomIndex];
  return { class: `bg-${color}-600`, name: color };
}
