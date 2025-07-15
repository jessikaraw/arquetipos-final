// Caminho: src/pages/InfoPage.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react'; 
import './InfoPage.css';

const InfoPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="info-container">
      <div className="info-background-image" />
      <div className="info-overlay" />
      <motion.div
        className="info-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="info-header">
            <button 
              className="info-back-button" 
              onClick={() => navigate('/')} 
              title="Voltar para o início"
            >
                <ArrowLeft size={28} />
            </button>
        </div>

        <h1 className="info-title">Importante!</h1>
        <p className="info-text">
          Avalie cada opção e selecione aquela que mais reflete quem você é (não quem deseja ser). Lembre-se que um posicionamento que conecta reflete a sua personalidade e não a de um personagem engessado.
        </p>
        <p className="info-obs">
          <strong>OBS:</strong> Reflita sobre o seu eu da infância, sobre características que sempre estiveram com você e não sobre uma fase atual que está vivendo. Nossa missão aqui é trazer sua essência com estratégia.
        </p>
        <p className="info-ready">
          Está pronta para começar a sua jornada?
        </p>
        <button className="info-button" onClick={() => navigate('/quiz')}>
          Estou pronta!
        </button>
      </motion.div>
    </div>
  );
};

export default InfoPage;