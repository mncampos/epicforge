import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
        <img alt="monster" src={`https://robohash.org/${props.weapon.id}?set=set2`} />
        <h2>{props.weapon.name}</h2>
        <p> {props.weapon.email}</p>
    </div>
)