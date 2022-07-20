import React, { useState } from 'react';
import data from './data'

const Card = (props) => {


    return (
        <div className="item-card">
            <div className="item-card-left">
                <h1 className="Number">{props.input + 1}/{data.length}</h1>
                <h1 className="Name">{data[props.input].name.first}</h1>
                <p>
                  <span className="bold">From:</span> {data[props.input].city}
                </p>
                <p>
                  <span className="bold">Job Title:</span> {data[props.input].title}
                </p>
                <p>
                  <span className="bold">Employer</span> {data[props.input].employer}
                </p>
                <p>
                  <span className="bold">Favorite Movies</span> 
                </p>
            <div>
                 <ul className="movie-list">
                    <li>{data[props.input].favoriteMovies[0]}</li>
                    <li>{data[props.input].favoriteMovies[1]}</li>
                    <li>{data[props.input].favoriteMovies[2]}</li>
                 </ul>
            </div>
        </div>
      </div>
    )
}

export default Card;