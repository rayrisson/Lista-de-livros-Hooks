import React, { useState } from "react";
import {BsSearch} from "react-icons/bs"
import "./Search.css"

const Search = ({searchCallback}) => {
    const [term, setTerm] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        searchCallback(term);
    }

    return (
        <form className="Search" onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setTerm(e.target.value)}/>
            <button type="submit"><BsSearch/></button>
        </form>
    )
}

export default Search;