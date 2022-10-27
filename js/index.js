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

if (hacker1Uppercase > hacker2Reversed) {
  console.log("The driver's name goes first.");
}

if (hacker2Reversed > hacker1Uppercase) {
  console.log("Yo, the navigator goes first definitely.");
}

if (hacker2Reversed == hacker1Uppercase) {
  console.log("What?! You both have the same name?");
}

// Bonus 1:

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet consequat urna, et interdum tortor tempor ac. Aliquam sodales consectetur est hendrerit efficitur. Suspendisse volutpat luctus scelerisque. Maecenas laoreet cursus enim nec aliquet. Donec placerat rhoncus imperdiet. Mauris purus ex, tincidunt a pharetra nec, mollis eget elit. Morbi sed risus venenatis, interdum ligula id, malesuada ante. Vivamus blandit neque sed pellentesque fermentum. Maecenas at arcu accumsan, sodales massa non, scelerisque dui. Nunc sodales malesuada lobortis. Fusce laoreet feugiat tortor eget congue. Cras consectetur vehicula ligula in volutpat. Aenean at lacus rutrum, lobortis leo eu, fringilla orci. Phasellus convallis consequat augue, eget fringilla lectus. Nunc dui felis, blandit quis lobortis ut, tempus sit amet ipsum. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean accumsan nisi sit amet condimentum varius. Morbi sollicitudin consequat dolor quis feugiat. Sed id faucibus nibh. Aenean sollicitudin erat libero, et rhoncus erat iaculis lobortis. Integer commodo eleifend lacinia. Duis pretium, tortor vitae suscipit mattis, nunc nibh molestie nibh, viverra molestie ante enim ac ex. Sed felis enim, dictum sit amet nisi eget, ornare dignissim quam. Sed scelerisque metus tortor, quis bibendum libero consequat at. In hac habitasse platea dictumst. Aenean lacinia augue eget leo pharetra viverra. Mauris gravida at sapien eget pulvinar. Donec in fermentum nibh, eget vestibulum purus. Sed placerat ac elit a hendrerit. Suspendisse urna ante, finibus a mi id, luctus commodo ligula. Suspendisse lobortis porttitor magna. Sed consectetur enim sit amet neque congue commodo. Quisque molestie tincidunt ante, ac porta turpis vehicula dictum.";

console.log(lorem.split(" ").length);

const etRegex = / et /g;

console.log(lorem.match(etRegex).length);

// Bonus 2:
