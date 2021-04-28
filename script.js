// alert("Baaaaaaaaaaaaa! Youre on! 🎇");
// console.log("Hi there!");

//GET QUOTES from api
let apiQuotes = [];

function newQuote() {
  const length = apiQuotes.length;
  const idx = Math.floor(Math.random() * length);
  const quote = apiQuotes[idx];
  console.log(quote);
}
async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const res = await fetch(apiUrl);
    apiQuotes = await res.json();
    newQuote();
  } catch (err) {
    console.log(err.message);
  }
}

//On load
getQuotes();
