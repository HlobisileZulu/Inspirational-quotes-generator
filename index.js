function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  let promptInput = document.querySelector("#user-prompt");

  let apiKey = "bf12aoc52a0037b78bd1dd944a5e64ta";
  let prompt = `User prompt: Generate a quote about ${promptInput}`;
  let context =
    "You are a motivational, sweet christian spreading upliftment and love to encourage when sad, support when confused, reassure when in fear and celebrate with when happy and excited with sweet quotes using HTML format to separate each line with a <br/>. Your mission is to generate a maximum of 5 line quotes. Make sure to follow the user prompt. sign the quote with 'Stay beautiful' inside a <strong> element at the end of the quote";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class="blink">⏳Generating quote</div>`;

  axios.get(apiUrl).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator");
quoteFormElement.addEventListener("submit", generateQuote);
