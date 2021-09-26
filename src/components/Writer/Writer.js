// importing brands icon
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'

// importing usual font awesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'

import React from 'react';

import "./Writer.css"

// adding facebook icon to library
library.add(faFacebookF);

const Writer = (props) => {
    // destructuring
    const { name, age, salary, gender, img, bestBook, country } = props.writer;

    // using font awesome
    const shoppingCart = <FontAwesomeIcon icon={faUser} />


    return (


        <div className="writer">
            <img src={img} alt="" />
            <h4>Name: {name}</h4>
            <h4>Age: {age}</h4>
            <h4>Country: {country}</h4>
            <h4>Gender: {gender}</h4>
            <h4>Salary: $ {salary}</h4>
            <h4>Best Book: {bestBook}</h4>

            {/* social icon adding */}
            <div className="social">
                <button onClick={() => props.handleInvite(props.writer)}> {shoppingCart} Invite</button>
                <h2><a href="#"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
                </h2>
            </div>
        </div>
    );
};

export default Writer;