// QUESTION CHANGING

const data = [
  {
    question:
      "What is a statement or proposition that seems self-contradictory or absurd but may nonetheless be true?",
    answer: "paradox",
  },
  {
    question:
      "What is a place where people can borrow books and other materials to read?",
    answer: "library",
  },
  {
    question: "What is a word that expresses an action, state, or occurrence?",
    answer: "verb",
  },
  {
    question:
      "What is something that is strange or mysterious and has an atmosphere of fear or unease?",
    answer: "eerie",
  },
  {
    question: "What is a state of perfect happiness or great joy?",
    answer: "bliss",
  },
  {
    question: "What is a person or thing that is mysterious or puzzling?",
    answer: "enigma",
  },
  {
    question:
      "What is a representation of an area of land, especially one showing its features and boundaries?",
    answer: "map",
  },
  {
    question:
      "What is a navigational tool that uses a magnetized needle to point north?",
    answer: "compass",
  },
  {
    question:
      "What is having or emitting a sharply strong and unpleasant smell?",
    answer: "pungent",
  },
  {
    question:
      "What is something that is obviously senseless or illogical, especially because it involves contradiction or self-contradiction?",
    answer: "absurd",
  },
];

let answerChars = [];
let secretWordSpans = [];
let prevIndex;
let secretWord;

function randomQusetions() {
  let index = Math.floor(Math.random() * data.length);

  while (index === prevIndex) {
    index = Math.floor(Math.random() * data.length);
  }
  
  prevIndex = index;

  let question = data[index].question;
  infoTextQusetion.textContent = question;
  let answer = data[index].answer.split("");
  secretWord = answer;
  popupTextAnswer.textContent = secretWord.join("");

  secretWord.forEach((item) => {
    let li = document.createElement("li");
    li.className = "answer__item";

    let char = document.createElement("input");
    char.className = "answer__char";
    char.type = "text";
    char.maxLength = "1";
    li.append(char);

    let span = document.createElement("span");
    span.className = "answer__span";
    li.append(span);

    answerChars.push(char);
    secretWordSpans.push(span);

    answerList.append(li);
  });
}

window.addEventListener("load", randomQusetions);

// GAME FUNCTIONALITY

let pressedKeys = [];
let incorrectScore = 0;

infoSpan.textContent = `${incorrectScore}/6`;

function initGame(val) {
  let char = val;

  if (secretWord.includes(char)) {
    secretWord.forEach((item, index) => {
      if (char === item) {
        answerChars[index].value = char;
        secretWordSpans[index].style.opacity = '0';
      }
    });

    if ([...answerChars].every((item) => item.value)) {
      gameEnd("You won");
    }
  } else {
    incorrectScore += 1;
    infoSpan.textContent = `${incorrectScore}/6`;
    bodyParts[incorrectScore].style.opacity = "1";

    if (incorrectScore === 6) {
      gameEnd("You lose");
    }
  }

  keyboardItems.forEach((keyboardItem) => {
    if (keyboardItem.textContent === char) {
      keyboardItem.className += " keyboard__item_disabled";
    }
  });
}

keyboardItems.forEach((keyboardItem) => {
  keyboardItem.addEventListener("click", () => {
    initGame(keyboardItem.textContent);
  });
});

window.addEventListener("keydown", (e) => {
  let key = e.key;

  if (keyboardAlphabet.includes(key) && !pressedKeys.includes(key) && key !== 'Tab') {
    initGame(key);
    pressedKeys.push(key);
  }
});

// GAME END

function gameEnd(status) {
  popup.style.display = "flex";
  popupTitle.textContent = status;
  answerChars = [];
  secretWordSpans = [];
}

// NEXT GAME

popupButton.addEventListener("click", () => {
  bodyParts.forEach((bodyPart, index) =>
    index === 0
      ? (bodyPart.style.opacity = "1")
      : (bodyPart.style.opacity = "0")
  );
  incorrectScore = 0;
  pressedKeys = [];
  answerList.innerHTML = "";
  infoSpan.textContent = `${incorrectScore}/6`;
  keyboardItems.forEach((keyboardItem) =>
    keyboardItem.classList.remove("keyboard__item_disabled")
  );
  closePopup();
  randomQusetions();
});

// CLOSE POPUP

function closePopup() {
  popup.style.display = "none";
}

document.addEventListener("click", (e) => {
  if (popupBody.closest(".popup") === e.target) {
    closePopup();
    body.style.pointerEvents = "none";
  }
});
