function Scoreboard(props) {
    return (
        <div className="scoreboard">
            <p>Current Score: {props.currentScore}</p>    
            <p>Best Score: {props.bestScore}</p>    
        </div>
    );
}

export default Scoreboard;