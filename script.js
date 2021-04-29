// alert("Baaaaaaaaaaaaa! Youre on! 🎇");
// console.log("Hi there!");

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.querySelector(".loader");

let apiQuotes = [];

function showSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function hideSpinner() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

function newQuote() {
  // loading();
  const length = apiQuotes.length;
  const idx = Math.floor(Math.random() * length);
  const quote = apiQuotes[idx];
  hideSpinner();
  authorText.textContent = quote.author ? quote.author : "Unknown";

  if (quote.text.length >= 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }

  quoteText.textContent = quote.text;
}
//GET QUOTES from api
async function getQuotes() {
  showSpinner();
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const res = await fetch(apiUrl);
    apiQuotes = await res.json();
    newQuote();
  } catch (err) {
    console.log(err.message);
  }
}

function tweetQuotes() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} -${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

//On load
getQuotes();

//event listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuotes);
