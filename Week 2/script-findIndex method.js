// Bruk findIndex method for å finne en verdi i en array

const studentNames = [
  { id: 1, name: "Abi" },
  { id: 1, name: "Ola" },
  { id: 1, name: "Roar" },
  { id: 1, name: "Anne" },
  { id: 1, name: "Pablo" },
  { id: 1, name: "Ola" },
  { id: 1, name: "Per" },
  { id: 1, name: "Petter" },
  { id: 1, name: "Eva" },
  { id: 1, name: "Annette" },
];

const mapArray = studentNames.map((element, index, arr) => {
  return [element, index];
});

console.log(mapArray);

const Ola_findIndex = studentNames.findIndex((element, index) => {
  return element.name === "Roar";
});

console.log(Ola_findIndex);
