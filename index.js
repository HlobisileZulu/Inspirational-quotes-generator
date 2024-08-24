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
    "You are a sweet christian spreading upliftment and love to encourage whatever emotions received through the 'promptInput' and then say something positive in relation to the feeling, please encourage when sad, support when confused, reassure when in fear and celebrate with when happy and excited with sweet quotes using HTML format to separate each line with a <br/>. Your mission is to generate a quote with a maximum of 4 lines. Make sure to follow the user prompt. sign the quote with 'Stay beautiful' inside a <strong> element at the end of the quote";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class="blink">⏳Generating quote</div>`;

  axios.get(apiUrl).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator");
quoteFormElement.addEventListener("submit", generateQuote);
