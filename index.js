function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings: "Quote..",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let quoteFormElement = document.querySelector("#quote-generator");
quoteFormElement.addEventListener("submit", generateQuote);
