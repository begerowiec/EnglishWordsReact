// App.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CategorySelection from './CategorySelection';
import LevelSelection from './LevelSelection';
import GameScreen from './GameScreen';
import Navbar from './Navbar'; // Importuj Navbar

function App() {
  const [category, setCategory] = useState('');
  const [level, setLevel] = useState(1);

  return (
    <>
      <Navbar /> {/* Dodaj Navbar tutaj */}
      <Routes>
        <Route path="/" element={<CategorySelection setCategory={setCategory} />} />
        <Route path="/levels" element={<LevelSelection setLevel={setLevel} />} />
        <Route
          path="/game"
          element={<GameScreen category={category} level={level} />}
        />
      </Routes>
    </>
  );
}

export default App;
