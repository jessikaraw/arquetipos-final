// Caminho: src/pages/LandingPage.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import logoJulia from '../assets/images/logo_ottoni.png'; 

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">

      <img src={logoJulia} alt="Julia Ottoni Academy" className="landing-logo" />
      
      <div className="landing-content">
        <h1 className="landing-title">
          Descubra os seus <br /> Arquétipos
        </h1>

        <p className="landing-subtitle">
          Sua jornada de magnetismo começa com uma escolha consciente.
        </p>

        <button
          className="landing-button"
          onClick={() => navigate('/info')}
        >
          PRÓXIMO PASSO
        </button>
      </div>
    </div>
  );
};

export default LandingPage;