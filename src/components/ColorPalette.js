// src/components/ColorPalette.js
import React from 'react';

const ColorPalette = ({ colors, onSelectColor }) => {
  return (
    <div>
      {colors.map((color) => (
        <button
          key={color}
          style={{ 
            backgroundColor: color, 
            border: '1px solid black', 
            width: 95, 
            height: 95, 
            margin: 5
          }}
          onClick={() => onSelectColor(color)}
        />
      ))}
    </div>
  );
};

export default ColorPalette;
