// Caminho: src/pages/QuizPage.tsx

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './QuizPage.css';
import { archetypes } from '../features/quiz/data/archetypes';
import questions from '../features/quiz/data/questions';

const calculateResults = (userAnswers: number[]) => {
    const counts: { [key: string]: number; } = {};
    archetypes.forEach(arq => { counts[arq.nome] = 0; });

    userAnswers.forEach(answerIndex => {
        const archetype = archetypes.find(a => a.id === answerIndex + 1);
        if (archetype) { counts[archetype.nome]++; }
    });

    const total = userAnswers.length;
    return Object.entries(counts)
      .map(([nome, count]) => ({
        nome,
        percentage: total > 0 ? Math.round((count / total) * 100) : 0,
      }))
      .sort((a, b) => b.percentage - a.percentage);
};


const QuizPage: React.FC = () => {
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
    const [selectedAlternative, setSelectedAlternative] = useState<number | null>(null);
    const [typedQuestion, setTypedQuestion] = useState("");
    const [finalizing, setFinalizing] = useState(false);

    const fullQuestion = questions[currentQuestion].pergunta;
    const showAlternatives = typedQuestion === fullQuestion;

    useEffect(() => {
        setTypedQuestion("");
        setSelectedAlternative(answers[currentQuestion]);

        const timeouts: NodeJS.Timeout[] = [];
        fullQuestion.split("").forEach((char, i) => {
            const t = setTimeout(() => {
                setTypedQuestion(prev => prev + char);
            }, i * 50);
            timeouts.push(t);
        });
        return () => timeouts.forEach(clearTimeout);
    }, [currentQuestion, fullQuestion]);

    const handleAnswer = (alternativeIndex: number) => {
        setSelectedAlternative(alternativeIndex);
    };

    const handleNext = () => {
        if (selectedAlternative === null || finalizing) return;

        const newAnswers = [...answers];
        newAnswers[currentQuestion] = selectedAlternative;
        setAnswers(newAnswers);

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setFinalizing(true);
            const validAnswers = newAnswers.filter(a => a !== null) as number[];
            const ranked = calculateResults(validAnswers);
            const dominant = ranked[0] || { nome: 'Indefinido', percentage: 0 };
            const secondary = ranked.slice(1, 3);

            navigate("/resultado", { state: { dominant, secondary } });
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        } else {
            navigate('/info'); // Volta para a página de instruções
        }
    };

    const isLast = currentQuestion === questions.length - 1;

    return (
        <div className="quiz-container">
            <div className="pergunta-container">
                <div className="quiz-header">
                    <button className="back-to-home-button" onClick={handlePrevious} title="Voltar">
                        <ArrowLeft size={24} />
                    </button>
                </div>

                <h2 className="pergunta-titulo">{typedQuestion}</h2>
                <div className="barra-progresso-container">
                    <div
                        className="barra-progresso-pergunta"
                        style={{
                            width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                        }}
                    />
                </div>

                {showAlternatives && (
                    <div className="alternativas-container">
                        {questions[currentQuestion].alternativas.map((alt, idx) => (
                            <motion.button
                                key={idx}
                                className={`alternativa-botao ${selectedAlternative === idx ? "selecionada" : ""}`}
                                onClick={() => handleAnswer(idx)}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.4 }}
                            >
                                {alt}
                            </motion.button>
                        ))}
                    </div>
                )}

                <div className="navegacao">
                    {currentQuestion > 0 && (
                        <button className="botao-navegacao" onClick={handlePrevious}>
                            Voltar
                        </button>
                    )}
                    <button
                        className={`botao-navegacao selecionar ${currentQuestion === 0 ? 'full-width' : ''}`}
                        onClick={handleNext}
                        disabled={selectedAlternative === null || finalizing}
                    >
                        {isLast ? "Finalizar" : "Avançar"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuizPage;