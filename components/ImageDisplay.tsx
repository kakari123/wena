
import React from 'react';
import LoadingSpinner from './LoadingSpinner';
import { type LocaleStrings } from '../types';

interface ImageDisplayProps {
  isLoading: boolean;
  error: string | null;
  generatedImage: string | null;
  currentLocale: LocaleStrings;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ isLoading, error, generatedImage, currentLocale }) => {
  const renderContent = () => {
    if (isLoading) {
      return <LoadingSpinner />;
    }
    if (error) {
      return (
        <div className="text-center p-4 border-2 border-red-500/50 bg-red-900/20 rounded-lg">
          <h3 className="text-xl font-bold text-red-400">{currentLocale.errorPrefix}</h3>
          <p className="text-red-300 mt-2">{error}</p>
        </div>
      );
    }
    if (generatedImage) {
      return (
        <img
          src={`data:image/jpeg;base64,${generatedImage}`}
          alt="Generated pixel art"
          className="w-full h-auto max-w-full max-h-full object-contain rounded-lg shadow-2xl shadow-cyan-500/10 pixelated"
        />
      );
    }
    return (
      <div className="text-center text-gray-500">
        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gray-800 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <p>{currentLocale.initialMessage}</p>
      </div>
    );
  };

  return (
    <div className="w-full aspect-square bg-gray-900 border-2 border-dashed border-gray-700 rounded-xl flex items-center justify-center p-4 mt-8 transition-colors duration-300">
      {renderContent()}
    </div>
  );
};

export default ImageDisplay;
