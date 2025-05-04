import { createContext, useContext, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { data } from '../data/data';
import { setHero } from '../store/actions/heroActions';
import { setSkills } from '../store/actions/skillsActions';
import { setProjects } from '../store/actions/projectsActions';
import { setContact } from '../store/actions/contactActions';
import { setProfile } from '../store/actions/profileActions';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en');

  const updateReduxData = (langKey) => {
    dispatch(setHero(data[langKey].heroSection));
    dispatch(setSkills(data[langKey].skillsSection));
    dispatch(setProjects(data[langKey].projectsSection));
    dispatch(setContact(data[langKey].contactSection));
    dispatch(setProfile(data[langKey].profileSection));
  };

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'tr' : 'en';
    setLang(newLang);
    localStorage.setItem('lang', newLang);
    updateReduxData(newLang);
  };

  useEffect(() => {
    updateReduxData(lang);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
