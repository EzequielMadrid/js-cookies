// trivia game 🕹️ Q & A 🕹️
let questions = [
  {
    singleQuestion:
      "Who was the first character to be introduced in the GOT series?\na) Bran Stark\nb) Khaleesi\nc) Tyrion ",
    res: "a",
  },
  {
    singleQuestion:
      "How many dragons did we see on Khaleesi's shoulders?\na) 2\nb) 3\nc) 4",
    res: "b",
  },
  {
    singleQuestion:
      "Who said the famous line: 'When you play the game of thrones, you win or you die?'\na) John Snow\nb) Cersei\nc) Ned Stark",
    res: "b",
  },
];

let score = 0;
let user_response = [];
for (let i = 0; i < questions.length; i++) {
  let input;
  do {
    input = prompt(questions[i].singleQuestion);
    if (input !== "a" && input !== "b" && input !== "c") {
      alert("INVALID KEY 💀");
    }
  } while (input !== "a" && input !== "b" && input !== "c");

  let result;

  if (input === questions[i].res) {
    score++;
    result = "correct";
    alert("YES! 👍");
  } else {
    result = "incorrect";
    alert("WHAT?? 👎 ");
  }

  user_response.push({ response: input, result: result });
  // saving in localStorage 🔥
  localStorage.setItem("userResponses", JSON.stringify(user_response));
}
// final result !
alert("final score: " + score + "|" + questions.length);
/* *************************************************************** */
