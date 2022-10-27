// Iteration 1: Names and Input

const hacker1 = "Harry";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Hermione";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
}

if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
}

if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

let hacker1Uppercase = "";

for (let i = 0; i < hacker1.length; i++) {
  hacker1Uppercase += hacker1[i] + " ";
}

console.log(hacker1Uppercase.toUpperCase());

let hacker2Reversed = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reversed += hacker2[i];
}

console.log(hacker2Reversed);
