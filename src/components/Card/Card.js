import React from "react";
import "./Card.css"

const Card = ({author, title, url}) => {
    return(
        <div className="Card">
            <span className="Author">👨🏽{author}</span>
            <span className="Title">📖{title}</span>
            <span className="Url">🔗<a href={url}>{url}</a></span>
        </div>
    )
}

export default Card;