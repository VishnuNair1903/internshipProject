import './Card.css';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
export function AnimalCard({animal}) {

  const [{isDragging},  drag]=useDrag({
    type: ItemTypes.CARD,
    item:{id:animal.id},
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
    end:(item, monitor)=>{
      const dropResult=monitor.getDropResult();
      if(item && dropResult){
        alert(`you threw ${item.name} into ${dropResult.name}!`);
      }
    }
    
  });

  


  return (
    <div className={`animal-container ${isDragging ? "dragging":""}`} ref={drag} data-name={animal.text}>
    
      <div className='text-box'>
        {animal.text}

      </div>
      
      
    </div>
  );
}