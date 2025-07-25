import React from 'react';
import './Admin.css'
import r1 from './r1.jpg'
import r2 from './r2.jpg'
import r3 from './r3.jpg'
import { HiOutlinePlus } from "react-icons/hi";
import { FaMinus } from "react-icons/fa"

function AdminListePlat() {
  const a = "nom"; 
  const b = "Prix";

  return (
    
    <div>
        
      <div className='l1'>
        <div className='img'> 
          <img src={r1} className='' alt='' ></img>
        <img src={r2} className='' alt=''  ></img>
        <img src={r3} className='' alt='' ></img>
        <img src={r2} className='' alt=''  ></img>
        <img src={r3} className='' alt='' ></img>
        </div>
        <br></br>  
        <div className='lb'>
           <div><p style={{width:300}}>Listes des Plats</p></div>
           <div className='b'><button style={{margin:15,backgroundColor:'#4CAF50'}}><HiOutlinePlus />Ajouter</button><button style={{margin:15,backgroundColor:'#E84710'}} ><FaMinus />supprimer</button></div>
        </div>
       

        <div className='list'>
            <div className='p1'>
              <span className='d1'>{a}</span><span className='d2'>{b}</span>
              <hr></hr>
            </div>
            <div className='p1'>
              <span className='d1'>{a}</span><span className='d2'>{b}</span>
              <hr></hr>
            </div>
            <div className='p1'>
              <span className='d1'>{a}</span><span className='d2'>{b}</span>
              <hr></hr>
            </div>
            <div className='p1'>
              <span className='d1'>{a}</span><span className='d2'>{b}</span>
              <hr></hr>
            </div><div className='p1'>
              <span className='d1'>{a}</span><span className='d2'>{b}</span>
              <hr></hr>
            </div>


        </div>
        
      </div>
      
      
      
    </div>
  );
}

export default AdminListePlat;