import React from 'react';
import './Admin.css';
import r1 from './r1.jpg';
import r2 from './r2.jpg';
import r3 from './r3.jpg';

// Correction : le nom du composant doit être CommandeCour
function CommandeCour() {
  const a = "Date";
  const b = "Nom Client";
  const c = "Nom Plat";
  const d = "Prix";

  return (
    <div>
      <div className='l1'>
        <div className='img'>
          <img src={r1} className='' alt='' />
          <img src={r2} className='' alt='' />
          <img src={r3} className='' alt='' />
          <img src={r2} className='' alt='' />
          <img src={r3} className='' alt='' />
        </div>
        <br />
        <div className='lb'>
          <div><p style={{ width: 300 }}>Listes des Commande en Cours</p></div>
        </div>
        <div className='list'>
          <div className='p1'>
            <span className='d1'>{a}</span>
            <span className='d2'>{b}</span>
            <span className='d3'>{c}</span>
            <span className='d4'>{d}</span>
            <hr />
          </div>
          <div className='p1'>
            <span className='d1'>{a}</span>
            <span className='d2'>{b}</span>
            <hr />
          </div>
          <div className='p1'>
            <span className='d1'>{a}</span>
            <span className='d2'>{b}</span>
            <hr />
          </div>
          <div className='p1'>
            <span className='d1'>{a}</span>
            <span className='d2'>{b}</span>
            <hr />
          </div>
          <div className='p1'>
            <span className='d1'>{a}</span>
            <span className='d2'>{b}</span>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommandeCour;