
/*
*********** Aszinkron JS/TS ************
*************  Promises ******************
A Promise-ok a TypeScript-ben, csakúgy mint a JavaScript-ben, alapvető típusok az aszinkron műveletek kezelésére. Olyan értékeket írnak le, amelyek most, a jövőben, vagy soha nem állnak rendelkezésre. Ez különösen hasznos olyan műveletekhez, amelyek időbe telnek, mint például adatok lekérése egy hálózatból vagy fájlok olvasása.

Alapvető szerkezet
Egy Promise a TypeScript-ben egy objektum, amelynek három állapota lehet:
1. Függőben lévő (Pending): A Promise kezdeti állapota. A művelet még nem fejeződött be.
2. Teljesült (Fulfilled): A művelet sikeresen befejeződött, és a Promise rendelkezik egy értékkel.
3. Elutasított (Rejected): A művelet sikertelen volt, és a Promise rendelkezik az elutasítás okával.

Promise Létrehozása
Egy Promise-t a Promise konstruktorral hozunk létre, ami egy végrehajtó függvényt vesz át. Ez a végrehajtó függvény azonnal meghívásra kerül a Promise implementáció által, átadva két callback függvényt: resolve és reject. A végrehajtó függvény sikeres befejezéskor hívja meg a promise-t a resolve(value)-vel, vagy elutasítja a reject(reason)-nel, ha hiba történik.


let promise = new Promise((resolve, reject) => {
  // Asynchronous operation here
  if ( operation successful ) {
    resolve(value);
  } else {
    reject(error);
  }
});

Promise Felhasználása:
Egy Promise használatához callback függvényeket csatolunk a .then(), .catch(), és .finally() metódusok segítségével. A .then() két argumentumot vesz be: egy callback-et a siker esetére, és egy opcionális callback-et a hiba esetére. A .catch()-et az elutasított esetek kezelésére használjuk. A .finally() lehetővé teszi, hogy valamit lefuttassunk függetlenül a promise eredményétől.

promise.then(
  value => {  handle a successful outcome  },
  error => {  handle an error  }
);

promise.catch(
  error => {  handle the error  }
);

promise.finally(() => {
  // Executes regardless of the promise outcome
});


Példa: adat betöltése egy API-ról, a fetch API segítségével:
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('There was an error!', error));
*/

/* 
A TypeScript támogatja az async/await szintaxist is, amely lehetővé teszi, hogy szinkronnak tűnő módon dolgozzunk a Promise-okkal. Ez megkönnyítheti az aszinkron kód olvasását és írását.

async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');  // kb. mint egy .then
    const data = await response.json();   // még egy .then
    console.log(data);
  } catch (error) {
    console.error('There was an error!', error);
  }
}

*/

// Példák:
// Késleltetett műveletek szimulálása:
// Ez a setTimeout segítségével történik, egy Promise-on belül. Gyakran alkalmazunk ilyesmit, ha késleltetni akarunk valamit.
function delay(milliseconds: number): Promise<void> {
  return new Promise<void>((resolve) => {
      setTimeout(resolve, milliseconds);
  });
}

delay(1000).then(() => console.log("Executed after 1 second"));

// Aszinkron ciklusok
// Az iteráció során minden lépés tartalmazhat aszinkron műveleteket.
async function asyncLoop(iterations: number): Promise<void> {
  for (let i = 0; i < iterations; i++) {
      await new Promise<void>(resolve => {
          setTimeout(() => {
              console.log(`Iteration ${i + 1}`);
              resolve();
          }, 500);
      });
  }
}

asyncLoop(8);


/**************** Async/await ****************
 * 
 Az async/await szintaxis a TypeScriptben, (vagy JavaScriptben) jelentősen egyszerűsíti a Promise-okkal való munkát, lehetővé téve az aszinkron kód írását a szinkron kód irásához hasonló(bb)am. Ez a Promise-okra épített "szintaktikai cukorka" megkönnyíti az aszinkron kód olvasását és írását, csökkentve a bonyolultságot, amely az aszinkron műveletek kezelésével jár, különösen sorozatos aszinkron feladatok vagy hibakezelés esetén. (Ld. még: 'callback hell')

async függvény:
Egy async függvény egy olyan függvény, amelyet az async kulcsszóval deklarálnak. Mindig egy Promise-szal tér vissza. Ha a függvény egy értéket ad vissza, a Promise az adott értékkel lesz teljesítve. Ha a függvény hibát dob, a Promise ezzel a hibával lesz elutasítva.

 Pl: a fetchData() hívása egy olyan Promise-t dob vissza, mely a "data" string-et oldja fel.
*/

async function fetchData(): Promise<string> {
  return "data";
}

// The 'await' operator is used within an 'async' function to wait for a promise to settle (either resolved or rejected). The execution of the 'async' function is paused until the promise settles, and then resumes with the promise's result. This makes the asynchronous code look and behave a bit more like synchronous code.

async function displayData() {
  const data = await fetchData();
  console.log('Data:', data); // "data"
}

displayData();

// A példában displayData a fetchData függvényt hívja meg, és vár, hogy a  Promise jó hírrel térjen vissza, és adatokkal. Csak ezután írja ki az adatokat a konzolra.

// Error Handling
// async/await makes error handling straightforward with the use traditional try/catch blocks.

async function getDataWithErrorHandling() {
  try {
      const data = await fetchData();
      console.log(data);
  } catch (error) {
      console.error('An error occurred:', error);
  }
}

// Chaining Asynchronous Operations Aszinkron műveletek összefűzése:
// Ilyenkor minden részműveletnek aszinkronnak kell lennie.

async function fetchAndProcessData() {
  const data = await fetchData();
  const processedData = await processData(data);
  console.log(processedData);
  return processedData;
}

async function processData(data: string) {
  const upperdata = await data.toUpperCase();
  return upperdata;
} // processData

fetchAndProcessData();