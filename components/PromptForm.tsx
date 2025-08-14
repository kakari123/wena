
import React from 'react';
import { type LocaleStrings } from '../types';

interface PromptFormProps {
  prompt: string;
  onPromptChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
  currentLocale: LocaleStrings;
}

const PromptForm: React.FC<PromptFormProps> = ({ prompt, onPromptChange, onSubmit, isLoading, currentLocale }) => {
  return (
    <form onSubmit={onSubmit} className="w-full space-y-4">
      <label htmlFor="prompt-input" className="block text-lg font-medium text-gray-300">
        {currentLocale.promptLabel}
      </label>
      <textarea
        id="prompt-input"
        value={prompt}
        onChange={(e) => onPromptChange(e.target.value)}
        placeholder={currentLocale.placeholder}
        className="w-full p-3 bg-gray-800 border-2 border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-shadow duration-200"
        rows={3}
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 px-4 bg-cyan-600 hover:bg-cyan-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-600/20 disabled:shadow-none"
      >
        {isLoading ? currentLocale.generatingText : currentLocale.buttonText}
      </button>
    </form>
  );
};

export default PromptForm;
