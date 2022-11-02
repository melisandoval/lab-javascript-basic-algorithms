// Iteration 1: Names and Input

console.log("Iteration 1:");
const hacker1 = "Harry";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Hermione";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

console.log("Iteration 2:");

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

// 3.1
// Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let hacker1Uppercase = "";

for (let i = 0; i < hacker1.length; i++) {
  hacker1Uppercase += hacker1[i] + " ";
}
console.log(
  "Iteration 3.1. Characters of the driver's name, separated by a space and in capitals:"
);
console.log(hacker1Uppercase.toUpperCase()); // H A R R Y

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ":

let hacker2Reversed = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reversed += hacker2[i];
}

console.log(
  "Iteration 3.2. Characters of the navigator's name, in reverse order:"
);
console.log(hacker2Reversed);

// 3.3 Depending on the lexicographic order... :

console.log("Iteration 3.3 (lexicographic order):");

const driverNameLowercased = hacker1.toLocaleLowerCase();
const navigatorsNameLowercased = hacker2.toLocaleLowerCase();

if (driverNameLowercased.localeCompare(navigatorsNameLowercased) < 0) {
  console.log("The driver's name goes first.");
}

if (driverNameLowercased.localeCompare(navigatorsNameLowercased) > 0) {
  console.log("Yo, the navigator goes first definitely.");
}

if (driverNameLowercased.localeCompare(navigatorsNameLowercased) === 0) {
  console.log("What?! You both have the same name?");
}

// Bonus 1:
// Generate 3 paragraphs. Store the text in a variable type of string:
const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet consequat urna, et interdum tortor tempor ac. Aliquam sodales consectetur est hendrerit efficitur. Suspendisse volutpat luctus scelerisque. Maecenas laoreet cursus enim nec aliquet. Donec placerat rhoncus imperdiet. Mauris purus ex, tincidunt a pharetra nec, mollis eget elit. Morbi sed risus venenatis, interdum ligula id, malesuada ante. Vivamus blandit neque sed pellentesque fermentum. Maecenas at arcu accumsan, sodales massa non, scelerisque dui. Nunc sodales malesuada lobortis. Fusce laoreet feugiat tortor eget congue. Cras consectetur vehicula ligula in volutpat. Aenean at lacus rutrum, lobortis leo eu, fringilla orci. Phasellus convallis consequat augue, eget fringilla lectus. Nunc dui felis, blandit quis lobortis ut, tempus sit amet ipsum. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean accumsan nisi sit amet condimentum varius. Morbi sollicitudin consequat dolor quis feugiat. Sed id faucibus nibh. Aenean sollicitudin erat libero, et rhoncus erat iaculis lobortis. Integer commodo eleifend lacinia. Duis pretium, tortor vitae suscipit mattis, nunc nibh molestie nibh, viverra molestie ante enim ac ex. Sed felis enim, dictum sit amet nisi eget, ornare dignissim quam. Sed scelerisque metus tortor, quis bibendum libero consequat at. In hac habitasse platea dictumst. Aenean lacinia augue eget leo pharetra viverra. Mauris gravida at sapien eget pulvinar. Donec in fermentum nibh, eget vestibulum purus. Sed placerat ac elit a hendrerit. Suspendisse urna ante, finibus a mi id, luctus commodo ligula. Suspendisse lobortis porttitor magna. Sed consectetur enim sit amet neque congue commodo. Quisque molestie tincidunt ante, ac porta turpis vehicula dictum.";
// Make your program count the number of words in the string:
console.log("Bonus 1: number of words in the string:");
console.log(lorem.split(" ").length);

// Make your program count the number of times the Latin word et appears:
const etRegex = / et /g;
console.log(
  "Bonus 1: number of times the Latin word et appears in the string:"
);
console.log(lorem.match(etRegex).length);

// Bonus 2:

const palindromeChecker = (phraseToCheck) => {
  let phraseToCheckRefined = "";

  for (let i = 0; i < phraseToCheck.length; i++) {
    if (
      phraseToCheck[i] === "," ||
      phraseToCheck[i] === " " ||
      phraseToCheck[i] === "!" ||
      phraseToCheck[i] === "?" ||
      phraseToCheck[i] === "'"
    ) {
      continue;
    } else phraseToCheckRefined += phraseToCheck[i].toLocaleLowerCase();
  }

  let phraseReversed = "";

  for (let i = phraseToCheckRefined.length - 1; i >= 0; i--) {
    phraseReversed += phraseToCheckRefined[i].toLowerCase();
  }

  if (phraseToCheckRefined === phraseReversed) {
    console.log("Is a palindrome!");
  } else {
    console.log("Is not a palindrome.");
  }
};

const palindromePhrases = [
  "A man, a plan, a canal, Panama!",
  "Amor, Roma",
  "race car",
  "A man, a plan, a canal, Panama!",
  "stack cats",
  "step on no pets",
  "taco cat",
  "put it up",
  "Was it a car or a cat I saw?",
  "No 'x' in Nixon",
];

const notPalindromePhrases = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "Aliquam laoreet consequat urna",
  "et interdum tortor tempor ac",
  "Aliquam sodales consectetur est hendrerit efficitur",
];

console.log("Bonus 2: palindromeChecker() function calls:");

palindromePhrases.forEach((phrase) => {
  palindromeChecker(phrase);
});

notPalindromePhrases.forEach((phrase) => {
  palindromeChecker(phrase);
});
