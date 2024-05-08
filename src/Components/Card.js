import React from "react";
import './Card.css';
import { useDrop } from "react-dnd";
import { useState } from "react";
import data from '../data.json';
import { ItemTypes } from "./ItemTypes";
import { AnimalCard } from "./AnimalCard";

export function Card(props) {
  const [animals, setAnimals] = useState([]);
  const [isDropped, setIsDropped] = useState(false);

  const [{isOver}, drop] = useDrop({
    accept:ItemTypes.CARD,
    drop: (item) => {
      moveCard(item.id);
      setIsDropped(true);
      console.log(item.id)  
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
    end: (item, monitor) => {
      if(item && monitor.didDrop()) {
        const id=item.id;
        setAnimals((animal)=>animal.filter((animal)=>animal.id!==id));
      }
    },
  })

  const moveCard = (id) => {
    const card=data.filter((card)=>card.id===id);
    setAnimals((animal)=>[...animal, card[0]]);
    

    
  };

 
  
  
  
  
  
  
  
  return (
    <>
    <div className="card-container" data-name={props.animal.text}>
      
      <div className="container">
      
        {props.animal.text }
        

      </div>

      <div className={`drag ${isOver ? "over" : ""}`} ref={drop}>
        {isDropped && animals.map((animal)=>{
          return <AnimalCard key={animal.id} animal={animal} />
        })}
        
        

      </div>
    

  
      
  
    </div>



    
    
    
      
    
    </>
  );
}