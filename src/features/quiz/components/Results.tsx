// Caminho: src/features/quiz/components/results/Results.tsx

import React, { useState } from 'react';
import { ChevronRight } from "lucide-react";
import ReactPlayer from 'react-player';
import { Card, CardContent } from '../../../components/Card/Card';
import Progress from '../../../components/Progress/Progress';
import { getArchetypeDescription } from '../../../utils/getArchetypeDescription';
import './Results.css';
import logo from '../../../assets/images/logo_preto.png';
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
  // Removendo os estados showOffer, showOverlay e playbackRate conforme o novo design
  const [played, setPlayed] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  // REMOVIDO: const [playbackRate, setPlaybackRate] = useState(1);

  const handleProgress = (state: { played: number }) => {
    setPlayed(state.played);
  };

  // REMOVIDO: handlePlayPause - não é mais necessário se não tiver botão de play/pause
  // const handlePlayPause = () => {
  //   setIsPlaying(prev => !prev);
  // };

  const handleVideoEnded = () => {
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

          <Card className="primary-card result-card-common"> {/* Adicionando classe comum aqui */}
            <CardContent className="primary-card-content">
              <div className="primary-card-layout">
                <div className="primary-info">
                  <h2 className="primary-heading">Seu Arquétipo Dominante</h2>
                  <div className="primary-title-container">  <h3 className="primary-title">{dominant.nome} -</h3>  <span className="primary-percentage">{dominant.percentage}%</span>
                  </div>
                  <Progress value={dominant.percentage} className="primary-progress" />
                  <p className="primary-traits"><span className="traits-label">Características:</span> {getArchetypeDescription(dominant.nome)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Arquétipos Secundários - SEMPRE visíveis */}
          {secondary.length > 0 && (
            <Card className="secondary-section-card result-card-common"> {/* Novo Card para os secundários */}
              <CardContent className="secondary-section-content">
                <h2 className="section-title">Seus Arquétipos Secundários</h2>
                <div className={secondaryGridClass}>
                  {secondary.map((arq, idx) => (
                    <Card className="secondary-card" key={idx}>
                      <CardContent className="secondary-card-content">
                        <div className="secondary-header"> <h3 className="secondary-title">{arq.nome}</h3> <span className="secondary-percentage">{arq.percentage}%</span>
                        </div>  <Progress value={arq.percentage} className="secondary-progress" />
                        <p className="secondary-description">Características: {getArchetypeDescription(arq.nome)}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Nova seção para "Próximos passos (muito importante!)" e vídeo */}
          <Card className="next-steps-card result-card-common"> {/* Novo Card para a seção de próximos passos */}
            <CardContent className="next-steps-content">
              <h2 className="section-title">Próximos passos <br /> (muito importante!)</h2> {/* Título da seção */}
              
              <div className="video-container"> {/* Container do vídeo movido para aqui */}
                <p className="video-caption">Assista ao vídeo exclusivo onde revelamos mais segredos da sua jornada milionária!</p>
                <div className="video-wrapper">
                  <ReactPlayer
                    url="https://youtu.be/1ajqUh1MKR8" // <-- LINK NOVO
                    className="react-player"
                    playing={isPlaying}
                    controls={false}
                    width="100%"
                    height="100%"
                    onProgress={handleProgress}
                    onEnded={handleVideoEnded}
                    config={{
                      youtube: {
                        playerVars: { 
                          controls: 0,
                          showinfo: 0,
                          modestbranding: 1,
                          rel: 0
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
                </div>
                {/* REMOVIDO: Controles abaixo do vídeo (botão Play/Pause e velocidade) */}
              </div>

              <div className="transformation-section"> {/* A seção de transformação também dentro deste card */}
                <h2 className="transformation-title">Continue a sua transformação!</h2>
                <p className="transformation-text">Descubra mais sobre como potencializar seus arquétipos e o seu poder magnético através do nosso grupo exclusivo!</p>
                <p className="credentials-access">Para entrar, basta utilizar as seguintes credenciais: <br /> Login: seu email - Senha: ottoni123 </p>
                <button className="transformation-button">    Acessar    </button>
              </div>
            </CardContent>
          </Card>

          <div className="footer">
            <p>Desenvolvido por Code Inovações ©. <br /> Todos direitos reservados para Julia Ottoni© 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}