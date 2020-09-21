import { choice, remove } from "./helpers";

import fruits from "./food";

const chosenFruit = choice(fruits);

console.log(`I'd like one ${chosenFruit}, please`);
console.log(`Here you go: ${chosenFruit}`);
remove(fruits, chosenFruit);
console.log(`Delicious! May I have another?`);
console.log(
  `I'm sorry, we're all out of those. We have ${fruits.length} other fruits left though`
);
