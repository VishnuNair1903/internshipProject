import React, { useRef } from 'react'
import data from '../data.json';
import { AnimalCard } from './AnimalCard';
import './Card.css';
import { useState } from 'react';

function GameCard({animal}) {
  const [submitted, setSubmitted]=useState(false);
  const [correct, setCorrect]=useState({});
  const cardContainers=useRef([]);
  const [results, setResults]=useState({});

  const handleSubmit=()=>{
    setSubmitted(true);
    let allCorrect = true;
    
    cardContainers.current.forEach((card, index)=>{
        const containerData=card.getAttribute('data-name');
        const droppedItem=card.querySelector('.animal-container');
        const droppedItemData=droppedItem?.getAttribute('data-name');
        console.log(`Container data: ${containerData}`);
        console.log(`Dropped item data: ${droppedItemData}`);
        if(containerData===droppedItemData){
            setCorrect((prevCorrect)=>({...prevCorrect,[index]:true}));
            setResults((prevResults)=>({...prevResults,[index]:true}));
        }else{
            setCorrect((prevCorrect)=>({...prevCorrect,[index]:false}));
            setResults((prevResults)=>({...prevResults,[index]:false}));
            allCorrect=false;
        }
    });
    
  };

  return (
    <div>
        <div className="g-container">
      {data.map((data, index)=>(
        <div key={index} ref={(el)=>cardContainers.current[index]=el} >
            <AnimalCard key={index} animal={data}  />
        </div>
          
          
            
          
          
        
        
        
      ))}
    </div>
    <button onClick={handleSubmit}>Submit</button>
    {submitted && (
        <div>
            {Object.keys(correct).map((key, index) => (
            <div key={index}>
              {correct[key]? <span>&#10004;</span> : <span>&#10008;</span>}
            </div>
          ))}
        </div>
    )}
      
    </div>
  )
}

export default GameCard
