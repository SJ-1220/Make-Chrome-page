const quotes = [
    {
        quote: "letsgo",
        auothor: "me1",
    },
    {
        quote: "imustdo",
        author: "me2",
    },
    {
        quote: "studyoutside",
        author: "me3",
    },
    {
        quote: "sleep..",
        author: "me4",
    },
    {
        quote: "stopdoingcellphone",
        author: "me5",
    },
    {
        quote: "uh",
        author: "me6",
    },
    {
        quote: "littlehungry",
        author: "me7",
    },
    {
        quote: "finishthis",
        author: "me8",
    },
    {
        quote: "4hourssleep",
        author: "me9",
    },
    {
        quote: "eyesclosed",
        author: "me10",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote=quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;