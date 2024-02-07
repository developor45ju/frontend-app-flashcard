import '../assets/css/style.css';

const Card = (props) => {
    const word = props.word;
    const wordTransled = props.wordTransled;
    const image = props.image;

    return (
        <div className="flashcard">
            <div className="front">
            <h1 className="word">{word}</h1>
            <img src={image} alt="Image" />
            </div>
            <div className="back">
            <p className="translation">{wordTransled}</p>
            </div>
        </div>
    )
}

export default Card;