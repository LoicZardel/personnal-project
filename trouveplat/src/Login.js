import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    
  return (
    <div className="popup-content" style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
      <h3 className='text-center mb-4'>Inscrivez-vous</h3>
      <form>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Nom"
            required
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            placeholder="Email"
            required
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            placeholder="Mot de passe"
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-success w-100">
          S'inscrire
        </button>
      </form>
      <p className="mt-3 text-center" style={{ fontSize: '12px' }}>
        Vous acceptez nos termes et politiques
      </p>
      <button className="btn btn-link w-100" style={{ color: '#007bff' }}>
        Créer un compte
      </button>
    </div>
  );
}

export default Login;