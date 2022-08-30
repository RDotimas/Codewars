//Define a card suit
//https://www.codewars.com/kata/5a360620f28b82a711000047/train/javascript

function defineSuit(card) {
    if (card.includes('♣')) {
      return "clubs";
    }
    else if (card.includes('♦')) {
      return "diamonds";
    }
    else if (card.includes('♥')) {
      return "hearts";
    }
    else if (card.includes('♠')) {
      return "spades";
    }
  };