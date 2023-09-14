function greetUser(user) {
  console.log(user);
  console.log("Hello", user.firstName); // Hello Ola
}

greetUser({ firstName: "Ola" });
