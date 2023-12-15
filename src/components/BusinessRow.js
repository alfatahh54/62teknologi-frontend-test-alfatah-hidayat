import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Stars from './Stars';
import { faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
// import sampleImage from '../logo192.png';

const BusinessRow = (props) => {
  return (
    <div 
        className = "BusinessInfo"
        key = {props.data.alias+"-info"}
    >
        <img src = {props.data.image_url} alt = {props.data.alias} className = "BusinessInfo__img" />
        <div className='BusinessInfo__contentInfo'>
          <h2 className ="heading-tertiary BusinessInfo__contentInfo__name">{props.data.name}</h2>
          
          <p className = "BusinessInfo__contentInfo__para">
              <FontAwesomeIcon 
              icon = {faMapMarkedAlt} 
              className = "BusinessInfo__contentInfo__icon"
              aria-label = "address:" />
              {props.data.location.display_address[0]}, {props.data.location.display_address[1]}
          </p>
          
          <p className = "BusinessInfo__contentInfo__para">
              <FontAwesomeIcon 
              icon = {faPhone} 
              className = "BusinessInfo__contentInfo__icon"
              aria-label = "phone number:" />
              {props.data.phone}
          </p>

          <Stars stars={props.data.rating} reviews={props.data.review_count} alias={props.data.alias} key={props.data.alias+"Reviews"}/>                 

          <a 
              href= {props.data.url} 
              className = "BusinessInfo__contentInfo__website">
                  More infomration on Yelp
          </a>
        </div>
    </div>
  );
}

export default BusinessRow;