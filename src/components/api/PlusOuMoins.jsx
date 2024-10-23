import React, { useState, useEffect } from "react";
import { fetchCardApi } from '../../services/DeckService';


// Jeu du plus ou moins avce des cartes 
const PlusOuMoins = () => {
  const [currentCard, setCurrentCard] = useState(null);
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const cardNumbers = {
    "ACE": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    "JACK": 11,
    "QUEEN": 12,
    "KING": 13
  };
  
  const CardColor = {
    "CLUBS": "Trèfle",
    "DIAMONDS": "Carreau",
    "HEARTS": "Cœur",
    "SPADES": "Pique"
  };

  const fetchNewCard = async () => {
    const card = await fetchCardApi();
    return card;
  };

  const StartGame = async () => {
    const card = await fetchNewCard();
    setCurrentCard(card);
  };

  useEffect(() => {
    StartGame();
  }, []);

  const Game = async (guess) => {
    const nextCard = await fetchNewCard();
    const currentCardValue = cardNumbers[currentCard.value];
    const nextCardValue = cardNumbers[nextCard.value];
    if ((guess === "plus" && nextCardValue > currentCardValue) || 
        (guess === "moins" && nextCardValue < currentCardValue)) {
      setMessage("Bien joué !");
      setScore(score + 1);
      if (score + 1 > bestScore) {
        setBestScore(score + 1);
      }
    } else {
      setMessage(` Mauvaise réponse , l a carte était ${cardNumbers[nextCard.value]} de ${CardColor[nextCard.suit]}.`);
      setScore(0); 
    }
    setCurrentCard(nextCard);
  };

  useEffect(() => {
    const plusBtn = document.getElementById("plus");
    const moinsBtn = document.getElementById("moins");
    const PlusClick = () => Game("plus");
    const MoinsClick = () => Game("moins");
    plusBtn.onclick = PlusClick;
    moinsBtn.onclick = MoinsClick;
  },);  

  return (
    <div>
      <h2>Jeu du plus ou moins</h2>
      {currentCard && (
        <div>
        <p>Carte actuelle : {currentCard.value === "ACE" ? "As" : currentCard.value === "JACK" ? "Valet" : currentCard.value === "QUEEN" ? "Dame" : currentCard.value === "KING" ? "Roi" : currentCard.value} de {CardColor[currentCard.suit]}</p>
          <img src={currentCard.image}/>
        </div>
      )}
      <button id="plus">Plus</button>
      <button id="moins">Moins</button>
      <p>{message}</p>
      <p>Score: {score}</p>
      <p>Meilleur score: {bestScore}</p>
    </div>
  );
};

export default PlusOuMoins;
