// LevelSelection.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LevelSelection.css';

const LevelSelection = ({ setLevel }) => {
  const navigate = useNavigate();

  const handleLevelClick = (level) => {
    setLevel(level);
    navigate('/game');
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Wybierz poziom trudności</h1>
      <div className="row justify-content-center">
        {[1, 2, 3].map(level => (
          <div className="col-md-3 mb-3" key={level}>
            <div className="card level-card" onClick={() => handleLevelClick(level)}>
              <div className="card-body text-center">
                <h5 className="card-title">Poziom {level}</h5>
                <p className="card-text">
                  {level === 1 && 'Łatwy'}
                  {level === 2 && 'Średni'}
                  {level === 3 && 'Trudny'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LevelSelection;
