
import React from 'react';
import { type Language, type LocaleStrings } from '../types';
import LanguageSelector from './LanguageSelector';

interface HeaderProps {
  currentLocale: LocaleStrings;
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ currentLocale, currentLanguage, onLanguageChange }) => {
  return (
    <header className="w-full max-w-4xl mx-auto p-4 flex justify-between items-center text-white">
      <h1 className="text-2xl md:text-3xl font-bold text-cyan-400 tracking-wider" style={{ textShadow: '0 0 8px rgba(0, 255, 255, 0.7)' }}>
        {currentLocale.title}
      </h1>
      <LanguageSelector
        currentLanguage={currentLanguage}
        onLanguageChange={onLanguageChange}
      />
    </header>
  );
};

export default Header;
