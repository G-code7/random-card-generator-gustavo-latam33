/* eslint-disable */
import "./style.css";

const suits = ["hearts", "diamonds", "clubs", "spades"];
const values = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];
const suitIcons = {
  hearts: "♥",
  diamonds: "♦",
  clubs: "♠",
  spades: "♣"
};

function createDeck() {
  let deck = [];
  for (let suit of suits) {
    for (let value of values) {
      deck.push({ suit: suit, value: value });
    }
  }
  return deck;
}

function drawRandomCard(deck) {
  const randomIndex = Math.floor(Math.random() * deck.length);
  const card = deck[randomIndex];
  deck.splice(randomIndex, 1);
  return card;
}

function generateRandomCard() {
  let deck = createDeck();
  let randomCard = drawRandomCard(deck);
  document.getElementById("card-value").textContent = randomCard.value;

  let suitRandom = suitIcons[randomCard.suit];
  let suitElements = document.querySelectorAll(".card-suit");
  suitElements[0].innerHTML = suitRandom;
  suitElements[1].innerHTML = suitRandom;

  // Cambiar el color del valor y el palo según el palo
  let cardElement = document.getElementById("card");
  if (randomCard.suit === "hearts" || randomCard.suit === "diamonds") {
    cardElement.style.color = "red";
  } else {
    cardElement.style.color = "black";
  }
}

window.onload = generateRandomCard;
console.log("Hello Rigo from the console!");
