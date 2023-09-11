//random quotes for bio

async function getRandomQuote() {
    try {
        const response = await fetch("/quotes.json"); // Adjust the path to your JSON file
        const quotes = await response.json();
        const randomIndex = Math.floor(Math.random() * 168);
      //  console.log(randomIndex);
      //  console.log(quotes.quotes[randomIndex]);
        return quotes.quotes[randomIndex];
        
    } catch (error) {
        console.error('Error fetching quotes:', error);
        return 'An error occurred while fetching quotes.';
    }
}



async function updateBio(){
let randomQuote = await getRandomQuote();
let getBio = document.getElementsByClassName("author-bio")[0]; // Use [0] to select the first element with the class "author-bio"
getBio.innerHTML = `<strong style="font-size: 17px;">"${randomQuote.quote}"</strong><br>- <em style="font-size: 15px; opacity: 0.95">${randomQuote.source}</em>`;
}

updateBio();