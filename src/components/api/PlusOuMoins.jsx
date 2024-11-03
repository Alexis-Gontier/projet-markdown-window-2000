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
  <div className="absolute bottom-20 w-96 bg-[#D7D0C8] flex items-center after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#000]">
    <div className="p-px">
      <div className="w-full h-8 px-2 py-0 bg-gradient-to-r from-[#000181] to-[#1084d0] flex justify-between items-center">
        <p className="text-white text-base">Jeu du plus ou moins</p>
        <button onClick={fetchNewCard} className="text-white">↻</button>
      </div>
      <div className="w-full h-full flex flex-col items-center p-4">
        {currentCard && (
          <div>
        <p className="text-lg font-bold text-center">Carte actuelle : {currentCard.value === "ACE" ? "As" : currentCard.value === "JACK" ? "Valet" : currentCard.value === "QUEEN" ? "Dame" : currentCard.value === "KING" ? "Roi" : currentCard.value} de {CardColor[currentCard.suit]}</p>
          <img src={currentCard.image}/>
        </div>
        )}
        <div className="flex justify-between item-center p-4 space-x-4 ">
        <button id="plus" className="group bg-[#D7D0C8] h-full py-1 px-2 flex justify-center items-center gap-1 border-2 border-t-[#fff] border-r-[#808080] border-b-[#808080] border-l-[#fff] shadow-[1px_1px_0px_1px_#000] focus:bg-[#c7c1ba] focus:border-t-[#808080] focus:border-r-[#fff] focus:border-b-[#fff] focus:border-l-[#808080] focus:shadow-[0px_0px_0px_0px_#000] focus:translate-x-px focus:translate-y-px">Plus</button>
        <button id="moins" className="group bg-[#D7D0C8] h-full py-1 px-2 flex justify-center items-center gap-1 border-2 border-t-[#fff] border-r-[#808080] border-b-[#808080] border-l-[#fff] shadow-[1px_1px_0px_1px_#000] focus:bg-[#c7c1ba] focus:border-t-[#808080] focus:border-r-[#fff] focus:border-b-[#fff] focus:border-l-[#808080] focus:shadow-[0px_0px_0px_0px_#000] focus:translate-x-px focus:translate-y-px">Moins</button>
        </div>
        <p>{message}</p>
      <p className="text-lg font-bold text-center">Score: {score}</p>
      <p className="text-lg font-bold text-center">Meilleur score: {bestScore}</p>
      </div>
    </div>
  </div>
);};


export default PlusOuMoins;
