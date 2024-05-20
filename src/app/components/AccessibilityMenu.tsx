'use client'

import React, { useState } from 'react';
import './AccessibilityMenu.css';

type ColorblindMode = 'protanomaly' | 'deuteranomaly' | null;

const AccessibilityMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [colorblindMode, setColorblindMode] = useState<ColorblindMode>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleColorblindModeChange = (mode: ColorblindMode) => {
    setColorblindMode(mode);
    setIsOpen(false);
  };

  const getColorblindBackground = () => {
    switch (colorblindMode) {
      case 'protanomaly':
        return 'rgba(255, 0, 0, 0.1)';
      case 'deuteranomaly':
        return 'rgba(0, 255, 0, 0.1)';
      default:
        return 'none';
    }
  };

  return (
    <div>
      <button
        className="accessibility-icon"
        onClick={toggleMenu}
        aria-label="Accessibility Menu"
      >
        {/* Ícone redondo */}
      </button>

      {isOpen && (
        <div className="accessibility-menu">
          <button onClick={() => handleColorblindModeChange('protanomaly')}>
            Protanomalia
          </button>
          <button onClick={() => handleColorblindModeChange('deuteranomaly')}>
            Deuteranomalia
          </button>
          <button onClick={() => handleColorblindModeChange(null)}>
            Desativar
          </button>
        </div>
      )}

      {colorblindMode && (
        <div
          className="colorblind-background"
          style={{ backgroundColor: getColorblindBackground() }}
        />
      )}
    </div>
  );
};

export default AccessibilityMenu;