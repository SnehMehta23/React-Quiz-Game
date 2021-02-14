console.log("Array demo!!");

const highScores = [2000, 1000, 500];
// console.log(highScores);
// console.log(highScores[0]);
// console.log(highScores[1]);
// console.log(highScores[2]);
// Even though there's nothing in the array at index 3, this won't cause an error.
// We will just get "undefined."
// console.log(highScores[3]);
// console.log(highScores.length);

highScores.forEach((score, index) => {
    console.log(`The score at ${index} is ${score}.`);
});

for (let i = 0; i < highScores.length; i++) {
    console.log(`The score at ${i} is ${highScores[i]}`)
}

for (const score of highScores) {
    console.log(`The score is ${score}.`);
}

const triviaItems = [
    {question: "What is 2 + 2", answer: "4"},
    {question: "What color is the sky", answer: "Blue"},
    {question: "What is the first letter of the alphabet?", answer: "A"},
];
// triviaItems.forEach((triviaItem, index) => {
//     // console.log(triviaItem);
//     // console.log(index);
//     const playerAnswer = prompt(triviaItem.question);
//     if (playerAnswer = triviaItem.question) {
//         alert("Correct!");
//     } else {
//         alert("Wrong!");
//     }
// });

for (let i = 0; i < triviaItems.length; i++) {
    const triviaItem = triviaItems[i];
    const playerAnswer = prompt(triviaItem.question);
    if (playerAnswer === triviaItem.answer) {
        alert("Correct!");
    } else {
        alert("Wrong!");
    }
}