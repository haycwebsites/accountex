export function ContactEnvelopeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M4 6h16v12H4z" strokeLinejoin="round" />
      <path d="M4 7l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ContactPhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path
        d="M6.5 4h3l1.5 4-2 1.2c.8 1.6 2.2 3 3.8 3.8L15 11l4 1.5v3a2 2 0 01-2.2 2c-4.2-.6-8.2-4.6-8.8-8.8A2 2 0 016.5 4z"
        strokeLinejoin="round"
      />
    </svg>
  );
}
