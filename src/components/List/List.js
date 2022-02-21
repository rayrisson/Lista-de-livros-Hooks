import React from "react";
import Card from "../Card/Card";
import "./List.css"

const List = ({bookList}) => {
    return (
        <div className="List">
            {bookList?.map((item, index) => (
                <Card author={item.author} title={item.title} url={item.url} key={index}/>
            ))}
        </div>
    )
}

export default List;