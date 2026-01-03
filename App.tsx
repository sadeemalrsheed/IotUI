
import React, { createContext, useContext, useState, ReactNode } from 'react';
import Dashboard from './components/Dashboard';
import { Language, TranslationStrings } from './types';
import { TRANSLATIONS } from './constants';

interface AppContextType {
  t: TranslationStrings;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('ar');

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  const value = {
    t: TRANSLATIONS[language],
    language,
    setLanguage: handleSetLanguage,
  };

  return (
    <AppContext.Provider value={value}>
      <Dashboard />
      
      {/* Simple Language Toggle for convenience */}
      <button 
        onClick={() => handleSetLanguage(language === 'ar' ? 'en' : 'ar')}
        className="fixed bottom-4 left-4 bg-white/80 backdrop-blur p-2 rounded-full shadow-lg z-50 text-xs font-bold"
      >
        {language === 'ar' ? 'EN' : 'AR'}
      </button>
    </AppContext.Provider>
  );
};

export default App;
