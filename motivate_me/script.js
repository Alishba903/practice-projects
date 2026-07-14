const button = document.querySelector("button");

button.addEventListener("click", () => {
  const category = document.getElementById("category").value;

  fetch(chrome.runtime.getURL("quotes.json"))
    .then(response => response.json())
    .then(data => {
      const quotes = data.data[category]; 

      if(!quotes || quotes.length === 0){
        document.getElementById("quote").textContent = "No quotes found for this category.";
        return;
      }

      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      
      document.getElementById("quote").textContent =
        `"${randomQuote.quote}" — ${randomQuote.author}`;
    })
    .catch(err => console.error("Error loading quotes:", err));
});
