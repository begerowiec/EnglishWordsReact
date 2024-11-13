// CategorySelection.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import wordsData from './data/words.json';
import './CategorySelection.css';

const CategorySelection = ({ setCategory }) => {
  const navigate = useNavigate();
  const categories = [...new Set(wordsData.map(word => word.category))];

  const handleCategoryClick = (category) => {
    setCategory(category);
    navigate('/levels');
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Wybierz kategorię</h1>
      <div className="row">
        {categories.map(category => (
          <div className="col-md-4 mb-3" key={category}>
            <div className="card category-card" onClick={() => handleCategoryClick(category)}>
              <div className="card-body text-center">
                <h5 className="card-title">{category}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySelection;
