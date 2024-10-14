import React, {useState} from 'react'

//Create a constant varible called quotes that is a list storing many random quotes and author wrapped inside a dict.
const quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
]
export default function QuoteGen(){
    //Creating an useState hook to manage state in functional component (State being the data). When state changes, React re-renders the component to reflect the new data in the UI 
    const [currentQuote, setCurrentQuote] = useState(quotes[0]);
    
    function getRandomQuote(){
        const randomIndex = Math.floor(Math.random() * quotes.length)
        setCurrentQuote(quotes[randomIndex])
    }

    return(
        <div>
            <h1>Random Quotes Generator</h1>
            <p>{currentQuote.text} - {currentQuote.author}</p>
            <button onClick={getRandomQuote}>
                Get Quote
            </button>
        </div>
    )
}