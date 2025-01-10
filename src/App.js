import React, { useState } from 'react';
import './App.css';
import ColorPalette from './components/ColorPalette';
import DrawingSheet from './components/DrawingSheet';

const App = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [sections, setSections] = useState([
    { width: 261, height: 261, color: 'white' },
    { width: 261, height: 261, color: 'white' },
    { width: 261, height: 261, color: 'white' },
    { width: 261, height: 261, color: 'white' },
    { width: 261, height: 261, color: 'white' },

  ]);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleFillColor = (index) => {
    if (selectedColor) {
      const newSections = [...sections];
      newSections[index].color = selectedColor;
      setSections(newSections);
    }
  };

  return (
    <div>
      <h1>Coloring Game for ESPI</h1>
      <ColorPalette
        colors={['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'black', 'grey', 'orange', 'violet', 'turquoise', 'white', 'cyan']}
        onSelectColor={handleColorSelect}
      />
      <DrawingSheet sections={sections} onFillColor={handleFillColor} />
    </div>
  );
};

export default App;
