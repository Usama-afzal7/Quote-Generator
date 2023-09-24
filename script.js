// Selecting by ID

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const quoteBtn = document.getElementById('new-quote');





let apiQuotes = [];

// Show New Quote

function newQuote () {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // Check if author is blank then replace it with "Unkown"
    if (!quote.author){
        authorText.textContent= 'Unknown';
    }else{
    authorText.textContent = quote.author;
    }
    // Check Quote Length to determine Styling
    if(quote.text.length > 70){
        quoteText.classList.add('long-quote') ;
    }else{
        quoteText.classList.remove('long-quote')
    }
    quoteText.textContent = quote.text;
    

}

// Get quotes from api

async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    }catch (error) {
        // catch errors
    }
}

function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners
quoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click',tweetQuote);


// On Load
getQuotes();