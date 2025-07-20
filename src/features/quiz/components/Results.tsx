// Caminho: src/features/quiz/components/results/Results.tsx

import React, { useState } from 'react';
import { ChevronRight } from "lucide-react";
import ReactPlayer from 'react-player';
import { Card, CardContent } from '../../../components/Card/Card';
import Progress from '../../../components/Progress/Progress';
import { getArchetypeDescription } from '../../../utils/getArchetypeDescription';
import './Results.css';
import logo from '../../../assets/images/logo_ottoni.png';
import stopIcon from '../../../assets/images/stop-icon.png';

interface Archetype {
  nome: string;
  percentage: number;
}

interface ResultsProps {
  dominant: Archetype;
  secondary: Archetype[];
}

export default function Results({ dominant, secondary }: ResultsProps) {
  const [showOffer, setShowOffer] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const [played, setPlayed] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);

  const handleProgress = (state: { played: number }) => {
    setPlayed(state.played);
  };

  const handlePlayPause = () => {
    setIsPlaying(prev => !prev);
  };

  const handleVideoEnded = () => {
    setShowOffer(true);
    setIsPlaying(false);
  };

  const secondaryGridClass = `secondary-grid ${secondary.length === 1 ? "one-item" : ""}`;

  return (
    <div className='conteudo-results'>
      <div className="results-container">
        <div className="results-content">
          <div className="header">
            <img src={logo} alt='logo' />
            <h1 className="main-title">Parabéns milionária! Você acaba de dar um grande passo para desbloquear o seu potencial magnético!</h1>
            <p className="subtitle">Confira abaixo o resultado do seu teste.</p>
          </div>

          <Card className="primary-card">
            <CardContent className="primary-card-content">
              <div className="primary-card-layout">
                <div className="primary-info">
                  <h2 className="primary-heading">Seu Arquétipo Dominante</h2>
                  <div className="primary-title-container">
                    <h3 className="primary-title">{dominant.nome} - </h3>
                    <span className="primary-percentage">{dominant.percentage}%</span>
                  </div>
                  <Progress value={dominant.percentage} className="primary-progress" />
                  <p className="primary-traits">
                    <span className="traits-label">Características:</span> {getArchetypeDescription(dominant.nome)}
                  </p>
                </div>

                <div className="video-container">
                  <p className="video-caption">
                    Assista ao vídeo exclusivo onde revelamos mais segredos da sua jornada milionária!
                  </p>
                    <div className="video-wrapper">
                      <ReactPlayer
                        url="https://youtu.be/1ajqUh1MKR8" // <-- LINK NOVO
                          className="react-player"
                          playing={isPlaying}
                          controls={false} // Desativa os controles nativos do ReactPlayer
                          width="100%"
                          height="100%"
                          playbackRate={playbackRate}
                          onProgress={handleProgress}
                          onEnded={handleVideoEnded}
                          config={{
                              youtube: {
                                  playerVars: { 
                                      controls: 0,        // Remove os controles do YouTube (play, volume, etc.)
                                      showinfo: 0,        // Remove o título e informações do vídeo
                                      modestbranding: 1,  // Mostra o logo do YouTube de forma mais sutil
                                      rel: 0              // Não mostra vídeos relacionados no final
                                  }
                              }
                          }}
                      />
                    {/* Barra de progresso customizada */}
                    <div className="custom-progress-bar">
                      <div
                        className="custom-progress"
                        style={{ width: `${played * 100}%` }}
                      />
                    </div>
                    {showOverlay && (
                      <div className="vsl-overlay">
                        <div className="vsl-message">
                          <img src={stopIcon} alt="Stop" style={{width: 70, marginBottom: -20}} />
                          <p>
                            Esse vídeo nunca mais vai aparecer para você. Essa é sua <span className="highlight">única chance</span> de assistir até o final!
                          </p>
                          <button className="vsl-cta" onClick={() => { setShowOverlay(false); setIsPlaying(true); }}>
                            CLIQUE PARA CONTINUAR ASSISTINDO
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Controles abaixo do vídeo */}
                  <div className="custom-controls-container">
                    <div className="video-controls">
                      <button onClick={handlePlayPause} className="playpause-btn">
                        {isPlaying ? 'Pause' : 'Play'}
                      </button>
                      <div className="speed-control">
                        <button
                          className={playbackRate === 1 ? 'active' : ''}
                          onClick={() => setPlaybackRate(1)}
                        >1x</button>
                        <button
                          className={playbackRate === 1.5 ? 'active' : ''}
                          onClick={() => setPlaybackRate(1.5)}
                        >1.5x</button>
                        <button
                          className={playbackRate === 2 ? 'active' : ''}
                          onClick={() => setPlaybackRate(2)}
                        >2x</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* A OFERTA SÓ APARECE QUANDO O VÍDEO TERMINA */}
          {showOffer && (
            <>
              {secondary.length > 0 && (
                <>
                  <h2 className="section-title">Seus Arquétipos Secundários</h2>
                  <div className={secondaryGridClass}>
                    {secondary.map((arq, idx) => (
                      <Card className="secondary-card" key={idx}>
                        <CardContent className="secondary-card-content">
                          <div className="secondary-header">
                            <h3 className="secondary-title">{arq.nome}</h3>
                            <span className="secondary-percentage">{arq.percentage}%</span>
                          </div>
                          <Progress value={arq.percentage} className="secondary-progress" />
                          <p className="secondary-description">
                            {getArchetypeDescription(arq.nome)}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </>
              )}

              <div className="transformation-section">
                <h2 className="transformation-title">Continue a sua transformação!</h2>
                <p className="transformation-text">
                  Descubra mais sobre como potencializar seus arquétipos e o seu poder magnético através do nosso grupo exclusivo!
                </p>
                <p className="credentials-access">Para entrar, basta utilizar as seguintes credenciais: <br /> Login: seu email - Senha: ottoni123 </p>
                <button className="transformation-button">
                  Acessar Jornada Completa
                  <ChevronRight className="button-icon" />
                </button>
              </div>

              <div className="footer">
                <p>Desenvolvido por Code Inovações ©. <br /> Todos direitos reservados para Julia Ottoni© 2025</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}