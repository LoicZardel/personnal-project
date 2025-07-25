import React from 'react';
import './Resto.css'
import dishlogo from './dishlogo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import loupe from './loupe.png'
import r1 from './r1.jpg'
import { Link } from 'react-router-dom';

function Resto() {
  return (
 
    <div id='#head'>
      {/* debut de l' entete*/}
      <div className='row bg-dark ' >
           <img src={dishlogo} alt='logo' className='mx-auto d-block mt-3 mb-4 col-md-3 col-sm-12' id='logo' />
          <h1 className='col-md-9 text-light mt-3 text-center'>Choisissez Maintenant La Destination De Votre Choix</h1>
         
      </div>
      <div className='row' > 
        <img src={loupe} alt='' id='loupe' className='mx-auto d-block col-md-1  ml-5'></img><span id='b'  className=' col-md-10'>Nous avons trouver votre plat parmi ces

Destinations à proximité ci-dessous</span>
<p className='text-center'>Veuillez choisir l’une des destination ci-dessous</p>
      </div>
{/* debut de la selection des restaurant*/}

        <div className='container'>
          <div className='row'>
{/* restaurant1 proposé*/}
            <div className='col-md-4'>
              <div className='r1'>
                <img src={r1} alt='' className='mt-3'></img>
                <h3 className='mt-3'>Njoya restaux</h3>
                <h4>Prix: 3$</h4>
                <br></br>
                 <Link to='/Itineraire' style={{color: 'white',textDecoration:'none'}}><button className='mb-3' id='confirm'>Confirmer </button></Link>
               

              </div>
            </div>
            {/* restaurant 2 proposé*/}
            <div className='col-md-4 '>
              <div className='r1'>
                <img src={r1} alt='' className='mt-3  mx-auto d-block'></img>
                <h3 className='mt-3'>Geneva resto </h3>
                <h4>Prix: 8$</h4>
                <br></br>
                  <Link to='/Itineraire' style={{color: 'white',textDecoration:'none'}}><button className='mb-3' id='confirm'>Confirmer </button></Link>
              </div>      
            </div>
             {/* restaurant 2 proposé*/} 
            <div className='col-md-4'>
              <div className='r1'>
                <img src={r1} alt='' className='mt-3'></img>
                <h3 className='mt-3'>Mama Gourmet </h3>
                <h4>Prix: 5$</h4>
                <br></br>
                  <Link to='/Itineraire' style={{color: 'white',textDecoration:'none'}}><button className='mb-3' id='confirm'>Confirmer </button></Link>
              </div>      
            </div>

          </div>

        </div>


    </div>

    
  );
}

export default Resto;