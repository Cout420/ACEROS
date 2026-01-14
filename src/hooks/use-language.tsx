
'use client';

import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useMemo,
} from 'react';
import pt from '@/lib/i18n/pt.json';
import en from '@/lib/i18n/en.json';
import es from '@/lib/i18n/es.json';
import de from '@/lib/i18n/de.json';
import it from '@/lib/i18n/it.json';

const translations = { pt, en, es, de, it };

type Language = keyof typeof translations;

type Translations = typeof pt;

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  const t = useMemo(() => translations[language], [language]);

  const value = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
