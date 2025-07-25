import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserCmd.css';
import { Link } from 'react-router-dom';
const a = "Date"; 
  const b = "Nom du restaurant";
  const c = "Nom Plat";
  const d = "email";
function Mescommande() {
  return (
    <div className='Mescommande'><br></br><br></br>
        <div className='contenant'>
            <h2 className='text-center mt-3 mb-4'>Historique des commandes <span><Link className='close ' style={{textDecoration:'none'}} to='/'>X</Link></span></h2>
            {/*user data 1*/}
            <div className='p1'>
              <span className='ml-2'>{a}</span><span >{b}</span><span>{}</span><span>{c}</span><span>{d}</span>
              
            </div>
              <hr></hr>
              {/*End 1*/}
              {/*user data 1*/}
            <div className='p1'>
              <span className='ml-2'>{a}</span><span >{b}</span><span>{}</span><span>{c}</span><span>{d}</span>
              
            </div>
              <hr></hr>
              {/*End 1*/}
              {/*user data 1*/}
            <div className='p1'>
              <span className='ml-2'>{a}</span><span >{b}</span><span>{}</span><span>{c}</span><span>{d}</span>
              
            </div>
              <hr></hr>
              {/*End 1*/}
              {/*user data 1*/}
            <div className='p1'>
              <span className='ml-2'>{a}</span><span >{b}</span><span>{}</span><span>{c}</span><span>{d}</span>
              
            </div>
              <hr></hr>
              {/*End 1*/}
        </div>
    </div>
  );
}

export default Mescommande;