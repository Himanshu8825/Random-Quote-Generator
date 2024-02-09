const api = "https://dummyjson.com/quotes/random";
const showQuote = document.getElementById("quote");
const showAuthor = document.getElementById("author");
const btn = document.querySelector(".btn");

showAuthor.classList.add("author-box");

btn.addEventListener("click", () => getQuote(api));

async function getQuote(url) {
  await fetch(url)
    .then((data) => data.json())
    .then((item) => {
      showQuote.innerText = '"' + item.quote + '"';
      showAuthor.innerText = item.author;
      showAuthor.classList.remove("author-box");
    });
}

getQuote(api);
