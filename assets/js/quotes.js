// ===============================
// Daily Quotes
// ===============================

const quotes = [

    {
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },

    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },

    {
        text: "Success is the sum of small efforts repeated daily.",
        author: "Robert Collier"
    },

    {
        text: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    },

    {
        text: "Do something today that your future self will thank you for.",
        author: "Sean Patrick Flanery"
    },

    {
        text: "Discipline beats motivation.",
        author: "Unknown"
    },

    {
        text: "Small progress is still progress.",
        author: "Unknown"
    },

    {
        text: "Keep Building. Keep Learning.",
        author: "DevDesk"
    },

    {
        text: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },

    {
        text: "Consistency creates success.",
        author: "Unknown"
    }

];

function loadQuote() {

    const random =
        quotes[Math.floor(Math.random() * quotes.length)];

    motivation.innerHTML =
        `💬 "${random.text}"<br><strong>— ${random.author}</strong>`;

}

loadQuote();