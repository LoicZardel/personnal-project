import React, { useState } from 'react';
import { database } from './firebase';
import { ref, push } from 'firebase/database';

function AjouterResto() {
  const [formData, setFormData] = useState({
    nom: '',
    adresse: '',
    lat: '',
    lng: '',
    plats: '',
    image: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      nom: formData.nom,
      adresse: formData.adresse,
      position: {
        lat: parseFloat(formData.lat),
        lng: parseFloat(formData.lng)
      },
      plats: formData.plats.split(',').map(p => p.trim().toLowerCase()),
      image: formData.image
    };

    try {
      await push(ref(database, 'restaurants'), data);
      alert("Restaurant ajouté !");
      setFormData({ nom: '', adresse: '', lat: '', lng: '', plats: '', image: '' });
    } catch (err) {
      alert("Erreur : " + err.message);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Ajouter un Restaurant (Realtime DB)</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} required />
        <input className="form-control mb-2" name="adresse" placeholder="Adresse" value={formData.adresse} onChange={handleChange} required />
        <input className="form-control mb-2" name="lat" placeholder="Latitude" value={formData.lat} onChange={handleChange} required />
        <input className="form-control mb-2" name="lng" placeholder="Longitude" value={formData.lng} onChange={handleChange} required />
        <input className="form-control mb-2" name="plats" placeholder="Plats (séparés par virgules)" value={formData.plats} onChange={handleChange} required />
        <input className="form-control mb-2" name="image" placeholder="Lien image" value={formData.image} onChange={handleChange} />
        <button className="btn btn-primary">Ajouter</button>
      </form>
    </div>
  );
}

export default AjouterResto;
