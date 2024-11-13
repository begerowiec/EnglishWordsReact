// GameScreen.js
import React, { useState, useEffect, useRef } from 'react';
import wordsData from './data/words.json';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './GameScreen.css';

const GameScreen = ({ category, level }) => {
  const [score, setScore] = useState(0);
  const [usedWords, setUsedWords] = useState([]);
  const [currentWord, setCurrentWord] = useState(null);
  const [options, setOptions] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [showQuestion, setShowQuestion] = useState(false);

  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState('');

  const inputRef = useRef(null);
  const nextQuestionButtonRef = useRef(null);

  const words = wordsData.filter(word => word.category === category);

  useEffect(() => {
    getNextWord();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Ustawianie fokusu na polu input na poziomie 3
  useEffect(() => {
    if (level === 3 && showQuestion && inputRef.current) {
      inputRef.current.focus();
    }
  }, [level, showQuestion, currentWord]);

  // Ustawianie fokusu na przycisku "Następne pytanie" po niepoprawnej odpowiedzi
  useEffect(() => {
    if (showFeedback && !isCorrect && nextQuestionButtonRef.current) {
      nextQuestionButtonRef.current.focus();
    }
  }, [showFeedback, isCorrect]);

  const getNextWord = () => {
    if (usedWords.length === words.length) {
      // Gra zakończona
      setCurrentWord(null);
      return;
    }
    let word;
    do {
      word = words[Math.floor(Math.random() * words.length)];
    } while (usedWords.includes(word));

    setCurrentWord(word);
    setUsedWords([...usedWords, word]);

    if (level === 1 || level === 2) {
      generateOptions(word);
    }

    // Resetujemy odpowiedź użytkownika
    setUserInput('');
    setShowQuestion(true);
  };

  const generateOptions = (correctWord) => {
    let optionsArray = [];
    if (level === 1) {
      optionsArray = [correctWord.english];
      while (optionsArray.length < 3) {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        if (!optionsArray.includes(randomWord.english)) {
          optionsArray.push(randomWord.english);
        }
      }
    } else if (level === 2) {
      optionsArray = [correctWord.polish];
      while (optionsArray.length < 3) {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        if (!optionsArray.includes(randomWord.polish)) {
          optionsArray.push(randomWord.polish);
        }
      }
    }
    setOptions(shuffleArray(optionsArray));
  };

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleOptionClick = (option) => {
    let correct = false;
    if (level === 1 && option === currentWord.english) {
      correct = true;
    } else if (level === 2 && option === currentWord.polish) {
      correct = true;
    }

    setIsCorrect(correct);

    if (!correct) {
      // Przechowujemy poprawną odpowiedź
      const answer = level === 1 ? currentWord.english : currentWord.polish;
      setCorrectAnswer(answer);
    } else {
      setScore(score + 1);
    }

    // Wyświetlamy ekran z informacją zwrotną
    setShowFeedback(true);

    if (correct) {
      // Automatyczne przejście do kolejnego pytania po 1,5 sekundy
      setTimeout(() => {
        setShowFeedback(false);
        setShowQuestion(false);
        getNextWord();
      }, 1500);
    }
  };

  const handleSubmit = () => {
    const userAnswer = userInput.trim().toLowerCase();
    const correctAnswerText = currentWord.english.toLowerCase();

    const correct = userAnswer === correctAnswerText;
    setIsCorrect(correct);

    if (!correct) {
      setCorrectAnswer(currentWord.english);
    } else {
      setScore(score + 1);
    }

    // Wyświetlamy ekran z informacją zwrotną
    setShowFeedback(true);

    if (correct) {
      setTimeout(() => {
        setShowFeedback(false);
        setShowQuestion(false);
        getNextWord();
      }, 1500);
    }
  };

  if (!currentWord) {
    return (
      <div className="container mt-5 text-center">
        <h1>Gra zakończona!</h1>
        <p>Twój wynik: {score}/{words.length}</p>
        <button className="btn btn-primary" onClick={() => document.location.href="/"}>
          Zagraj ponownie
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h3>Wynik: {score}/{words.length}</h3>
      </div>
      {!showFeedback && (
        <TransitionGroup>
          {showQuestion && (
            <CSSTransition key={currentWord.polish} timeout={300} classNames="fade">
              <div className="card mx-auto" style={{ maxWidth: '500px' }}>
                <div className="card-body">
                  {level === 1 && (
                    <>
                      <h4 className="card-title mb-4">{currentWord.polish}</h4>
                      <div className="d-grid gap-2">
                        {options.map(option => (
                          <button
                            className="btn btn-outline-primary"
                            key={option}
                            onClick={() => handleOptionClick(option)}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                  {level === 2 && (
                    <>
                      <h4 className="card-title mb-4">{currentWord.english}</h4>
                      <div className="d-grid gap-2">
                        {options.map(option => (
                          <button
                            className="btn btn-outline-primary"
                            key={option}
                            onClick={() => handleOptionClick(option)}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                  {level === 3 && (
                    <>
                      <h4 className="card-title mb-4">{currentWord.polish}</h4>
                      <form onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit();
                      }}>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Wpisz tłumaczenie po angielsku"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            ref={inputRef}
                          />
                          <button type="submit" className="btn btn-primary">
                            Sprawdź
                          </button>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>
      )}
      {showFeedback && (
        <div className={`feedback-screen ${isCorrect ? 'correct' : 'incorrect'}`}>
          <div className="feedback-content">
            {isCorrect ? (
              <h1>Poprawna odpowiedź</h1>
            ) : (
              <>
                <h1>Niepoprawna odpowiedź</h1>
                <p>Poprawna odpowiedź: {correctAnswer}</p>
                <button
                  className="btn btn-light"
                  onClick={() => {
                    setShowFeedback(false);
                    setShowQuestion(false);
                    getNextWord();
                  }}
                  ref={nextQuestionButtonRef}
                >
                  Następne pytanie
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GameScreen;
