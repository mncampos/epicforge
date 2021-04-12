import React from 'react';
import './cardList.styles.css';
import { Card } from '../card/card.component';

export const CardList = (props) => (
    <div className='card-list'>
        {props.weapons.map(weapons =>
            <Card key={weapons.id} weapon = {weapons } />
                )
            }
    </div>
)