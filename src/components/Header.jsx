import { useSelector } from 'react-redux';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const { lang, toggleLanguage } = useLanguage();
  const { isDarkMode, toggleTheme } = useTheme();
  const hero = useSelector((state) => state.hero);

  return (
    <header className="w-full flex">
      {/* Sol 2/3 – Yeni mavi (#3B2A9F) */}
      <div className="w-2/3 bg-[#3B2A9F] dark:bg-[#0B0C42] dark:text-lime-200 flex items-center justify-between px-14 py-4">
        <h1 className="text-xl font-bold text-lime-200">{hero.name}</h1>
        <button
          onClick={toggleLanguage}
          className="px-0 py-1 rounded-full text-sm font-semibold text-lime-200"
        >
          {lang === 'en' ? "TÜRKÇE'YE GEÇ" : 'SWITCH TO EN'}
        </button>
      </div>

      {/* Sağ 1/3 – Hep Yeşil */}
      <div className="w-1/3 bg-lime-200 dark:bg-[#1D1D1D] pl-2 pr-8 py-4 flex items-center justify-start space-x-2">
        {/* Toggle */}
        <label className="relative inline-block w-12 h-6 ml-5">
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={toggleTheme}
            className="sr-only peer"
          />
          <span className="absolute inset-0 bg-white rounded-full transition-colors peer-checked:bg-purple-200"></span>
          <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-purple-400 rounded-full shadow transition-transform peer-checked:translate-x-6"></span>
        </label>

        {/* DARK MODE metni */}
        <span className="text-sm font-semibold text-[#3B2A9F] dark:text-white">
          DARK MODE
        </span>
      </div>
    </header>
  );
};

export default Header;
