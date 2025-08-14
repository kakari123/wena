
import React, { useState, useCallback } from 'react';
import { Language } from './types';
import { locales } from './constants/locales';
import { generatePixelArt } from './services/geminiService';
import Header from './components/Header';
import PromptForm from './components/PromptForm';
import ImageDisplay from './components/ImageDisplay';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>(Language.EN);
  const [prompt, setPrompt] = useState<string>('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const currentLocale = locales[language];

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    document.documentElement.lang = lang;
    document.body.dir = lang === Language.KU ? 'rtl' : 'ltr';
  };

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const imageBytes = await generatePixelArt(prompt);
      setGeneratedImage(imageBytes);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  }, [prompt]);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans flex flex-col items-center p-4">
      <Header 
        currentLocale={currentLocale}
        currentLanguage={language}
        onLanguageChange={handleLanguageChange}
      />
      <main className="w-full max-w-4xl flex flex-col lg:flex-row gap-8 mt-6" dir={language === Language.KU ? 'rtl' : 'ltr'}>
        <div className="lg:w-1/2 flex flex-col">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 backdrop-blur-sm">
            <PromptForm
              prompt={prompt}
              onPromptChange={setPrompt}
              onSubmit={handleSubmit}
              isLoading={isLoading}
              currentLocale={currentLocale}
            />
          </div>
        </div>
        <div className="lg:w-1/2 flex items-center justify-center">
          <ImageDisplay
            isLoading={isLoading}
            error={error}
            generatedImage={generatedImage}
            currentLocale={currentLocale}
          />
        </div>
      </main>
      <footer className="w-full max-w-4xl mx-auto p-4 mt-8 text-center text-gray-500 text-sm">
        Powered by Google Imagen 2 & Gemini API
      </footer>
    </div>
  );
};

export default App;
