/*
A TypeScript a JavaScript nyelvet egészíti ki. A Microsoft fejlesztette ki és tartja karban. A JavaScript-hez statikus típusokat ad, ami segít a fejlesztőknek megbízhatóbb és olvashatóbb kódot írni. A TypeScript lefordul sima JavaScriptre, így kompatibilis bármely böngészővel, futtató környezettel és operációs rendszerrel.

TypeScript vs. JavaScript:

A JavaScript dinamikus nyelv, ami azt jelenti, hogy a változók bármilyen típusú értéket tartalmazhatnak bármikor. Habár ez rugalmasságot biztosít, nagy alkalmazásokban futásidejű hibákhoz vezethet, amelyek nehézkesen debugolhatók. A TypeScript statikus típusokat vezet be, lehetővé téve a fejlesztők számára, hogy meghatározzák a változók típusait és a hibákat a fordítás során vegyék észre, jóval a kód futtatása előtt.

*/
// Példa:
// JavaScript:
// function addJS(a, b) {
//   return a + b;
// }
// console.log(addJS(5, "10")); // Output: "510"
// console.log(addJS(5, 10));

// TypeScript:
function addTS(a: number, b: number): number {
  return a + b;
}
// console.log(addTS(5, "10")); // Argument of type 'string' is not assignable to parameter of type 'number'
///// így helyes:
// console.log(addTS(5, 10));

// Ha a függvény nem ad vissza értéket:
function writeArgument(s: string): void {
  console.log(s);
}
// megjegyzés: az esetek jelentős részében a 'void' megadása ilyenkor elhagyható
////////////////////////// uncomment the next line:
// writeArgument("mindegy");

/*

A TypeScript előnyei:

Korai hibadetektálás: A fejlesztés során a hibák kiszűrésével a TypeScript csökkenti a hibás kód létrehozásának esélyét.
IDE támogatás: A TypeScriptet a főbb integrált fejlesztői környezetek támogatják, olyan funkciókkal, mint az automatikus kiegészítés és a kód navigáció, amelyek növelik a fejlesztők produktivitását.
Kód olvashatósága: A típusannotációk és interfészek olvashatóbbá és könnyebben érthetővé teszik a kódot.
Ökoszisztéma: A TypeScript jelentős népszerűségre tett szert, így már most létrejött egy komolyabb ökoszisztéma a meglévő JavaScript könyvtárak típusdefinícióihoz.
Alkalmazásai:
Számos nagyméretű alkalmazás alapul TSre és több nagyvállalat fogadta el a TypeScriptet annak robosztussága és skálázhatósága miatt. Példák közé tartozik a Microsoft Office webes alkalmazásai, a Google Angular keretrendszere, és a Slack webes kliense.
*/

/*
A TypeScript installálása:

Globálisan: npm install -g typescript (vagy az oprendszer csomagkezelőjéből)
Lokálisan: npm install typescript --save-dev   (vagy -D)

A TypeScript futtatása:
npx tsc filename.ts
vagg globális install esetében:
tsc filename.ts

Parancssorból el lehet indítani 'figyelő módban' is:
(a példa es2022 kimenetet használ):
tsc -w -t es2022 datatypes.ts

node esetében ez is működik:
(npx) ts-node filename.ts

*/


const greeting: string = "Hello, TypeScript!";
console.log(greeting);
// console.log(addTS(5, 10));

/*
A JavaScript nyelvben a következő egyszerű adattípusok vannak:

string - Szöveg (karakterlánc).
Példa: let greeting = "Hello, World!";
number - Mind egész, mind lebegőpontos számra vontakozhat.
Példa: let age = 25;
boolean - logikai változó, igaz/hamis (true/false).
Example: let isStudent = true;
undefined - Represents a variable that has not been assigned a value.
Example: let result;
null - Represents the intentional absence of any object value.
Example: let user = null;
symbol (introduced in ES6) - Represents a unique identifier.
Example: let id = Symbol("id");
bigint (introduced in ES2020) - Nagyon nagy egész szám, nagyobb mint 2^53 - 1.
Example: let bigNumber = 1234567890123456789012345678901234567890n;

TypeScript egyszerű típusok:

A TypeScript tartalmazza az összes JavaScript típust és kiterjeszti néhány típusellenőrzésre vonatkozóval: 

string, number, boolean, undefined, null, symbol, and bigint - Mint a JavaScriptnél, de a konkrét típus megadásával.
any - Bármit megenged: kikapcsolja a típusellenőrzést.
Example: let anything: any = "Hello"; // Can be assigned to any type
void - Függvényeknél használatos, melyek nem adnak vissza értéket.
Example: function logMessage(): void { console.log('This is a message'); }
never - Olyan változó, ami sose fordul elő. Pl. függvény, mely dob egy hibát és nincs visszatérési értéke.
Example: function error(message: string): never { throw new Error(message); }
unknown - Similar to any, but safer because it requires type checking before performing operations on the value.
Example: let notSure: unknown = 4;


Változó deklarálás: let vs. const
let: mutábilis, const: immutábilis változók.
Megjegyzés: a const tömb értékei még változhatnak a referenciacíme nem.
*/
// let aaaa = 1;
// aaaa = 2  // működik
// const bbbb = 1;
// bbbb = 2  // hiba

//Típusmegadásra példák:

let fullName: string = "John Doe";
let isLoggedIn: boolean = false;
let totalAmount: number = 150.75;
let uniqueId: symbol = Symbol("uniqueId");
let userRole: null = null;

/*
Union types in TypeScript are a powerful feature that allows variables to hold values of more than one type. This capability is particularly useful when a variable can legitimately be more than one type, offering flexibility combined with type safety.

Understanding Union Types
A union type is expressed using the pipe (|) symbol between the types that a variable can accept. It signifies that a variable can contain a value that may be one of several different types.
*/

// Példák egyszerű únió típusokra
let userId: string | number;
userId = "user123"; // szabályos
userId = 101; // szintén szabályos
// userId = true; // Error: Type 'boolean' is not assignable to type 'string | number'.

// A fenti példában a userId változó lehet string és number is, azonban pl. a boolean típusra a TS már fordítási hibával leáll

//Únió típus használata függvényeknél:

function printId(id: string | number) {
  if (typeof id === "string") {
    // A TypeScript tudja, hogy az id string ebben a blokkban
    console.log(`ID: ${id.toUpperCase()}`);
  } else {
    // TypeScript knows id is a number in this block
    console.log(`ID: ${id}`);
  }
}
// This example demonstrates how to use type guards (typeof check) to differentiate between types in a union within a function body, allowing for type-specific methods (toUpperCase for string) to be called safely.

/////////////////// uncomment the followint two lines:
// printId(101); // valid
// printId("202"); // valid

// Union Types in Arrays:
let mixedArray: (number | string)[];
mixedArray = [1, "two", 3, "four"];
// mixedArray = [1, "two", 3, "four", false]; // Error: Type 'boolean' is not assignable to type 'string | number'.

// Here, mixedArray can hold an array of values that are either number or string. Trying to include a value of a different type (like boolean) would result in a compilation error.

/*
Array types and handling in TypeScript provide a powerful way to work with collections of data. TypeScript extends the capabilities of JavaScript arrays by allowing you to specify the type of elements that can be stored in the array. This ensures type safety and can prevent bugs related to incorrect data types.

Array Types in TypeScript
There are two ways to define array types in TypeScript:

Using the type of elements followed by []: This is the most common way to declare an array type. It signifies an array where all elements are of a specific type.
*/
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];

/*
Using the generic array type Array<ElementType>: This uses the array generic type Array<T>, where T is the type of elements in the array. It's equivalent to the first method but can be useful in complex type manipulations.
*/
let numbersGen: Array<number> = [1, 2, 3, 4, 5];
let namesGen: Array<string> = ["Alice", "Bob", "Charlie"];

/*
Array Handling
TypeScript arrays can be manipulated using standard JavaScript methods, with the added benefit of type checking. Here are some common operations:
*/
// Adding elements: Use push to add elements that match the array's element type.
numbers.push(6); // OK
// names.push(7); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

//Accessing elements: Elements can be accessed by their index.
////////////////////////////// uncomment the next line:
// console.log(names[0]); // Outputs: Alice

// Looping over elements: Use forEach, for...of, or other looping mechanisms to iterate over the elements.

///////////////////////////// uncomment the next line:
// numbers.forEach((number) => console.log(number));
for (let name of names) {
  ////// uncomment the next line:
    // console.log(name);
}

// Removing elements: Use pop to remove the last element or shift to remove the first element.
numbers.pop(); // Removes the last element
names.shift(); // Removes the first element

// Determine if an array includes a certain value among its entries.

let pets: string[] = ["dog", "cat", "rabbit", "alpaca"];
let petsInferred = ["dog", "cat"];
// pushing here a number will result in an error:
petsInferred.push("halibut");

// Check if the array includes "cat"
let includesCat: boolean = pets.includes("cat");
////////////////////////////// uncomment the next line:
// console.log(includesCat); // Outputs: true

const ungulates: string[] = ["llama", "buffalo", "camel", "moose"];

// Check if the array includes more than four elements:
const arraySize = 4;
if(ungulates.length > arraySize) {
  // Write the result with template literal (aka template string)
  console.log(`The ungulates array has more than ${arraySize} elements.`);
} else {
  ////////////////////////////// uncomment the next line:
  // console.log(`The ungulates array has not more than ${arraySize} elements.`);
}

// Multiple else statements: if...else if...else:
let shopDiscount: number = 0;
let itemCount = 0;

if (itemCount > 0 && itemCount <= 2) {
  shopDiscount = 5;  // 5% discount
} else if (itemCount > 2 && itemCount <= 5) {
  shopDiscount = 10; // 10% discount 
} else if (itemCount === 0) {
  shopDiscount = 0; // no discount
} else  {
  shopDiscount = 15; // 15%
}
////////////////////////////// uncomment the next line:
console.log(`The discount is ${shopDiscount}%. `)

/*
The union type can also be shortened with a name using the type alias.
The following example shows how to use the switch statement:
*/
type UserRole = 'admin' | 'editor' | 'subscriber' | 'guest';

function getUserRoleMessage(role: UserRole): string {
    let message: string;
    switch (role) {
        case 'admin':
            message = 'Welcome back, admin! You have full access.';
            break;
        case 'editor':
            message = 'Hello, editor! You can edit and publish articles.';
            break;
        case 'subscriber':
            message = 'Hi, subscriber! Thanks for supporting us.';
            break;
        case 'guest':
            message = 'Welcome, guest! Please sign up or log in.';
            break;
        default:
            message = 'Invalid role';
    }
    return message;
}

///////////////////////////////////// Example usage:  (uncomment the next two lines)
// console.log(getUserRoleMessage('admin')); // Outputs: Welcome back, admin! You have full access.
// console.log(getUserRoleMessage('guest')); // Outputs: Welcome, guest! Please sign up or log in.
// console.log(getUserRoleMessage('intruder')); // Will give a compiler error


/*

*/
