// console.log("hi");
// Get your shorts on - this is an array workout!
// ## Array Cardio

// Some initial data we can work with:
// Take some time to analyze the data structure
// Do each objects have the exact same data?
const inventors = [
  {
    first: "Albert",
    last: "Einstein",
    year: 1879,
    passed: 1955,
    categories: ["man", "physicist"],
  },

  {
    first: "Isaac",
    last: "Newton",
    year: 1643,
    passed: 1727,
    categories: ["man", "mathematician"],
  },
  {
    first: "Galileo",
    last: "Galilei",
    year: 1564,
    passed: 1642,
  },
  {
    first: "Marie",
    last: "Curie",
    year: 1867,
    passed: 1934,
    categories: ["woman", "physicist"],
  },
  {
    first: "Johannes",
    last: "Kepler",
    year: 1571,
    passed: 1630,
  },
  {
    first: "Nicolaus",
    last: "Copernicus",
    year: 1473,
    passed: 1543,
  },
  {
    first: "Max",
    last: "Planck",
    year: 1858,
    passed: 1947,
  },
  {
    first: "Katherine",
    last: "Blodgett",
    year: 1898,
    passed: 1979,
    categories: ["woman", "physicist"],
  },
  {
    first: "Ada",
    last: "Lovelace",
    year: 1815,
    passed: 1852,
  },
  {
    first: "Sarah E.",
    last: "Goode",
    year: 1855,
    passed: 1905,
  },
  {
    first: "Lise",
    last: "Meitner",
    year: 1878,
    passed: 1968,
    categories: ["woman", "physicist"],
  },
  {
    first: "Hanna",
    last: "Hammarström",
    year: 1829,
    passed: 1909,
    categories: ["woman", "inventor"],
  },
];

// Array.prototype.filter()
// 1. Filter the list of inventors to retrieve only those born between 1500 and 1600
// Expected output: an array containing two inventors: Galileo Galilei and Johannes Kepler
console.log("*** 1 exercise ***");

const bornBetween1500and1600 = inventors.filter(
  (inventor) => inventor.year > 1500 && inventor.year < 1600
);
console.log("bornBetween1500and1600: ", bornBetween1500and1600);

console.log(
  "bornBetween1500and1600: " +
    bornBetween1500and1600[0].first +
    " " +
    bornBetween1500and1600[0].last
);

console.log(
  "bornBetween1500and1600: " +
    bornBetween1500and1600[1].first +
    " " +
    bornBetween1500and1600[1].last
);

// console.log(
//   "bornBetween1500and1600: " +
//     bornBetween1500and1600[2].first +
//     " " +
//     bornBetween1500and1600[2].last
// );   Uncaught TypeError: Cannot read properties of undefined

console.log("*** end of 1 exercise ***");
console.log("**************************");

// Array.prototype.filter()
// 2. Filter the list of inventors to retrieve only the ones that have the "mathematician" category
// Expected output: an array containing only one inventor: Isaac Newton
// (function ) == "mathematician"

console.log("*** 2 exercise ***");
//using optional chaining: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
const mathematicians = inventors.filter((inventor) =>
  inventor.categories?.includes("mathematician")
);

console.log("mathematicians: ", mathematicians);

//using logical &&
const mathematicians2 = inventors.filter(
  (inventor) =>
    inventor.categories && inventor.categories.includes("mathematician")
);

console.log("mathematicians2: ", mathematicians2);

console.log("*** end of 2 exercise ***");
console.log("**************************");
// Array.prototype.filter()
// 3. Filter the list of inventors to retrieve only the ones with the category === 'physicist' AND 'man'
// Expected output: an array containing only one inventor: Albert Einstein
console.log("*** 3 exercise ***");

//linking logical &&
const malePhysicists = inventors.filter(
  (inv) =>
    inv.categories &&
    inv.categories.includes("physicist") &&
    inv.categories.includes("man")
);

console.log("malePhysicists: ", malePhysicists);

//using optional chaining
const malePhysicists2 = inventors.filter(
  (inv) =>
    inv.categories?.includes("physicist") && inv.categories?.includes("man")
);

console.log("malePhysicists2: ", malePhysicists2);

console.log("*** end of 3 exercise ***");
console.log("**************************");

// Array.prototype.map()
// 4. Give us an array filled with the inventors first and last names
// Expected output:
// ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Marie Curie", "Johannes Kepler", "Nicolaus Copernicus", "Max Planck", "Katherine Blodgett", "Ada Lovelace", "Sarah E. Goode", …]

console.log("*** 4 exercise ***");
//concatenation - using single or double quotes '' or ""
const inventorsFirstLastNames = inventors.map(
  (inv) => inv.first + " " + inv.last
);

console.log("inventorsFirstLastNames :", inventorsFirstLastNames);
//template literal - using backticks ``
const inventorsFirstLastNames2 = inventors.map((inventor) => {
  return `${inventor.first} ${inventor.last} `;
});

console.log("inventorsFirstLastNames2 :" + inventorsFirstLastNames2);

console.log("*** end of 4 exercise ***");
console.log("**************************");
// Array.prototype.map()
// 5. Give us an array filled only with the inventors emails
// the emails should be lowercase firstName + date of birth @ inventor.com
// Expected output:
// eg: ["albert1879@inventor.com", "isaac1643@inventor.com", "galileo1564@inventor.com", "marie1867@inventor.com", "johannes1571@inventor.com", "nicolaus1473@inventor.com", "max1858@inventor.com", "katherine1898@inventor.com", "ada1815@inventor.com", "sarah e.1855@inventor.com", …]

console.log("*** 5 exercise ***");
//template literal
const inventorEmails = inventors.map(
  (inv) => `${inv.first.toLowerCase()}${inv.year}@inventor.com`
);

console.log("inventorEmails: ", inventorEmails);

//concatenation
const inventorEmails2 = inventors.map(
  (inv) => inv.first.toLowerCase() + inv.year + "@inventor.com"
);
console.log("inventorEmails2: ", inventorEmails2);

console.log("*** end of 5 exercise ***");
console.log("**************************");
// Array.prototype.toSorted()
// 6. Sort the inventors by birthdate, youngest to oldest (eg: the one whose birth year is closer to us on top)
// Expected output: an array of inventors going from "Katherine Blodgett" -> to "Nicolaus Copernicus"
console.log("*** 6 exercise ***");
const youngToOld = inventors.toSorted((inv1, inv2) => inv2.year - inv1.year);

console.log("youngToOld: ", youngToOld);
console.log("*** end of 6 exercise ***");
console.log("**************************");

// Array.prototype.reduce()
// 7. How many years did all the inventors live all together?
//Expected output: 861

//just the solution
console.log("*** 7 exercise ***");
const totalYearsLived = inventors.reduce(
  (accumulator, currentInventor) =>
    accumulator + (currentInventor.passed - currentInventor.year),
  0
);

console.log("totalYearsLived: ", totalYearsLived);
//some extra console logs to clarify what's going on
const totalYearsLived2 = inventors.reduce((accumulator, currentInventor) => {
  console.log("accumulator: ", accumulator);
  console.log(
    `years lived of ${currentInventor.first}: `,
    currentInventor.passed - currentInventor.year
  );

  return accumulator + (currentInventor.passed - currentInventor.year);
}, 0);

console.log("totalYearsLived2: ", totalYearsLived2);

console.log("*** end of 7 exercise ***");
console.log("**************************");
// ~~~~~~~~~~~~~~~~~~

// Array.prototype.toSorted()
// 8. Sort the inventors by years lived (both ascending and descending)
console.log("*** 8 exercise ***");
const shortestLifeToLongest = inventors.toSorted((inv1, inv2) => {
  const inv1Years = inv1.passed - inv1.year;
  const inv2Years = inv2.passed - inv2.year;
  return inv1Years - inv2Years;
});
console.log("shortestLifeToLongest: ", shortestLifeToLongest);

const longestLifeToShortest = inventors.toSorted((inv1, inv2) => {
  const inv1Years = inv1.passed - inv1.year;
  const inv2Years = inv2.passed - inv2.year;
  return inv2Years - inv1Years;
});
console.log("longestLifeToShortest: ", longestLifeToShortest);

console.log("*** end of 8 exercise ***");
console.log("**************************");

// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const boulevardsInParis = [
  "Boulevard Auguste-Blanqui",
  "Boulevard Barbès",
  "Boulevard Beaumarchais",
  "Boulevard de l'Amiral-Bruix",
  "Boulevard Mortier",
  "Boulevard Poniatowski",
  "Boulevard Soult",
  "Boulevard des Capucines",
  "Boulevard de la Chapelle",
  "Boulevard de Clichy",
  "Boulevard du Crime",
  "Boulevard du Général-d'Armée-Jean-Simon",
  "Boulevard Haussmann",
  "Boulevard de l'Hôpital",
  "Boulevard des Italiens",
  "Boulevard Lefebvre",
  "Boulevard de la Madeleine",
  "Boulevard de Magenta",
  "Boulevard Malesherbes",
  "Boulevard Marguerite-de-Rochechouart",
  "Boulevard Montmartre",
  "Boulevard du Montparnasse",
  "Boulevard Raspail",
  "Boulevard Richard-Lenoir",
  "Boulevard Saint-Germain",
  "Boulevard Saint-Michel",
  "Boulevard de Sébastopol",
  "Boulevard de Strasbourg",
  "Boulevard du Temple",
  "Boulevard Voltaire",
  "Boulevard de la Zone",
];

// Array.prototype.filter()
// 9. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
console.log("*** 9 exercise ***");
const boulevardsWithDe = boulevardsInParis.filter((boul) =>
  boul.includes("de")
);
console.log("boulevardsWithDe: ", boulevardsWithDe);

const boulevardsWithDeStrict = boulevardsInParis.filter((boul) =>
  boul.includes(" de ")
);
console.log("boulevardsWithDeStrict: ", boulevardsWithDeStrict);

console.log("*** end of 9 exercise ***");
console.log("**************************");

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.sort()
// 10. Sort the people alphabetically by last name

const family = [
  { name: "Lily", year: 2009 },
  { name: "Leah", year: 2011 },
  { name: "Liv", year: 2020 },
  { name: "Lydia", year: 2015 },
];
console.log("*** 10 exercise ***");
//chaining ternary operator
people.sort((personA, personB) =>
  personA < personB ? -1 : personB > personA ? 1 : 0
);

console.log("sorted people: ", people);

//using if statements
people.sort((personA, personB) => {
  if (personA < personB) {
    return -1;
  }
  if (personB > personA) {
    return 1;
  }
  return 0;
});
console.log("sorted people: ", people);

console.log("*** end of 10 exercise ***");
console.log("**************************");

// Array.prototype.some()
// 11. Is at least one person 18 years old?

console.log("*** end of 11 exercise ***");

const oneOrMoreIs18 = family.some((member) => 2025 - member.year === 18);
console.log("oneOrMoreIs18: ", oneOrMoreIs18);

console.log("*** end of 11 exercise ***");
console.log("**************************");

// Array.prototype.every
// 12. Do all names of the family members start with the letter L?

console.log("*** 12 exercise ***");

//accessing first letter with bracket notation
const allStartWithL = family.every((member) => member.name[0] === "L");
console.log("allStartWithL: ", allStartWithL);

//using startsWith string method
const allStartWithL2 = family.every((member) => member.name.startsWith("L"));

console.log("allStartWithL2: ", allStartWithL2);

console.log("*** end of 12 exercise ***");
console.log("**************************");
