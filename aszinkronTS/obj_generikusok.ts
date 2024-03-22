/*
********** Objects *************
TypeScriptben az objektumok kulcs-érték párokat tartalmaznak, ahol minden kulcs egyedi azonosítóként szolgál az értékekhez. Az objektumok hasznosak adatok csoportosítására és strukturált tárolására.
Az objektumokkal kapcsolatos műveletek közé tartozik a tulajdonságok elérése, módosítása és új tulajdonságok hozzáadása. TypeScriptben az objektumok típusának definiálása segít a típusbiztonságban és az IDE-kben történő kódkiegészítésben.


***********************
*/
// Example:
// Defining an object
const car: { make: string; year: number; hasGPS: boolean } = {
  make: "Toyota",
  year: 2016,
  hasGPS: true,
};

// Accessing object properties
console.log(car.make); // "Toyota"
console.log(car.year); // 2020
console.log(car.hasGPS); // true

// Modifying an object property
car.year = 2022;

// Az objektumoknak lehetnek metódusai is.
const svu: { make: string; year: number; setYear: (newYear: number) => void } = {
// const svu = {     // This would work with type inference as well
  make: "Suzuki",
  year: 2020,
  setYear: function(newYear: number): void {
    this.year = newYear;
  },
}
svu.setYear(2023);
console.log('year of svu', svu.year);
console.log('--------');

// Új tulajdonság (aka mező) hozzáadása (csak ha az objektum nincs konkrétan definálva)
// car.color = "red"; // Property 'color' does not exist on type '{ make: string; year: number; hasGPS: boolean; }'

/*
*********** Classes -- osztályok röviden ************
A konstruktorokat a constructor kulcsszóval defináljuk.
A konstruktorok az osztály speciális metódusai, amelyek akkor hívódnak meg, amikor az osztály új objektumai jönnek létre. Objektumok inicializálására használják.
Nem kötelező: Ha elhagyjuk, akkor a példányt parameter nélkül inicializáljuk.
***********************
*/

class Mammal {
  nev: string;
  suly: number;
  fourLegs: boolean;
  constructor(nev: string, suly: number, fourLegs: boolean) {
    this.nev = nev;
    this.suly = suly;
    this.fourLegs = fourLegs;
  }

}

const kutya = new Mammal("Bodri", 22, true);
console.log(kutya.nev, kutya.suly);

// Inheritance
class Orca extends Mammal {
  color: string;
  constructor(nev: string, suly: number, fourLegs: boolean, color: string) {
    super(nev, suly, fourLegs);
    this.color = color;
  }
}

const kardszarnyu = new Orca("Willy", 4000, false, "feketefeher");
console.log('öröklött emlős',kardszarnyu.nev, kardszarnyu.fourLegs, kardszarnyu.color);

console.log('---------\n');


// A  metódusláncolás, egy olyan technika, ahol minden metódus egy objektumban visszaadja magát az objektumot, lehetővé téve több metódushívás láncolását egyetlen kifejezésben. 

// A láncolható metódusok megvalósításához a TypeScript-ben biztosítani kell, hogy minden osztályban lévő metódus visszaadja az osztály példányát (this).

class Car {
  private uzemanyag: number = 10;  

  tankol(liter: number): this {
      this.uzemanyag += liter;
      return this;
  }

  repairs(): this {
      console.log(this.constructor.name, "class javít");
      return this;
  }

  replaces(): this {
    console.log(this.constructor.name, "class cserél");
    return this;
}

  getTank(): number {
      return this.uzemanyag;
  }

  
}

const auto = new Car();

console.log(auto.repairs().replaces());

console.log('--tankolás után--');
console.log("üzemanyagszint: ", auto.tankol(25).getTank());

/*
*********** Spread Operator ************
A spread operátor (...) lehetővé teszi egy iterálható elem (például tömb) vagy objektum saját tulajdonságainak egy másik tömbbe vagy objektumba való "kiterítését". Ez különösen hasznos adatok másolásakor, tömbök összefésülésekor, objektumok tulajdonságainak összevonásakor, valamint függvényhívások argumentumainak átadásakor.

Tömbök esetében
A spread operátor segítségével könnyedén összefésülhetünk több tömböt vagy hozzáadhatunk új elemeket egy meglévő tömbhöz anélkül, hogy módosítanánk az eredeti tömböket.

Objektumok esetében
Objektumoknál a spread operátor lehetővé teszi az objektum tulajdonságainak más objektumokba való "kiterítését", lehetővé téve az objektumok egyszerű összevonását vagy tulajdonságaik módosítását/másolását.
***********************

Példák:
*/
const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];

// Merging arrays
const mergedArray = [...firstArray, ...secondArray];
console.log(mergedArray); // [1, 2, 3, 4, 5, 6]

// Új elemek hozzáadása
const extendedArray = [...firstArray, 7, 8];
console.log(extendedArray); // [1, 2, 3, 7, 8]

const newperson = { name: 'Kevin', age: 29 };
const address = { city: 'Budapest', country: 'Hungary' };

// Objektumok összekombinálása
const personDetails = { ...newperson, ...address };
console.log(personDetails); // { name: 'Kevin', age: 29, city: 'Budapest', country: 'Hungary' }

// Modifying properties
const updatedPerson = { ...newperson, age: 33 };
console.log(updatedPerson); // { name: 'Kevin', age: 33 }

/*
*********** Object prototípus ************
A JavaScriptben és TypeScriptben egy objektum tulajdonságok gyűjteménye, ahol minden tulajdonság kulcs-érték pároként van definiálva. Az 'Object' prototípus az a gyökér prototípus, amelyből minden JavaScript objektum átveszi a közös tulajdonságokat és metódusokat. Alapvető metódusokat biztosít az objektumok manipulálásához és vizsgálatához.

Az 'Object' Prototípus főbb metódusai
-Object.keys(obj): Ez a metódus egy adott objektum saját felsorolható tulajdonságainak neveit tartalmazó tömböt ad vissza, azonos sorrendben iterálva, mint egy normál ciklus esetén.

- Object.values(obj): Hasonlóan az Object.keys-hez, ez a metódus egy adott objektum saját felsorolható tulajdonságainak értékeit tartalmazó tömböt ad vissza.

- Object.entries(obj): Ez a metódus egy adott objektum saját felsorolható, szöveges kulcsú tulajdonságainak [kulcs, érték] párosait tartalmazó tömböt ad vissza.

- Object.assign(cel, ...forrasok): Ezt a metódust arra használják, hogy egy vagy több forrásobjektum összes felsorolható saját tulajdonságának értékeit egy cél objektumba másolják.
- Object.freeze(obj): Ez a metódus lefagyaszt egy objektumot. Egy lefagyasztott objektumot már nem lehet megváltoztatni; a lefagyasztás megakadályozza új tulajdonságok hozzáadását, meglévő tulajdonságok eltávolítását, és megakadályozza a meglévő tulajdonságok felsorolhatóságának, konfigurálhatóságának vagy írhatóságának megváltoztatását.
***********************
*/
const person = { name: "John", age: 30 };
console.log(Object.keys(person)); // ["name", "age"]
console.log(Object.values(person)); // ["John", 30]
console.log(Object.entries(person)); // [["name", "John"], ["age", 30]] (2D array!)

const details = { job: "Developer" };
const personWithDetails = Object.assign({}, person, details);
console.log(personWithDetails); // { name: "John", age: 30, job: "Developer" }

const frozenPerson = Object.freeze({ name: "Jane" });
// frozenPerson.age = 25; // Így nem működik
console.log(frozenPerson); // { name: "Jane" }

// Tulajdonságok elérése:
// A szögletes zárójelek segítségével az objektum mezőit (más néven tulajdonságait) lehet elérni dinamikusan.
// Hasznos, ha a mező neve dinamikus, vagy a program indításakor még nem ismerjük.

const secondperson = {
  name: "Emma",
  age: 22
};
let propertyName: keyof typeof secondperson = "name"; // 'name' | 'age'
// that generates a union type of all known keys of the object.
// egy unio típus készül a régi kulcsokból
console.log(secondperson[propertyName]); // Emma

let properyAge: keyof typeof secondperson = "age"; 
console.log(secondperson[properyAge]); // 22


/*
*********** Literal típusok ************
A literal típusok TypeScriptben lehetővé teszik, hogy pontos értékeket adjunk meg típusként, így szigorúbban szabályozva az elfogadható értékeket. A literal típusok használata növeli a kód típusbiztonságát és segít a fejlesztőknek szándékaik pontosabb kifejezésében. 
***********************
*/
//Specifikus érték:
let myVar: "fixedString";    // 'let' kell legyen, mert a 'const'-ot inicializálni kell.
// myVar = "newvalue";  //Type '"newvalue"' is not assignable to type '"fixedString"'.
let errorCode: 404;
// errorCode = 403;  // nem műkődik
let isTrue: true;    // csak 'true' lehet.

// Literál Únió típusok:  néhány lehetséges érték
let borderStyle: "dashed" | "solid" | "dotted";

/*
*********** Típusőrök és típusszűkítés************
A TypeScript egyik erős oldala a típusbiztonság biztosítása, amely segít a fejlesztőknek a futásidejű hibák számának csökkentésében. A típusőrök (type guards) és a típusszűkítés (type narrowing) kulcsfontosságú eszközök ebben. Ezek lehetővé teszik a fejlesztők számára, hogy a kód futtatása során dinamikusan ellenőrizzék és szűkítsék a változók típusait.

Típusőrök (Type Guards)
A típusőr egy olyan kifejezés, ami futásidőben ellenőrzi egy változó típusát. Ha a típusőr igaz értéket ad vissza, a TypeScript fordító szűkíti a változó típusát az adott ágban. A típusőrök lehetnek:

Primitív típusok ellenőrzése: Például typeof x === "string" vagy typeof x === "number".
Példány típusának ellenőrzése: A 'instanceof' operátorral, például x instanceof Array.
Egyedi típusőrök: Az 'is' kulcsszóval definiált, saját típusellenőrző függvények.

A típusszűkítés a típusok leszűkítésének folyamatát jelenti, amikor a TypeScript pontosabban tudja, milyen típusú egy adott változó vagy paraméter egy adott kódblokkon belül. Ez lehetővé teszi a fejlesztők számára, hogy biztonságosan hivatkozzanak a szűkített típusra megfelelő tulajdonságokkal és metódusokkal. A típusszűkítés gyakran használ típusőröket, de magában foglalhatja:

Ellenőrzések logikai operátorokkal: Például az &&, || és a ternáris operátorok.
Feltételes blokkok (if/else): Ahol a feltételek alapján történik a típusszűkítés.
Switch/case blokkok: Ezek is használhatók típusszűkítésre, különösen union típusok esetén.

Típusszűkítés:

Az 'as' operátor TypeScriptben típusállításra használatos. A típusállítás egy módja annak, hogy a fejlesztő jelezze a TypeScript fordítónak: a TypeScriptnél jobban tudja, mi az adott entitás típusa. Nem hajt végre semmilyen különleges ellenőrzést vagy adatátalakítást. Egyszerűen csak egy módja annak, hogy a TypeScript tudomására hozzuk, milyen típust várunk. Azonban óvatosan kell használni, mivel helytelen használata problémákhoz vezethet, amelyeket a fordító nem fog elkapni.

Típusszűkítés a 'as' operátorral:
***********************
*/
let someValue: any = "this is a string";

// Without type assertion
let strLength: number = someValue.length; // Működik, de a `someValue` típusa `any`

// With type assertion
let strLengthWithAssertion: number = (someValue as string).length; // A `someValue` változót határozott módon beállítjuk string-re -- csak a biztonság kedvéért.


/*
*********** Conditional checks ************
A ternáris (háromértékű) művelet leegyszerűsít egy if kifejezést. Három része van: a kiértékelendő kifejezés, az érték, ha a feltétel igaz, illetve a másik érték, ha a feltétel hamis.
A && és || operátorokkal, feltételes ellenőrzést lehet végrehajtani if nélkül.
***********************
*/
const age = 19;

const canVote = age >= 18 ? 'Yes, you can vote.' : 'No, you cannot vote.';
console.log(canVote);

let isLoggedIn = true;
isLoggedIn && console.log('User is logged in.'); // Csak akkor írja ki, hogy 'User is logged in.', ha isLoggedIn igaz. 

const dataInArray: number[] = [];
dataInArray.length && (
  dataInArray[0]++,
  console.log('Value of the first element in the array: ', dataInArray[0]),
  console.log('We can render JSX like this.')
);
dataInArray.length === 0 && console.log('The array is empty.');

// A || operator a jobb oldali operandust hajtja végre, ha a bal oldali false.
// Gyakran használják default értékek megadására.

let userName = null;
let displayName = userName || 'Guest';
console.log(displayName); // Outputs "Guest" because userName is falsy.

// A Nullish Coalescing Operátor (??) a JavaScript-ben egy logikai operátor, ami a jobb oldali operandusát adja vissza, ha a bal oldali operandusa null vagy undefined, egyébként pedig a bal oldali operandust adja vissza. Ez különösen hasznos alapértelmezett értékek változóknak való hozzárendeléséhez, amelyek null vagy undefined lehetnek, de nem alkalmazható más falsy értékekre, mint a 0, NaN, vagy '' (üres sztring).

const userAge = null;
const defaultAge = 25;

// Using the nullish coalescing operator to provide a default value 
// A default érték megadásához a Nullish Coalescing Operátort használjuk:
const realAge = userAge ?? defaultAge;
console.log(realAge); // 25

/*
*********** Type és Interface ************
TypeScriptben a 'type' és az 'interface' kulcsszavak hasznos eszközök az adatszerkezetek típusbiztonságának biztosítására, de különböző esetekben és módon használatosak.

type
A type kulcsszó segítségével új típusokat hozhatunk létre, amelyek primitív, összetett vagy unió típusok lehetnek. A type használata ajánlott, amikor egyszerűbb vagy unió típusokat kell definiálni.

Az 'interface' kulcsszóval objektumok szerkezetét írhatjuk le. Az interface használata akkor előnyös, ha objektum orientált programozási paradigma szerint készítünk alkalmazásokat, ahol az öröklődés és a kiterjeszthetőség fontos szempont.
***********************
*/

type Point = {
  x: number;
  y: number;
};

type ID = number | string; // Únió típus
type myCallback = (arg: string) => number; // függvény típus

const exampleFunction: myCallback = (arg) => {
  return arg.length;
};
const makesNoSense = exampleFunction('test');
console.log(makesNoSense);

interface IPoint {
  x: number;
  y: number;
}

interface IPoint3D extends Point {
  z: number;
}

const point3D: IPoint3D = {
  x: 1,
  y: 2,
  z: 3
};


// Mikor melyiket használjuk?
// type használata ajánlott, ha:
// - Primitív, unió, vagy metszet típusokat definiálunk.
// - Típus aliasokat kívánunk létrehozni komplex típusokhoz.
// interface használata ajánlott, ha:
// - Objektumok szerkezetét definiáljuk, különösen ha az öröklődés vagy implementációk szempontjából fontos.
// - A kiterjeszthetőség és az öröklődés fontos szerepet játszik az alkalmazásban.
// Mindkettő használata javítja a kód olvashatóságát és karbantarthatóságát, de az alkalmazás szerkezete és igényei határozzák meg, melyik a megfelelőbb választás egy adott helyzetben.



/*
*********** Generics ************
Generics in TypeScript allow us to write code that can work with any type, increasing code reusability and flexibility while maintaining type safety. They are particularly useful for data structures and functions that can operate with different types.
A generikusok (generics) lehetővé teszik, hogy ugyanazt a kódot több különböző típussal is használhassuk, növelve ezzel a kód újrafelhasználhatóságát és rugalmasságát, miközben megőrizzük a típusbiztonságot. A generikusok használata különösen hasznos olyan adatszerkezetek és függvények esetében, amelyek különböző típusokkal is működhetnek.

Generikusokat akkor érdemes használni, amikor:

- Szeretnénk ugyanazt a kódot több különböző típussal is használni anélkül, hogy elveszítenénk a típusbiztonságot.
- Olyan függvényeket, osztályokat vagy interfészeket írunk, amelyeknek a bemeneti vagy kimeneti típusa változhat.
- Növelni szeretnénk a kód újrafelhasználhatóságát és rugalmasságát.
***********************
*/

// Egy generikus függvény definiálásakor generikus típusparamétereket adunk meg, amelyek lehetővé teszik, hogy a függvény bemeneti és kimeneti típusát a függvény hívása során dinamikusan meg lehessen adni.
// Az alábbi generikus függvény egy dinamikus típust tartalmazó tömböt ad vissza:
function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

let numArray = getArray<number>([1, 2, 3]);
let strArray = getArray<string>(["hello", "world"]);

// Generikus interfészek használatával rugalmasan definiálhatunk különböző típusokat, miközben megőrizzük a típusbiztonságot.
// Pl.:
interface GenericIdentityFn<T> {
  (arg: T): T;
}

function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;

// Osztályoknál is dinamikusan lehet a mezők és metódusok típusait beállítani
// Az alábbi osztály mindenféle mezővel működik:
class GenericNumber<T> {
  zeroValue!: T;
  add!: (x: T, y: T) => T;
}
// Elvileg a mezőket a konstruktorban inicializálni kell. Ennek kikerülésére a '!' utótaggal van lehetőség.

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
console.log(myGenericNumber.zeroValue);
console.log(myGenericNumber.add(3, 5));

// Több generikus paraméter: (általában (de nem kötelező jelleggel)'T' és 'U')
// Az alábbi példában két generikus paraméterünk van (T és U) és egy olyan függvényre adunk típusdefiníciót, mely a T típusú bemenetet U típusú kimenetté alakítja át.
type TransformTU<T, U> = (input: T) => U;

// A használatra példa:
const stringToNumber: TransformTU<string, number> = (input) => parseInt(input, 10);
let stringToNumberInput = "123"
const stringToNumberExample = stringToNumber(stringToNumberInput);
console.log('strinToNumber példa: ', stringToNumberExample, typeof stringToNumberExample); // Output: 123


/* 
*********** Map adattípus generikusokkal ************
*/
const map = new Map<number, string>();

// Kulcs-érték párok definiálása
map.set(1, "one");
map.set(2, "two");
map.set(3, "three");

// Értékek elérése a kulcs segítségével
console.log(map.get(1)); // "one"

// Ellenőrizzük, hogy létezik-e az adott kulcs:
console.log(map.has(2)); // true

// A map tartalmát végigiteráljuk
for (let [key, value] of map) {
  console.log(`${key} = ${value}`);
}
// Output:
// 1 = one
// 2 = two
// 3 = three



// Opcionális mezők (más néven tulajdonságok):
// Az opcionális tulajdonságok a TypeScript-ben lehetővé teszik, hogy egy interfészben vagy típusban olyan tulajdonságokat definiáljunk, amelyek lehet, hogy benne vannak az objektumban, de lehet, hogy nem. Ez a funkció rugalmasságot biztosít olyan objektumoknál, amelyeknek változatos alakjuk lehet, különösen, amikor külső adatforrásokkal való kommunikáció során bizonyos mezők hiányozhatnak. Az opcionális tulajdonságokat úgy jelöljük, hogy a tulajdonságnév után '?' kerül.

interface UserProfile {
  id: number;
  name: string;
  age?: number; // Optional property
  email?: string; // Optional property
}

const user1: UserProfile = {
  id: 1,
  name: "John Doe",
  age: 30
};

const user2: UserProfile = {
  id: 2,
  name: "Jane Doe"
  // `age` és `email` opcionális és itt nincs megadva
};

// A függvényeknek is lehetnek opcionális tulajdonságaik. Ez különösen akkor hasznos, amikor objektumokat szeretnénk átadni egy függvénynek, ahol bizonyos tulajdonságok esetleg nem szükségesek. Az opcionális tulajdonságok lehetővé teszik, hogy rugalmasabb interfészeket definiáljunk a függvény argumentumai számára, így a függvényeink alkalmazkodóbbak lesznek különböző esetekhez. Az opcionális tulajdonságok definíciójához a függvény paramétereiben ugyanazt a szintaxist használjuk, mint az interfészek vagy típusok opcionális tulajdonságainál: a tulajdonságnév után egy '?' jel kerül.

// Példa:

// A createGreeting függvény argumentuma egy objektum, opcionális tulajdonságokkal:
function createGreeting({ name, age }: { name: string; age?: number }): string {
  let greeting = `Hello, my name is ${name}.`;
  if (age !== undefined) {
    greeting += ` I am ${age} years old.`;
  }
  return greeting;
}

console.log(createGreeting({ name: "Alice" })); // "Hello, my name is Alice."
console.log(createGreeting({ name: "Bob", age: 35 })); // "Hello, my name is Bob. I am 35 years old."

