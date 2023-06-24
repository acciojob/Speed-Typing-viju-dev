//your JS code here. If required.
// Fetch a random quote from the API using a proxy server
function fetchRandomQuote() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // Proxy server URL
    const apiUrl = 'http://api.quotable.io/random'; // API URL

    fetch(proxyUrl + apiUrl)
        .then(response => response.json())
        .then(data => {
        console.log(data);
        console.log("jhg");
            // Update the quote display
            const quoteDisplay = document.querySelector('.quote-display');
            quoteDisplay.textContent = data.content;
        })
        .catch(error => console.error('Error:', error.message));
}
  // Clear the input area and start the timer
        function startGame() {
            const quoteInput = document.getElementById('quoteInput');
            const timer = document.querySelector('.timer');

            quoteInput.value = '';
            timer.textContent = 0;

            fetchRandomQuote();
            quoteInput.focus();
        }

        // Check if the typed text is correct
        // Check if the typed text is correct
function checkTyping() {
    const quoteInput = document.getElementById('quoteInput');
    const quoteDisplay = document.querySelector('.quote-display');
    const timer = document.querySelector('.timer');

    const typedText = quoteInput.value;
    const quoteText = quoteDisplay.textContent;

    if (typedText === quoteText) {
        // Typed text is correct
        quoteInput.classList.remove('incorrect');
        quoteInput.classList.add('correct');

        // Reset the timer after 3 seconds
        setTimeout(() => {
            quoteInput.classList.remove('correct', 'incorrect');
            quoteInput.value = '';
            timer.textContent = 0;
            fetchRandomQuote();
        }, 3000);
    } else {
        // Typed text is incorrect
        quoteInput.classList.remove('correct');
        quoteInput.classList.add('incorrect');
    }
}


        // Increment the timer every second
        function startTimer() {
            const timer = document.querySelector('.timer');
            let time = 0;

            setInterval(() => {
                time++;
                timer.textContent = time;
            }, 1000);
        }

        // Start the game when the page loads
        window.onload = function() {
            startGame();
            startTimer();
        };

        // Event listener for input changes
        document.getElementById('quoteInput').addEventListener('input', checkTyping);