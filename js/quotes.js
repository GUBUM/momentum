const quotes = [
    
    {
    quote:"You always pass failure on the way to success.",
    author:"Mickey Rooney"
},
{
    quote:"We can draw lessons from the past, but we cannot live in it.",
    author:"Lyndon B. Johnson"
},
{
    quote:"Death may be the greatest of all human blessings.",
    author:"Socrates"
},
{
    quote:"Summer afternoon - Summer afternoon... the two most beautiful words in the English language.",
    author:"Henry James"
},
{
    quote:"Self-respect is the cornerstone of all virtue.",
    author:"John Herschel"
},
{
    quote:"Never make predictions, especially about the future.",
    author:"Casey Stengel"
},
{
    quote:"If you want something done right, you should do it yourself.",
    author:"Snoopy"
},
{
    quote:"Do what you can, with what you have, where you are.",
    author:"T. Roosevelt"
},
{
    quote:"Talk is cheap. Show me the code.",
    author:"Linus Torvalds"
},
{
    quote:"Lisp isn’t a language, it’s a building material.",
    author:"Alan Kay"
}
];
const quote = document.querySelector("#quote span:first-child");
const author= document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() *quotes.length)];;

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;