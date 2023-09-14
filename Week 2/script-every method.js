// Bruk every() method for å finne om alle verdier i en array er lik den du søker etter

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

// const Ola_some = studentNames.some((element, index) => {
//   console.log(index);
//   return element.name === "Petter";
// });

// console.log(Ola_some);

const Ola_every = studentNames.every((element, index) => {
  console.log(index);
  return element.school === "Noroff";
});

console.log(Ola_every);
