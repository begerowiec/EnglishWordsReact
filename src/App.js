// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategorySelection from './CategorySelection';
import LevelSelection from './LevelSelection';
import GameScreen from './GameScreen';

function App() {
  const [category, setCategory] = useState('');
  const [level, setLevel] = useState(1);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CategorySelection setCategory={setCategory} />} />
        <Route path="/levels" element={<LevelSelection setLevel={setLevel} />} />
        <Route
          path="/game"
          element={<GameScreen category={category} level={level} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
