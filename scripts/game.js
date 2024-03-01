const body = document.body;

// GAME

const game = document.createElement("div");
game.className = "game";

// INFO BLOCK

const info = document.createElement("div");
info.className = "game__info info";
game.append(info);

const infoTextQusetion = document.createElement("p");
infoTextQusetion.className = "info__text info__text_question";
info.append(infoTextQusetion);

const infoImageBlock = document.createElement("div");
infoImageBlock.className = "info__image-block";
info.append(infoImageBlock);

const images = [
  ["info__img_gallows", "assets/gallows.svg", "Gallows"],
  ["info__img_head", "assets/head.svg", "Head"],
  ["info__img_body", "assets/body.svg", "Body"],
  ["info__img_left-arm", "assets/left-arm.svg", "Left Arm"],
  ["info__img_right-arm", "assets/right-arm.svg", "Right Arm"],
  ["info__img_left-leg", "assets/left-leg.svg", "Left Leg"],
  ["info__img_right-leg", "assets/right-leg.svg", "Right Leg"],
];
const bodyParts = [];

images.forEach((image) => {
  let img = document.createElement("img");
  img.className = "info__img " + image[0];
  img.src = image[1];
  img.alt = image[2];
  bodyParts.push(img);
  infoImageBlock.append(img);
});

const infoTextScore = document.createElement("p");
infoTextScore.className = "info__text info__text_score";
infoTextScore.textContent = "Incorrect guesses";
info.append(infoTextScore);

const infoSpan = document.createElement("span");
infoSpan.className = "info__span";
infoTextScore.append(infoSpan);

// GUESS BLOCK

const guess = document.createElement("div");
guess.className = "game__guess guess";
game.append(guess);

const answer = document.createElement("div");
answer.className = "guess__answer answer";
guess.append(answer);

const answerList = document.createElement("ul");
answerList.className = "answer__list";
answer.append(answerList);

// KEYBOARD

const keyboard = document.createElement("div");
keyboard.className = "guess__keyboard keyboard";
guess.append(keyboard);

const keyboardList = document.createElement("div");
keyboardList.className = "keyboard__list";
keyboard.append(keyboardList);

const keyboardAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
const keyboardItems = [];

keyboardAlphabet.forEach((item) => {
  let li = document.createElement("li");
  li.className = "keyboard__item";
  li.textContent = item;
  keyboardItems.push(li);
  keyboardList.append(li);
});

// POPUP

const popup = document.createElement("div");
popup.className = "popup";

const popupBody = document.createElement("div");
popupBody.className = "popup__body";
popup.append(popupBody);

const popupContent = document.createElement("div");
popupContent.className = "popup__content";
popupBody.append(popupContent);

const popupTitle = document.createElement("h2");
popupTitle.className = "popup__title";
popupContent.append(popupTitle);

const popupAnswer = document.createElement("div");
popupAnswer.className = "popup__answer";
popupContent.append(popupAnswer);

const popupText = document.createElement("p");
popupText.className = "popup__text";
popupText.textContent = "Word:";
popupAnswer.append(popupText);

const popupTextAnswer = document.createElement("p");
popupTextAnswer.className = "popup__text_answer";
popupAnswer.append(popupTextAnswer);

const popupButton = document.createElement("button");
popupButton.className = "popup__button";
popupButton.textContent = "Play again";
popupContent.append(popupButton);

body.append(game);
body.append(popup);
