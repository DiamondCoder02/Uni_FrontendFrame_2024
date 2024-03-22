/*
*********** Függvények ************
A hagyományos függvények a function kulcsszóval vannak definiálva. Ezek a függvények saját 'this' kontextussal rendelkeznek, amely a függvény hívási kontextusától függ.

Arrow functions (=>) have a shorter syntax compared to traditional functions and lexically bind the this value, meaning their this value is the same as the this of the surrounding context. The 'this' value is the same as the this of the enclosing function i.e. the context of the function's creation.
A nyílfüggvényeknek (=>) rövidebb a szintaxisuk a hagyományos függvényekhez képest, és a this értékük megegyezik a környező kontextus this értékével. A this érték ugyanaz, mint a beágyazó függvény this értéke, azaz a függvény létrehozásának kontextusa.
***********************
*/
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("Ted")); // Outputs: "Hello, Ted!"

const greetArrowLong = (name: string): string => {
  return `Hello, ${name}!`;
};

const greetArrow = (name: string): string => `Hello, ${name}!`;

console.log(greetArrow("Jen")); // Outputs: "Hello, Jen!"

/*
*********** Hoisting ************
A "hoisting" kifejezés arra utal, amikor a JavaScript motor "felhoz" változó deklarációkat vagy függvény deklarációkat a kód elejére. Hagyományos függvények esetében a függvény deklarációkat teljes egészében "felhozzák", így a függvények a deklarációjuk előtt is meghívhatók.

Nyílfüggvények esetében, mivel a függvények változókhoz vannak rendelve, csak a változó deklarációk kerülnek "felhozásra", nem pedig a függvény definíciók. Ez azt jelenti, hogy ha egy nyílfüggvényt a deklarációja előtt próbálunk meghívni, hibát kapunk.
***********************
*/


console.log(greetTraditional("Matt")); // Outputs: "Hello, Matt!"

function greetTraditional(name: string): string {
    return `Hello, ${name}!`;
}

// Arrow function hoisting example
// console.log(greetArrowHoisted("Jane")); // Error: Cannot access 'greetArrowHoisted' before initialization

const greetArrowHoisted = (name: string): string => `Hello, ${name}!`;
console.log(greetArrowHoisted("Zane"));  // Outputs: "Hello, Zane!"

/*
*********** Miért nem ajánlott a 'var' változódeklaráció alkalmazása ************
A var kulcsszóval deklarált változók "felhozásra" kerülnek, de csak a deklarációik, nem az értékadásuk. Ez zavaró lehet, mert a változók értékei a deklarációjuk előtt undefined lesznek. Emellett a var változók globális vagy függvény szintű láthatóságot kapnak, ami könnyen globális változók létrehozásához vezethet, szándékunk ellenére.
A var kulcsszóval deklarált változók nem rendelkeznek blokkszintű láthatósággal, hanem függvény szintű vagy globális láthatóságot kapnak. Ez problémákat okozhat, különösen ciklusokban, ahol a fejlesztők gyakran blokkszintű láthatóságot várnak el.
Az alábbi példában a 'setTimeout' függvény egy másodperces késleltetéssel írja ki az i változó értékét. Mivel a var kulcsszóval deklarált i változó nem rendelkezik blokkszintű láthatósággal, hanem a for cikluson kívül is létezik, minden setTimeout hívás ugyanazt az i változót használja, aminek értéke a ciklus befejezése után 3. Ezért minden setTimeout az utolsó (3) értéket írja ki.
***********************
*/
for (var i = 0; i < 3; i++) {
  setTimeout(function() { console.log(i); }, 500 * i);
}

// Expected output: 0, 1, 2 (with delays)
// Actual output: 3, 3, 3 (with delays)

/*
*********** Loops ************
*/
// Simple for loop:
for (let i = 0; i < 4; i++) {
  console.log(i);
}

// While loop:
let count = 20;
while (count < 24) {
  console.log(count);
  count++;
}

// Do-while loop:
let num = 100;
do {
    console.log(num);
    num++;
} while (num < 105);


/*
*********** Ciklusok és tömbök ************
A  'for...of' ciklus lehetővé teszi egy tömb minden elemén való iterálást. Ez a ciklus típus különösen hasznos, amikor közvetlenül az elemekkel szeretnénk dolgozni, anélkül, hogy szükségünk lenne azok indexére.
*/
const fruits = ["alma", "banán", "cseresznye", "dió"];
for (const fruit of fruits) {
    console.log(fruit);
}

// A 'forEach' metódus egy függvényt hajt végre a tömb minden egyes elemén. Ez a metódus ideális azokban az esetekben, amikor minden elemen valamilyen műveletet szeretnénk végrehajtani.

fruits.forEach(fruit => {
  console.log(`${fruit} ismét`);
});

// A 'map' metódus egy új tömböt hoz létre az eredeti tömb minden elemének megfelelően, miután azokon egy megadott függvényt végrehajtott. Gyakran használják adattranszformációra. A React használata során szinte nélkülözhetetlen.

const upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits);

// A 'filter' metódus egy új tömböt hoz létre azokból az elemekből, amelyek megfelelnek egy megadott feltételnek. Ez a metódus hasznos, amikor szűrni szeretnénk a tömb elemeit.

const longFruits = fruits.filter(fruit => fruit.length > 5);
console.log('longer than 5 letters:', longFruits);

// A reduce metódus egy értéket számol ki az tömb elemein végzett művelet eredményeként, (az alábbi példában összegezés, de lehetne mondjuk szorzás is). Ez a metódus egy akkumulátor értéket használ, amely frissül minden iterációban.

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, current) => acc + current, 0);
console.log('Az összeg:',sum);

/*
*********** Néhány tömb metódus ************
Az 'at()' metódus lehetővé teszi egy tömb adott indexű elemének elérését, pozitív és negatív indexekkel egyaránt. Negatív index esetén a tömb végétől számol.

A 'join()' metódus összekapcsolja egy tömb elemeit egy megadott elválasztó karakterrel, és egy új sztringet hoz létre.

A 'toString()' metódus egy sztringgé alakítja a tömb elemeit, elválasztva őket vesszővel.
***********************
*/

const newnumbers = [10, 20, 30, 40, 50];
// console.log(newnumbers.at(-1)); // Outputs: 50

// vagy az utolsó elem eléréséhez:
console.log(newnumbers[newnumbers.length - 1]); // Outputs: 50

const elements = ["Fire", "Air", "Water"];
console.log(elements.join(", ")); // Outputs: "Fire, Air, Water"

console.log(elements.toString()); // Outputs: "Fire,Air,Water"
console.log(newnumbers.toString());  // Outputs: "10,20,30,40,50"

// A 'flat()'' metódus kisimítja a több szinten átívelő tömböket, egy új tömböt hozva létre. Az argumentumként megadott mélység határozza meg, hogy mennyire mélyre lapítja ki a tömb szerkezetét.

const nestedArray = [1, [2, 3], [4, [5, 6]]];
console.log(nestedArray.flat(2)); // Outputs: [1, 2, 3, 4, 5, 6] -- flattens two levels up
console.log(nestedArray.flat()); // Outputs: [1, 2, 3, 4, [5, 6]] -- flattens one level up  (same as flat(1))


/*
*********** slice(), splice() ************
A 'slice()' metódus egy tömb adott részét veszi ki, létrehozva egy új tömböt, anélkül, hogy megváltoztatná az eredeti tömböt.
A 'splice()' metódus hozzáad vagy eltávolít elemeket egy tömbből, helyben módosítva az eredeti tömböt.
*/

console.log('slice:', newnumbers.slice(1, 3)); // Outputs: [20, 30]

newnumbers.splice(2, 1, 35); // Removes 1 element at index 2 and adds 35
console.log(newnumbers); // Outputs: [10, 20, 35, 40, 50]

/*
*********** Rendezés ************
Sztringek rendezése egy tömbben: A 'sort()' metódus alapértelmezésben a sztringek Unicode karakterkódjai alapján rendezi őket, ami az elvárt alfabetikus sorrendet eredményezi.

Számok rendezése egy tömbben növekvő (vagy csökkenő) sorrendben: A 'sort()' metódus összehasonlító függvényt használ, ami lehetővé teszi a számok helyes rendezését.

A 'sort()' metódus egy helyben végzett rendezést hajt végre, ami azt jelenti, hogy módosítja az eredeti tömböt. A számok esetében egy összehasonlító függvényt kell biztosítani a helyes rendezés érdekében, mivel az alapértelmezett viselkedés sztringként kezelné a számokat. A sztringek rendezésénél ez a probléma nem merül fel, de fontos megjegyezni, hogy a rendezés érzékeny a nagy- és kisbetűk közötti különbségekre.
*/

const numbersToSort = [3, 1, 77, 4, 5, 11, 6, 9];
numbersToSort.sort();
console.log('sorted:', numbersToSort); // Outputs: [  1, 11,  3, 4,  5,  6, 77, 9]
fruits.sort();
console.log('sorted:', fruits); // Outputs: [ 'alma', 'banán', 'cseresznye', 'dió' ]

numbersToSort.sort((a, b) => a - b);
console.log("properly sorted:", numbersToSort); 
// Outputs:  [ 1, 3,  4,  5, 6, 9, 11, 77 ]

numbersToSort.sort((a, b) => b - a);
console.log("reverse sort:", numbersToSort);
// Outputs: [77, 11, 9, 6, 5, 4, 3, 1]

/*
*********** String metódusok ************
A 'charAt()' metódus visszaadja a megadott indexen található karaktert egy sztringből. Ha az index értéke a sztring hosszán kívül esik, üres sztringet ad vissza.

Az 'includes()' metódus megvizsgálja, hogy a sztring tartalmaz-e egy adott alsztringet, és logikai értékkel (boolean) tér vissza.

A 'slice()' metódus kivágja egy sztring egy részét, és visszatér ezzel az új sztringgel. Az első paraméter a kezdőindex, a második paraméter pedig az opcionális végindex.

A 'toUpperCase()' metódus egy sztring összes karakterét nagybetűssé alakítja, míg a 'toLowerCase()' metódus kisbetűssé.

A 'replace()' metódus egy sztringben egy megadott alsztringet vagy reguláris kifejezést helyettesít egy másik sztringgel.
***********************
*/

const greeting = "Hello, World!";
console.log(greeting.charAt(7)); // Outputs: "W"

console.log(greeting.includes("World")); // Outputs: true

console.log(greeting.slice(0, 5)); // Outputs: "Hello"

console.log(greeting.toLowerCase()); // Outputs: "hello, world!"
console.log(greeting.toUpperCase()); // Outputs: "HELLO, WORLD!"

console.log(greeting.replace("World", "TypeScript")); // Outputs: "Hello, TypeScript!"

/*
*********** Set a JS/TS-ben ************
A TypeScriptben a Set egy beépített objektum, amely egyedi értékek gyűjteményét tárolja. A Set használata kiválóan alkalmas arra, hogy biztosítsuk az értékek egyediségét a gyűjteményen belül, mivel egy Set-ben minden érték csak egyszer szerepelhet. A Set különböző típusú értékeket tud tárolni, beleértve az alapértelmezett adattípusokat (mint például számokat és sztringeket) és objektumokat is.
Mikor Használjuk a Set-et?
A Set használata akkor ajánlott, ha biztosítani szeretnénk az elemek egyediségét a gyűjteményben, vagy ha gyakran kell ellenőriznünk, hogy egy adott érték szerepel-e a gyűjteményben. Ideális választás olyan helyzetekben, amikor az elemek sorrendje nem fontos, csak azok egyedisége.
***********************
Példák:
*/
// Új Set létrehozása
const uniqueNumbers: Set<number> = new Set();

// Új értékek hozzáadása a Set-hez:
uniqueNumbers.add(1);
uniqueNumbers.add(2);
uniqueNumbers.add(3);
uniqueNumbers.add(3); // Ez már duplikátum, így nem adódik hozzá

console.log(uniqueNumbers); // Set(3) {1, 2, 3}

// Ellenőrizzük, tartalmazza-e az adott értéket
console.log(uniqueNumbers.has(2)); // true
console.log(uniqueNumbers.has(4)); // false

// Egy elemet eltávolítunk:
uniqueNumbers.delete(2);

// A Set iterálható:
console.log('Iterating over a Set after the removal of a value:');
uniqueNumbers.forEach((value) => {
  console.log(value); // Logs 1 and then 3
});

// A Set mérete:
console.log('Size of the Set:',uniqueNumbers.size); // 2

// A Set kipucolása
uniqueNumbers.clear();
console.log('After clearing:', uniqueNumbers.size); // 0

/********* A 'Map' adattípus **********************
 A Map adattípus a TypeScript-ben egy beépített objektum, amely kulcs-érték párokat tárol, ahol mind a kulcsok, mind az értékek lehetnek bármilyen típusúak. Ez a Map-et rugalmasabbá teszi bizonyos használati esetekben az objektumoknál, mivel a JavaScript objektumok csak sztringeket vagy szimbólumokat használhatnak kulcsként. A Map megőrzi a kulcsok beszúrásának sorrendjét, ami jelentős különbség a sima JavaScript objektumokkal szemben, amelyek nem garantálják a sorrendet.

A Map számos módszert kínál az általa tartott adatok manipulálására, többek között a 'set()', 'get()', 'has()', 'delete()', és 'clear()' metódusokat. Emellett rendelkezik egy 'size' tulajdonsággal is, ami visszaadja a Map-ben lévő kulcs/érték párok számát.

Példa:
**************************************************** */

const map = new Map<number, string>();

// Kulcs-érték párok hozzáadása
map.set(1, "egy");
map.set(2, "kettő");
map.set(3, "három");

// Érték elérése kulcs alapján
console.log(map.get(1)); // "egy"

// Kulcs ellenőrzése
console.log(map.has(2)); // true

// Iterálás a map bejegyzésein
for (let [kulcs, ertek] of map) {
  console.log(`${kulcs} = ${ertek}`);
}

// Kimenet:
// 1 = egy
// 2 = kettő
// 3 = három
