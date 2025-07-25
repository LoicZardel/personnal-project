import React from 'react';
import './Gps.css'
import go from './go.jpg'
import dishlogo from './dishlogo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import map from './map.jpg'
import { Link } from 'react-router-dom';

function Itineraire() {
  return (
    <div>
                <div>
                     {/* insertion du logo*/}
                        <header>
                            <img src={dishlogo} className='container-fluid mt-2' alt='' style={{width:80}} ></img>
                            <br></br>
                        </header>
                </div>

                {/* partie gauche page itinéraire*/}
                <div className='container-fluid mt-5'>
                    <div className='row'>
                        {/* partie gauche: texte + image en pixel*/}
                        <div className='col-md-6'>
                            <div className='c1'>
                                <h2 style={{color: '#E84710'}} className='text-center'>C’est partir pour trouver ton plat  !</h2>
                                <img src={go} className='mt-3  mx-auto d-block' alt=''  ></img>

                            </div>

                        </div>
                        {/* partie droite: texte + image en pixel*/}
                        <div className='col-md-6'>
                            <div className='c1'>
                                <h6 style={{color: '#E84710'}} className='text-center'>Nom du restaurant  !</h6>
                                <div id='gps' alt=''  >
                                    <img src={map} className='mt-3  mx-auto d-block' alt=''  ></img>
                                    <br></br>
                                    <Link to='/FormResto' style={{color: 'white',textDecoration:'none'}}><button id='now' className='text-center mt-3  mx-auto d-block'>Commander maintenant</button></Link>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>

                    

                    
    </div>
  );
}

export default Itineraire;