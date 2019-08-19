

  let saying = [' ""'];







function newQuote() {
  let randomQuote = saying[Math.floor(Math.random()* saying.length)]
  let usedQuotes = []; // defined an empty array for usedQuotes variable here
  if(usedQuotes.length === saying.length){
    usedQuotes = []
  }

  if(usedQuotes.includes(randomQuote) === false){
    usedQuotes.push(randomQuote);
      $('#message').html(randomQuote);
    return randomQuote;
  } else {
  newQuote();

  }
};

