
const words = [{
  quote: "The one who falls and gets up is so much stronger than the one who never fell",
  author: "unknown"
}, {
  quote: "Maybe the journey isn't so much about becoming anything. Maybe its's about un-becoming everything that isn't really you, so you can be who you were meant to be in the first place",
  author: "unknown"
}, {
  quote: "Not all storms come to disrupt your life, some come to clear your path",
  author: "unknown"
}, {
  quote: "Every dark night leads to a brighter day",
  author: "KJB"
}, {
  quote: "God gave his toughest battles to the strongest soldiers",
  author: "KJB"
}, {
  quote: "Success is not final; failure is not fatal: it is the courage to continue that counts",
  author: "unknown"
}, {
  quote: "Where there is perfection there is no story to tell",
  author: "unknown"
}, {
  quote: "If you look for perfections you will never be content",
  author: "unknown"
}, {
  quote: "The best thing one can do when it is raining, is let it rain",
  author: "unknown"
}, {
  quote: "Stay close to anything that makes you glad that you are ALIVE",
  author: "unknown"
}, {
  quote: "As you love yourself, life loves you back",
  author: "KJB"
}, {
  quote: "The streets dont love you, they only take you away from the ones that do",
  author: "Moneybagg Yo"
}, {
  quote: "Insanity is doing the same thing, over and over again, but expecting different results ",
  author: "Narcotics Anonymous"
}, {
  quote: "Without Music, life would be a mistake",
  author: "Friedrich Nietzsche"
}, {
  quote: "Live as if you were to die tomorrow. Learn as if you were to live forever",
  author: "Mahatma Gandhi"
}, {
  quote: "Be who you are and say what you feel, becuase those who mind don't matter, and those who matter don't mind",
  author: "Bernard M. Baruch"
}, {
  quote: "To live is the rarest thing in the world. Most people just exist, that is all",
  author: "Oscar Wilde"
}, {
  quote: "It is better to be hated for what you are than to be loved for what you are not",
  author: "Andre Gide"
}, {
  quote: "It felt like you took my soul from me",
  author: "Gary John Bishop"
}];  


function randomWords(param) {
  return param[Math.floor(Math.random() * (words.length))];
}  

function random(colors) {
  return Math.floor(Math.random() * (colors + 1));
}  

function displayWord() {
  let newQuote = randomWords(words)
  $("#text").text(newQuote.quote);
  $("#author").text(newQuote.author);
  $(".post-quote").text(newQuote.quote);
  $("#post-author").text(newQuote.author);
}  
// const element = document.querySelector('.pain');
// element.classList.add('animate__animated', 'animate__tada')
$( "article" ).on( "click", function() {
  $( this ).toggleClass( "animate__animated", "animate__tada" );
});
  
  function ranColor() {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    $("html body").animate({
      backgroundColor: rndCol,
      color: rndCol
    }, 200)
    $("#new-quote").animate({
      backgroundColor: rndCol,
      color: "white"
    }, 200)
    $("#twitter").animate({
      backgroundColor: rndCol,
      color: "white"
    }, 200)
  }
  

$(document).ready(displayWord());
$(document).ready(ranColor());
$(document).ready(function () {
  $("#new-quote").on("click", displayWord)
  $("#new-quote").on("click", ranColor)
});


