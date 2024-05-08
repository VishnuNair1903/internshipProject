
import './App.css';
import { Card } from './Components/Card';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import { useState } from 'react';
import data from './data.json';
import GameCard from './Components/GameCard';

function App() {
  

  
  

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
      <div className='app-container'>
      {data.map((animal) => (
            <Card key={animal.id} animal={animal} />
          ))}
      </div>

      

      
      </div>
      <div>
        <GameCard key={data.id} animal={data} />
      </div>
    </DndProvider>
    
    
  );
}

export default App;
