import React, { useState, useEffect } from 'react';
import './card.styles.css';

export const Card = (props) => {

    const API_KEY = '21117260-189b4a81022ca1e552dbbde37';
    const [URL, setURL] = useState({});
    const [ERROR, setERROR] = useState(false);

    



    async function FetchData(){
    const url = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(props.weapon.Name)}`);
    
    url.json().then(res => setURL(res.hits[0].webformatURL))
    .catch(err => setERROR('https://i.pinimg.com/564x/42/0d/e5/420de5b55490ea3c411f4d38fef74d45.jpg'));
    }

useEffect(()=> {
FetchData();
});

    



 return(
    <div className='card-container'>
        <img alt="monster" onError={(e) => {e.target.onerror = null; e.target.src="https://i.pinimg.com/564x/42/0d/e5/420de5b55490ea3c411f4d38fef74d45.jpg"}} src={JSON.stringify(URL).replace(/"/g, "")}/>
        <h2>{props.weapon.Name}</h2>
        <p> {props.weapon.Cost}</p>
        <p> {props.weapon.Damage}</p>
    </div>
)
    
}