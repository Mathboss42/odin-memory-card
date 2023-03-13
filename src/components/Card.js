function Card(props) {
    return (
        <div className="card" onClick={props.onCardClick}>
            <img src={props.src} alt={props.src} />
            <p className="title">{props.title}</p>
        </div>
    );
}

export default Card;