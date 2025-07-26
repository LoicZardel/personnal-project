import React, { useEffect, useState } from 'react';
import './Gps.css';
import go from './go.jpg';
import dishlogo from './dishlogo.png';
import { Link, useLocation } from 'react-router-dom';
import { GoogleMap, Marker, DirectionsRenderer, useLoadScript } from '@react-google-maps/api';

// ✅ Déclaration du tableau de bibliothèques EN DEHORS du composant
const libraries = ['places'];

function Itineraire() {
  const location = useLocation();
  const { nom, lat, lng } = location.state || {};
  const [userPosition, setUserPosition] = useState(null);
  const [directions, setDirections] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCZAq1dYx_aJeJ19vs1zSYMNXo2yuruxCo', // ← remplace par ta clé réelle
    libraries, // ✅ On passe la constante ici
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setUserPosition(pos);

        if (lat && lng) {
          const directionsService = new window.google.maps.DirectionsService();
          directionsService.route(
            {
              origin: pos,
              destination: { lat, lng },
              travelMode: window.google.maps.TravelMode.DRIVING,
            },
            (result, status) => {
              if (status === window.google.maps.DirectionsStatus.OK) {
                setDirections(result);
              } else {
                alert("Erreur d’itinéraire : " + status);
              }
            }
          );
        }
      },
      (error) => {
        alert("Erreur géolocalisation : " + error.message);
      }
    );
  }, [lat, lng]);

  return (
    <div>
      <header>
        <img src={dishlogo} className='container-fluid mt-2' alt='' style={{ width: 80 }} />
        <br />
      </header>

      <div className='container-fluid mt-5'>
        <div className='row'>
          {/* Partie gauche */}
          <div className='col-md-6'>
            <div className='c1'>
              <h2 style={{ color: '#E84710' }} className='text-center'>
                C’est parti pour trouver ton plat !
              </h2>
              <img src={go} className='mt-3  mx-auto d-block' alt='' />
            </div>
          </div>

          {/* Partie droite */}
          <div className='col-md-6'>
            <div className='c1'>
              <h6 style={{ color: '#E84710' }} className='text-center'>
                Itinéraire vers <strong>{nom || "le restaurant sélectionné"}</strong>
              </h6>

              <div id='gps' style={{ height: 400, width: '100%' }}>
                {!isLoaded ? (
                  <p className='text-center text-warning'>Chargement de la carte...</p>
                ) : userPosition && directions ? (
                  <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    zoom={13}
                    center={userPosition}
                  >
                    <Marker position={userPosition} label='Vous' />
                    <Marker position={{ lat, lng }} label='Resto' />
                    <DirectionsRenderer directions={directions} />
                  </GoogleMap>
                ) : (
                  <p className='text-center text-warning'>Recherche de l’itinéraire...</p>
                )}
              </div>

              <br />
              <Link to='/FormResto' style={{ color: 'white', textDecoration: 'none' }}>
                <button id='now' className='text-center mt-3 mx-auto d-block'>
                  Commander maintenant
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Itineraire;
