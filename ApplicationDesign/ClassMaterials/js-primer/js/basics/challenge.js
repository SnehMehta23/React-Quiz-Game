// Challenge Part: 1
const userName = "Sneh";
const score = 25;

console.log(`${userName}'s score is: ${score}!`);

// Challenge Part: 2
function multiplyNumbers(num1, num2) {
  const sum = num1 * num2;
  return sum;
}

const sum1 = multiplyNumbers(20, 10);
console.log(sum1);

const sum2 = multiplyNumbers(-1, 3.5);
console.log(sum2);

// Challenge Part: 3
function logMessage(message, userName, dateString) {
  const text = `Message from ${userName} (${dateString}) : ${message}`;
  return text;
}

const date = new Date();
const text1 = logMessage(
  "Stonks only go up!!",
  "Sneh",
  date.toLocaleDateString()
);

console.log(text1);
const text2 = logMessage(
  "Can you fix this please?",
  "Bossman",
  date.toLocaleDateString()
);
console.log(text2);

// Challenge Part: 4
const jsOutputDiv = document.querySelector("#js-output");

const theMessage1 = {
  message: "Hey Everyone!",
  userName: "Sneh",
  dateString: date.toLocaleDateString(),
};
const theMessage2 = {
  message: "Hello everyone!",
  userName: "Bob",
  dateString: date.toLocaleDateString(),
};

function printMessageToPage(message) {
  // console.log(
  //   `Message from ${message.userName} (${message.dateString}) : ${message.message}`
  // );
  jsOutputDiv.insertAdjacentHTML(
    "beforeend",
    `<p>Message from ${message.userName} (${message.dateString}) : ${message.message}</p>`
  );
}

printMessageToPage(theMessage1);
printMessageToPage(theMessage2);
