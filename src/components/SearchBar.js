import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SearchBar = (props) => {
    return (
        // <div className="wrap">
            <form className="search" onSubmit={props.handleSubmit}>
                <input type="text" className="search__term" placeholder="What are you looking for?"/>
                <button type="submit" className="search__button">
                    <FontAwesomeIcon icon={faSearch} style={{color: "white"}}/>
                </button>
            </form>
        // </div>
    )
}

export default SearchBar