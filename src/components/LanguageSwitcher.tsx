import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const languages = [
  { code: 'en-US', label: 'EN', flag: '🇺🇸', path: '/' },
  { code: 'pt-BR', label: 'PT', flag: '🇧🇷', path: '/pt' },
  { code: 'es', label: 'ES', flag: '🇪🇸', path: '/es' },
];

const LOCALE_PATHS = ['/', '/pt', '/es'];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: PointerEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('pointerdown', handleClickOutside);
    return () => document.removeEventListener('pointerdown', handleClickOutside);
  }, [isOpen]);

  const changeLanguage = (code: string, path: string) => {
    setIsOpen(false);
    // If on blog (EN-only for now) just switch the runtime locale and keep URL
    const onLandingRoute = LOCALE_PATHS.includes(location.pathname);
    if (onLandingRoute) {
      navigate(path + location.hash, { replace: false });
    } else {
      // Outside landing: switch language without leaving the page (blog stays EN)
      i18n.changeLanguage(code);
    }
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-gray-300 hover:border-gold hover:text-gold transition-colors text-sm font-medium text-gray-700 cursor-pointer"
        aria-label="Change language"
      >
        <span className="text-base leading-none">{currentLanguage.flag}</span>
        <span>{currentLanguage.label}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-1 min-w-[120px] z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code, lang.path)}
              className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors flex items-center gap-2 cursor-pointer ${
                currentLanguage.code === lang.code ? 'text-gold font-medium' : 'text-gray-700'
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
