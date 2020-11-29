import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
           <h1> Check out this nice locations!</h1> 
           <div className="cards__container">
               <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src= "images/taj.jpg"
                        text="Come to visit the wonderful Taj Mahal"
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem
                        src= "images/london.jpg"
                        text="Come shopping in London"
                        label='City'
                        path='/services'
                        />
                        <CardItem
                        src= "images/cappadoce.jpg"
                        text="Come and fly like a bird"
                        label='Sky is the limit'
                        path='/services'
                        />
                        <CardItem
                        src= "images/udaipur.jpg"
                        text="Live like a rajah"
                        label='Royalty'
                        path='/services'
                        />
                    </ul> 
               </div>
            </div>    
        </div>
    )
}

export default Cards
