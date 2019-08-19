

  let saying = ['"The Dude abides" - The Big Lebowski', '"Sometimes you eat the bear, sometimes the bear eats you" -The Big Lebowski',
               '"Sometimes nothing is a real cool hand" - Cool Hand Luke', '"We Went Blue!" - Brett Hull', '"It\'s the first week of the season!" - Tony La Russa',
               '"My eyes! The goggles do nothing!" - Rainier Wolfcastle',];







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

