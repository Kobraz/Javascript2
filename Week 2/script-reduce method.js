// Bruk reduce() method for å ...

// const values = [100, 200, 300, 400, 500];

// const endResult = values.reduce(
//   (previousValue, currentElement, index, array) => {
//     console.log({ previousValue, currentElement });
//     return previousValue + currentElement;
//   }
// );

// values.pop(); // fjerner den bakerste verdien i en array
// values.push(600); // legger til en ny verdi bakerst i en array
// console.log({ values });

// console.log({ endResult });

const studentNames = [
  { id: 1, name: "Abi", school: "Noroff" },
  { id: 1, name: "Ola", school: "Noroff" },
  { id: 1, name: "Roar", school: "Noroff" },
  { id: 1, name: "Anne", school: "Noroff" },
  { id: 1, name: "Pablo", school: "Noroff" },
  { id: 1, name: "Ola", school: "Noroff" },
  { id: 1, name: "Per", school: "Noroff" },
  { id: 1, name: "Petter", school: "Noroff" },
  { id: 1, name: "Eva", school: "Noroff" },
  { id: 1, name: "Annette", school: "Noroff" },
];

const reduceArray = studentNames.reduce((accumulator = [], value) => {
  console.log(accumulator);
  accumulator.push(value);

  return accumulator;
}, []);
