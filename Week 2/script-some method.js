// Bruk some() method for å finne en verdi i en array

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

const Ola_some = studentNames.some((element, index) => {
  console.log(index);
  return element.name === "Petter";
});

console.log(Ola_some);
