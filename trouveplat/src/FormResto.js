import React from 'react';
import respo from './respo.jpg';
import dishlogo from './dishlogo.png';
import './Formresto.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function FormResto() {
  return (
    <div>
      {/* partie gauche page itinéraire*/}
      <div className='container-fluid mt-5'>
        <div className='row'>
          {/* partie gauche: texte + image en pixel*/}
          <div className='col-md-6'>
            <div className='cf'>
              <div className='headform'>
                <div className='bg-dark mb-4'>
                  <div className='mt-0'>
                    <img src={dishlogo} alt='logo' style={{ width: 50 }} className='mx-auto d-block mb-3' />
                  </div>
                </div>
                <form>
                  <input type='text' placeholder='nom' required />
                  <input type='email' placeholder='email' required />
                  <input type='number' placeholder='quantité' required className='mb-5' />
                  <a href='https://wa.me/237699202589' target='_blank' rel='noopener noreferrer'>
                    <button type='button' className='mb-5' style={{width: 150,height: 40}}>OK</button>
                  </a>
                </form>
              </div>
            </div>
          </div>
          {/* partie droite: texte + image en pixel*/}
          <div className='col-md-6'>
            <div className='c1'>
              <div id='gps' alt=''>
                <img src={respo} className='mt-3 mx-auto d-block' alt='' style={{ width: 500 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormResto;