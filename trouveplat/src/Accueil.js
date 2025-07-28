import { auth } from './firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import './App.css';
import dishlogo from './dishlogo.png';
import { useNavigate } from 'react-router-dom';
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isSignupPopupOpen, setIsSignupPopupOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleOpenSignupPopup = () => setIsSignupPopupOpen(true);
  const handleCloseSignupPopup = () => setIsSignupPopupOpen(false);
  const handleOpenLoginPopup = () => setIsLoginPopupOpen(true);
  const handleCloseLoginPopup = () => setIsLoginPopupOpen(false);

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        alert("Connecté avec Google : " + result.user.email);
        handleCloseLoginPopup();
      })
      .catch((error) => {
        alert("Erreur Google : " + error.message);
      });
  };

  const handleSearch = () => {
    const plat = document.querySelector("input[name='plat']").value;
    if (!user) {
      alert("Veuillez vous connecter pour rechercher un plat.");
    } else if (plat.trim() === "") {
      alert("Veuillez entrer un plat.");
    } else {
      navigate('/Resto', { state: { plat } });
    }
  };

  const handleCommandes = () => {
    if (!user) {
      alert("Veuillez vous connecter pour accéder à vos commandes.");
    } else {
      navigate('/Mescommande');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='log mb-4'>
          <button className='login me-2' onClick={handleOpenSignupPopup}>Inscription</button>
          <button className='login' onClick={handleOpenLoginPopup}>Connexion</button>
        </div>

        <img src={dishlogo} className="App-logo mb-3" alt="logo" />
        <h1 style={{ fontWeight: 'bold' }} className='mb-4'>Bienvenue sur Trouve Ton plat</h1>
        <p style={{ fontSize: 18 }} className='mb-4'>Trouvez vos plats où que vous soyez maintenant</p>

        <div className="search-container mb-4">
          <input
            name="plat"
            style={{ height: 50 }}
            type="text"
            placeholder="Que voulez-vous manger maintenant ?"
            className="form-control me-2"
          />
          <button className="btn btn-primary" id='search' onClick={handleSearch}>Rechercher</button>
          <button className="btn btn-primary ml-2" id='search' style={{ backgroundColor: '#E84710', marginLeft: 10 }} onClick={handleCommandes}>
            Mes Commande
          </button>
        </div>

        {/* Popup d'inscription */}
        {isSignupPopupOpen && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={handleCloseSignupPopup}>&times;</span>
              <h3 className='titlelog'>Inscription</h3>

              <form onSubmit={(e) => {
                e.preventDefault();
                const email = e.target.email.value;
                const motdepasse = e.target.motdepasse.value;

                createUserWithEmailAndPassword(auth, email, motdepasse)
                  .then(() => {
                    alert("Inscription réussie !");
                    handleCloseSignupPopup();
                  })
                  .catch((error) => {
                    alert("Erreur : " + error.message);
                  });
              }}>
                <input name="nom" type="text" placeholder="Nom" required className="form-control mb-2" />
                <input name="telephone" type="tel" placeholder="Téléphone" required className="form-control mb-2" />
                <input name="email" type="email" placeholder="Email" required className="form-control mb-2" />
                <div className="input-group mb-3">
                  <input
                    name="motdepasse"
                    type={showPassword ? "text" : "password"}
                    placeholder="Mot de passe"
                    required
                    className="form-control"
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex={-1}
                    style={{ border: 'none', height: 31 }}
                  >
                    {showPassword ? <IoEyeSharp /> : <FaEyeSlash />}
                  </button>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: 200 }}>S'inscrire</button>
                <hr className="my-1" />
                <button type="button" onClick={handleGoogleLogin} className="btn btn-light" id='google-login' style={{ width: 200, borderRadius: 5, border: '1px solid #ccc',display: 'none' }}>
                  Continuer avec Google <FcGoogle />
                </button>
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

              <form onSubmit={(e) => {
                e.preventDefault();
                const email = e.target.email.value;
                const motdepasse = e.target.motdepasse.value;

                signInWithEmailAndPassword(auth, email, motdepasse)
                  .then(() => {
                    alert("Connexion réussie !");
                    handleCloseLoginPopup();
                  })
                  .catch((error) => {
                    alert("Erreur : " + error.message);
                  });
              }}>
                <input name="email" type="email" placeholder="Email" required className="form-control mb-4" />
                <div className="input-group mb-3">
                  <input
                    name="motdepasse"
                    type={showPassword ? "text" : "password"}
                    placeholder="Mot de passe"
                    required
                    className="form-control"
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex={-1}
                    style={{ border: 'none', height: 31 }}
                  >
                    {showPassword ? <IoEyeSharp /> : <FaEyeSlash />}
                  </button>
                </div>
                <button type="submit" className="btn btn-primary mb-3" style={{ fontSize: 16, width: 100, borderRadius: 5 }}>Connexion</button>
                <hr className="my-1" />
              </form>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
