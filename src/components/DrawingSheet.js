// src/components/DrawingSheet.js
import React from 'react';

const DrawingSheet = ({ sections, onFillColor }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {sections.map((section, index) => (
        <div
          key={index}
          style={{
            width: section.width,
            height: section.height,
            backgroundColor: section.color,
            border: '1px solid black',
            margin: 5,
            cursor: 'pointer',
          }}
          onClick={() => onFillColor(index)}
        />
      ))}
    </div>
  );
};

export default DrawingSheet;
