
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="w-16 h-16 border-4 border-dashed border-cyan-400 rounded-full animate-spin"></div>
      <p className="text-cyan-300 text-lg font-mono">Generating...</p>
    </div>
  );
};

export default LoadingSpinner;
