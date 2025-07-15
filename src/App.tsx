// Caminho: projeto-tql-2/src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import InfoPage from './pages/InfoPage'; // NOVA
import QuizPage from './pages/QuizPage';
import ResultsPage from './pages/ResultsPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/resultado" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
};

export default App;