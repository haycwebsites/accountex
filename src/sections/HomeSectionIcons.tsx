type ServiceKind = 'strategy' | 'design' | 'code';
type CounterKind = 'startup' | 'creativity' | 'medal' | 'support';

const iconClass = 'h-10 w-10 text-slate-700';

export function HomeServiceIcon({ kind }: { kind: ServiceKind }) {
  switch (kind) {
    case 'strategy':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M4 19V5M4 19h16M4 19l4-6 4 3 4-8 4 5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'design':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M12 20h9M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L16.5 3.5z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M8 9h8M8 13h5M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

export function HomeCounterIcon({ kind }: { kind: CounterKind }) {
  const c = 'h-12 w-12 text-blue-900';
  switch (kind) {
    case 'startup':
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4" strokeLinecap="round" />
        </svg>
      );
    case 'creativity':
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
          <path d="M9 18h6M10 22h4M12 3a6 6 0 00-3 11c0 2 1 3 3 3s3-1 3-3a6 6 0 00-3-11z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'medal':
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
          <circle cx="12" cy="9" r="6" />
          <path d="M8.5 14L7 22l5-3 5 3-1.5-8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
          <path d="M4 5h16v10H4zM8 19h8M12 15v4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}
