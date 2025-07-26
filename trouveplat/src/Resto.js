import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ref, onValue } from 'firebase/database';
import { database } from './firebase';
import './Resto.css';
import dishlogo from './dishlogo.png';
import loupe from './loupe.png';
import r1 from './r1.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Resto() {
  const location = useLocation();
  const platRecherche = location.state?.plat?.toLowerCase() || '';
  const [position, setPosition] = useState(null);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        });
      },
      (err) => {
        alert("Erreur de géolocalisation : " + err.message);
      }
    );
  }, []);

  useEffect(() => {
    if (!position || !platRecherche) return;

    const restoRef = ref(database, 'restaurants');
    onValue(restoRef, (snapshot) => {
      const data = snapshot.val();
      const liste = [];

      for (let key in data) {
        const resto = data[key];
        const plats = resto.plats.map(p => p.toLowerCase());

        if (plats.includes(platRecherche)) {
          const dist = getDistance(
            position.lat,
            position.lng,
            resto.position.lat,
            resto.position.lng
          );

          liste.push({
            nom: resto.nom,
            adresse: resto.adresse,
            image: resto.image || r1,
            distance: dist,
            prix: `${(Math.random() * 10 + 5).toFixed(2)} $`
          });
        }
      }

      liste.sort((a, b) => a.distance - b.distance);
      setRestaurants(liste.slice(0, 3));
    });
  }, [position, platRecherche]);

  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return +(R * c).toFixed(2);
  };

  const toRad = (x) => (x * Math.PI) / 180;

  return (
    <div id='#head'>
      <div className='row bg-dark'>
        <img src={dishlogo} alt='logo' className='mx-auto d-block mt-3 mb-4 col-md-3 col-sm-12' id='logo' />
        <h1 className='col-md-9 text-light mt-3 text-center'>
          Choisissez Maintenant La Destination De Votre Choix
        </h1>
      </div>

      <div className='row'>
        <img src={loupe} alt='' id='loupe' className='mx-auto d-block col-md-1 ml-5'></img>
        <span id='b' className='col-md-10'>
          Nous avons trouvé votre plat <strong>{platRecherche}</strong> parmi ces destinations à proximité
        </span>
        <p className='text-center'>Veuillez choisir l’une des destinations ci-dessous</p>
      </div>

      <div className='container'>
        <div className='row'>
          {restaurants.length === 0 ? (
            <p className="text-center">Chargement ou aucun restaurant trouvé...</p>
          ) : (
            restaurants.map((r, index) => (
              <div className='col-md-4' key={index}>
                <div className='r1 text-center'>
                  <img src={r.image} alt={r.nom} className='mt-3 mx-auto d-block' />
                  <h3 className='mt-3'>{r.nom}</h3>
                  <p>{r.adresse}</p>
                  <p>Prix : {r.prix}</p>
                  <p>Distance : {r.distance} km</p>
                  <Link to='/Itineraire'>
                    <button id='confirm' className='btn btn-success mb-3'>Confirmer</button>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Resto;
