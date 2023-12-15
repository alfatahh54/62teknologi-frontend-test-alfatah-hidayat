import { faStar as faStarReg } from "@fortawesome/free-regular-svg-icons";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Stars({stars, reviews, alias}) {
    const ratingStars = Array.from({length: 5}, (v,k) => {
        return(<span key={alias+"-star-"+k}>
            {
                stars >= k+1 ?
                <FontAwesomeIcon className="BusinessInfo__contentInfo__rating" icon={faStar} /> :
                stars > k ?
                <FontAwesomeIcon className="BusinessInfo__contentInfo__rating" icon={faStarHalfStroke} /> :
                <FontAwesomeIcon className="BusinessInfo__contentInfo__rating" icon={faStarReg} />
            }
        </span>)
    })
    return (
        <div key={alias+"-reviews"}>
            {ratingStars}
            <b> {stars}</b> (<a href="#">{reviews} reviews</a>)
        </div>
    )
}

export default Stars