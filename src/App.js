import React, { useEffect, useState } from 'react';
import './App.css';
import Scoreboard from './components/Scoreboard';
import Card from './components/Card';
import cardCollection from './components/cardCollection';

function App() {
    const [cards, setCards] = useState(cardCollection);

    useEffect(() => {
        console.log(cards);
        setCards(shuffleArray(cards));
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

    const handleOnCardClick = () => {
        setCards(shuffleArray(cards));
    }

    return (
        <div className="App">
            <div className="header">
                <Scoreboard />
            </div>
            <div className="cards-container">
                {cards.map((el, index) => {
                    return <Card title={el.title} src={el.src} onCardClick={handleOnCardClick} key={index}/>
                })}
            </div>
        </div>
    );
}

export default App;
