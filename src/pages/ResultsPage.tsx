import React from 'react';
import { useLocation } from 'react-router-dom';
import Results from '../features/quiz/components/Results'; 

  const ResultsPage: React.FC = () => {
  const location = useLocation();
  const { dominant, secondary } = location.state || { dominant: null, secondary: [] };

  if (!dominant) {
    return <div>Erro: Nenhum resultado encontrado. Por favor, refaça o teste.</div>;
  }

  return <Results dominant={dominant} secondary={secondary} />;
};

export default ResultsPage;