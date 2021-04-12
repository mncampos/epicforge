import React from 'react';
import './cardList.styles.css';
import { Card } from '../card/card.component';

export const CardList = (props) => (
    <div className='card-list'>
        {props.weapons.map(weapons =>
            <Card key={Math.random()} weapon = {weapons} />
                )
            }
    </div>
)