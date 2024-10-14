import React, {useState} from 'react'

export default function QuoteGenerator(){

    const quotesData = [
        { quote: "The best way to predict the future is to invent it.", author: "Alan Kay" },
        { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
        { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
        { quote: "Do not wait for leaders; do it alone, person to person.", author: "Mother Teresa" },
        { quote: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" }
    ]

    const [currentQuote, setCurrentQuote] = useState(quotesData[0])

    function randomQuote(){
        const index = Math.floor(Math.random() * quotesData.length)
        setCurrentQuote(quotesData[index])
    }

    return(
        <div>
            <h1>Quote Generator</h1>
            <p>{currentQuote.quote} by {currentQuote.author}</p>

            <button
            onClick={randomQuote}>
                Generate Quote
            </button>

        </div>
    )
}