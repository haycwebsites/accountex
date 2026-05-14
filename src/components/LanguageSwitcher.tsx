import { useHayc, type Locale } from '../hayc/config-context';

const LOCALES: { value: Locale; label: string }[] = [
  { value: 'el', label: 'EL' },
  { value: 'en', label: 'EN' },
];

type LanguageSwitcherProps = {
  /** Lighter chrome when sitting on the transparent header over the hero gradient */
  overHero?: boolean;
};

export function LanguageSwitcher({ overHero = false }: LanguageSwitcherProps) {
  const { locale, setLocale } = useHayc();

  const shell =
    overHero === true
      ? 'border border-slate-900/15 bg-white/35 shadow-sm backdrop-blur-sm'
      : 'border border-slate-900/10 bg-white/50 shadow-sm';

  return (
    <div
      className={`flex items-center gap-0.5 rounded-md p-0.5 ${shell}`}
      role="group"
      aria-label="Language"
    >
      {LOCALES.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          onClick={() => setLocale(value)}
          className={`min-w-[2.25rem] rounded px-2 py-1 text-xs font-bold tracking-wide transition ${
            locale === value
              ? 'bg-[#5956e9] text-white shadow-sm'
              : 'text-slate-800 hover:bg-white/60'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
