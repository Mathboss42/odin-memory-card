import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Scoreboard from './components/Scoreboard';
import Card from './components/Card';
import cardCollection from './components/cardCollection';

// let clickedCards = [];

function App() {
    const [cards, setCards] = useState(cardCollection);
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    const clickedCards = useRef([]);


    useEffect(() => {
        console.log(cards);
        setCards(shuffleArray(cards));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const shuffleArray = (arr) => {
        const array = [...arr];

        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j]
            array[j] = temp;
        }
        
        return array;
    }

    const handleOnCardClick = (el) => {
        setCards(shuffleArray(cards));
        handleScore(el);
    }

    const handleScore = (el) => {
        // console.log(clickedCards.some(element => element.title === el.title))
        // console.log(clickedCards[0], el.title, clickedCards[0] === el.title)
        if (clickedCards.current.some(element => element.title === el.title)) {
            console.log('includes');
            reset();
        } else {
            console.log('doesnt include', el, clickedCards)
            clickedCards.current = [...clickedCards.current, el];
            setScores();
            // console.log(clickedCards)
        }
    }

    const reset = () => {
        setCurrentScore(0);
        clickedCards.current = [];
    }

    const setScores = () => {
        setCurrentScore(currentScore + 1);
        if (currentScore + 1 > bestScore) {
            setBestScore(currentScore + 1);
        }
    }

    return (
        <div className="App">
            <div className="header">
                <Scoreboard currentScore={currentScore} bestScore={bestScore}/>
            </div>
            <div className="cards-container">
                {cards.map((el, index) => {
                    return <Card 
                                title={el.title} 
                                src={el.src} 
                                onCardClick={() => handleOnCardClick(el)} 
                                key={index}
                            />
                })}
            </div>
        </div>
    );
}

export default App;
