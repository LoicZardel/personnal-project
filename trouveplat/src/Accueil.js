import { useState } from 'react';
import './App.css';
import dishlogo from './dishlogo.png';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


function App() {
  const navigate = useNavigate();

  
  const [isSignupPopupOpen, setIsSignupPopupOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

  const handleOpenSignupPopup = () => {
    setIsSignupPopupOpen(true);
  };

  const handleCloseSignupPopup = () => {
    setIsSignupPopupOpen(false);
  };

  const handleOpenLoginPopup = () => {
    setIsLoginPopupOpen(true);
  };

  const handleCloseLoginPopup = () => {
    setIsLoginPopupOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='log mb-4'>
          <button className='login me-2' onClick={handleOpenSignupPopup}>
            Inscription
          </button>
          <button className='login' onClick={handleOpenLoginPopup}>
            Connexion
          </button>
        </div>

        <img src={dishlogo} className="App-logo mb-3" alt="logo" />

        <h1 style={{fontWeight:'bold'}} className='mb-4'>Bienvenue sur Trouve Ton plat</h1>
        <p style={{fontSize:18}} className='mb-4'>Trouvez vos plats où que vous soyez maintenant</p>

        <div className="search-container mb-4">
          <input style={{height:50}}
            type="text"
            placeholder="Que voulez-vous manger maintenant?"
            
            className="form-control me-2"
          />
          <Link to='/Resto' ><button className="btn btn-primary" id='search'>Rechercher</button></Link>
          <Link to='/Mescommande' ><button className="btn btn-primary ml-2" id='search' style={{backgroundColor:'#E84710',marginLeft:10}}>Mes Commande</button></Link>
        </div>

        {/* Popup d'inscription */}
        {isSignupPopupOpen && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={handleCloseSignupPopup}>&times;</span>
              <h3 className='titlelog'>Inscription</h3>
              <form autoComplete="off"  onSubmit={(e) => {
  e.preventDefault();

  const nom = e.target.nom.value;
  const telephone = e.target.telephone.value;
  const email = e.target.email.value;
  const motdepasse = e.target.motdepasse.value;

  fetch('http://127.0.0.1:8000/api/inscription/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nom,
      telephone,
      email,
      motdepasse
    })
  })
    .then(res => res.json())
    .then(data => {
      alert(data.message || "Inscription réussie !");
      handleCloseSignupPopup(); // Fermer le popup si besoin
    })
    .catch(err => {
      console.error(err);
      alert("Erreur lors de l'inscription.");
    });
}}>
  <input name="nom" type="text" placeholder="Nom" required className="form-control mb-2" />
  <input name="telephone" type="tel" placeholder="Téléphone" required className="form-control mb-2" />
  <input name="email" type="email" placeholder="Email" required className="form-control mb-2" />
  <input name="motdepasse" type="password" placeholder="Mot de passe" required className="form-control mb-2" />
  <button type="submit" className="btn btn-primary">S'inscrire</button>
</form>

            </div>
          </div>
        )}

        {/* Popup de connexion */}
        {isLoginPopupOpen && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={handleCloseLoginPopup}>&times;</span>
              <h3 className='titlelog'>Se connecter</h3>
              <form autoComplete="off"   onSubmit={(e) => {
  e.preventDefault();

  const email = e.target.email.value;
  const motdepasse = e.target.motdepasse.value;

  fetch('http://127.0.0.1:8000/api/connexion/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      motdepasse
    })
  })
    .then(res => res.json())
    .then(data => {
      if (data.message) {
        alert(data.message + " Bonjour " + data.nom);
handleCloseLoginPopup(); // Ferme le popup
navigate('/Resto');      // Redirection vers la page resto ✅

      } else {
        alert(data.error);
      }
    })
    .catch(err => {
      console.error(err);
      alert("Erreur de connexion.");
    });
}}>
  <input name="email" type="email" placeholder="Email" required className="form-control mb-4" />
  <input name="motdepasse" type="password" placeholder="Mot de passe" required className="form-control mb-3" />
  <button type="submit" className="btn btn-primary mb-3" style={{fontSize:16,width:100,borderRadius:5}}>Connexion</button>
</form>

            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;