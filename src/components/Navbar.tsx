import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useHayc } from '../hayc/config-context';
import { AppLink } from './AppLink';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTemplateInit } from '../lib/useTemplateInit';

function hasWordPressLoggedInCookie(): boolean {
  if (typeof document === 'undefined') return false;
  return document.cookie.split(';').some((c) =>
    c.trim().startsWith('wordpress_logged_in_')
  );
}

export default function Navbar() {
  useTemplateInit();
  const { t, img, config, cp } = useHayc();
  const h = config.headerConfig;
  const location = useLocation();
  const [desktopOpen, setDesktopOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [wpLoggedIn, setWpLoggedIn] = useState(false);
  const [headerSolid, setHeaderSolid] = useState(false);

  const refreshAuth = useCallback(() => {
    if (!h.detectLoginViaWpCookie) {
      setWpLoggedIn(false);
      return;
    }
    setWpLoggedIn(hasWordPressLoggedInCookie());
  }, [h.detectLoginViaWpCookie]);

  useEffect(() => {
    refreshAuth();
  }, [refreshAuth, location.pathname]);

  useEffect(() => {
    setDesktopOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!desktopOpen && !mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDesktopOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [desktopOpen, mobileOpen]);

  useEffect(() => {
    if (!desktopOpen && !mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [desktopOpen, mobileOpen]);

  useEffect(() => {
    const threshold = 12;
    const onScroll = () => {
      setHeaderSolid(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  const logoSrc = img(h.brandLogoImage);
  const dotSrc = img(h.panelDotButtonImage);

  return (
    <>
      {/* Do not use pixlab `transparent-header` here — it sets position:absolute and overrides fixed. */}
      <header
        className="theme-header hayc-site-header fixed left-0 right-0 top-0 z-[1000] w-full"
      >
        <div
          className={`header-navigation navigation-style-v1 ${
            headerSolid ? 'hayc-header-bar--scrolled' : 'hayc-header-bar--at-top'
          }`}
        >
          <div className="container-fluid w-full max-w-[100%] px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="site-branding shrink-0">
                <AppLink href="/" className="brand-logo inline-block">
                  <img
                    src={logoSrc}
                    alt={t(h.brandLogoAlt)}
                    className="img-fluid h-[75px] w-auto max-w-none"
                    {...cp('headerConfig.brandLogoImage')}
                  />
                </AppLink>
              </div>

              <div className="hidden flex-1 justify-center md:flex">
                <nav className="main-menu">
                  <ul className="nav m-0 flex list-none flex-row flex-wrap p-0">
                    {h.navLinks.map((item, i) => (
                      <li key={item.href} className="nav-item">
                        <AppLink
                          href={item.href}
                          className="nav-link block px-3 py-2 text-slate-800 no-underline transition hover:text-[#5956e9]"
                          {...cp(`headerConfig.navLinks.${i}.label`)}
                        >
                          {t(item.label)}
                        </AppLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="hidden shrink-0 items-center gap-3 md:flex">
                <LanguageSwitcher overHero={!headerSolid} />
                <div className="flex items-center gap-2">
                  {wpLoggedIn ? (
                    <>
                      <a
                        href={h.coursesUrl}
                        className="inline-flex items-center justify-center rounded-md bg-[#5956e9] px-4 py-2 text-sm font-semibold capitalize text-white shadow-sm no-underline transition hover:bg-[#4845d4]"
                        {...cp('headerConfig.coursesLabel')}
                      >
                        {t(h.coursesLabel)}
                      </a>
                      <a
                        href={h.logoutUrl}
                        className="inline-flex items-center justify-center rounded-md bg-[#5956e9] px-4 py-2 text-sm font-semibold capitalize text-white shadow-sm no-underline transition hover:bg-[#4845d4]"
                        {...cp('headerConfig.logoutLabel')}
                      >
                        {t(h.logoutLabel)}
                      </a>
                    </>
                  ) : (
                    <a
                      href={h.loginUrl}
                      className="inline-flex items-center justify-center rounded-md bg-[#5956e9] px-4 py-2 text-sm font-semibold capitalize text-white shadow-sm no-underline transition hover:bg-[#4845d4]"
                      {...cp('headerConfig.loginLabel')}
                    >
                      {t(h.loginLabel)}
                    </a>
                  )}
                </div>

                <div className="ms-0 md:ms-1">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md border-0 bg-[#5956e9] px-3 py-2 text-white shadow-sm transition hover:bg-[#4845d4]"
                    aria-controls="offcanvasPanel"
                    aria-expanded={desktopOpen}
                    onClick={() => {
                      setDesktopOpen(true);
                      setMobileOpen(false);
                    }}
                  >
                    <img src={dotSrc} alt="" className="h-8 w-8 object-contain" />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 md:hidden">
                <LanguageSwitcher overHero={!headerSolid} />
                <button
                  type="button"
                  className="rounded-md bg-[#5956e9] px-3 py-2 text-lg text-white shadow-sm transition hover:bg-[#4845d4]"
                  aria-controls="mobileMenu"
                  aria-expanded={mobileOpen}
                  aria-label={t(h.mobileMenuOpenLabel)}
                  onClick={() => {
                    setMobileOpen(true);
                    setDesktopOpen(false);
                  }}
                >
                  ☰
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {desktopOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-[1040] cursor-default border-0 bg-black/45 p-0"
          aria-label={t(h.mobileMenuCloseLabel)}
          onClick={() => setDesktopOpen(false)}
        />
      ) : null}

      <div
        id="offcanvasPanel"
        className={`offcanvas offcanvas-end fixed right-0 top-0 z-[1050] flex h-[100dvh] w-full max-w-md flex-col border-0 bg-white shadow-2xl transition-transform duration-300 ease-out ${
          desktopOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
        aria-hidden={!desktopOpen}
        tabIndex={-1}
      >
        <div className="offcanvas-body flex flex-1 flex-col overflow-y-auto p-6">
          <div className="mb-4 flex justify-end">
            <button
              type="button"
              className="rounded border-0 bg-transparent px-2 py-1 text-2xl leading-none text-slate-600 hover:text-slate-900"
              aria-label={t(h.mobileMenuCloseLabel)}
              onClick={() => setDesktopOpen(false)}
            >
              ×
            </button>
          </div>
          <div className="panel-logo mb-4 text-center">
            <AppLink href="/" onClick={() => setDesktopOpen(false)}>
              <img src={logoSrc} alt="" className="img-fluid mx-auto max-h-24 w-auto" />
            </AppLink>
          </div>

          <div className="about-us mb-4">
            <h5 className="mb-2 text-lg font-semibold" {...cp('headerConfig.panelAboutTitle')}>
              {t(h.panelAboutTitle)}
            </h5>
            <p className="text-slate-600" {...cp('headerConfig.panelAboutBody')}>
              {t(h.panelAboutBody)}
            </p>
          </div>

          <div className="contact-us">
            <h5 className="mb-2 text-lg font-semibold" {...cp('headerConfig.panelContactTitle')}>
              {t(h.panelContactTitle)}
            </h5>
            <ul className="m-0 list-none p-0">
              <li>
                <a
                  href={`mailto:${h.panelContactEmail}`}
                  className="text-[#5956e9] no-underline hover:underline"
                  {...cp('headerConfig.panelContactEmail')}
                >
                  {h.panelContactEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {mobileOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-[1040] cursor-default border-0 bg-black/45 p-0 md:hidden"
          aria-label={t(h.mobileMenuCloseLabel)}
          onClick={() => setMobileOpen(false)}
        />
      ) : null}

      <div
        id="mobileMenu"
        className={`offcanvas offcanvas-start fixed left-0 top-0 z-[1050] flex h-[100dvh] w-full max-w-sm flex-col border-0 bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full pointer-events-none'
        }`}
        aria-hidden={!mobileOpen}
        tabIndex={-1}
      >
        <div className="offcanvas-body flex flex-1 flex-col overflow-y-auto p-0">
          <div className="flex justify-end p-3">
            <button
              type="button"
              className="rounded border-0 bg-transparent px-2 py-1 text-2xl leading-none text-slate-600 hover:text-slate-900"
              aria-label={t(h.mobileMenuCloseLabel)}
              onClick={() => setMobileOpen(false)}
            >
              ×
            </button>
          </div>

          <div className="mb-4 text-center">
            <AppLink href="/" onClick={() => setMobileOpen(false)}>
              <img
                src={logoSrc}
                alt=""
                className="img-fluid mx-auto max-w-[150px]"
              />
            </AppLink>
          </div>

          <div className="mb-4 flex justify-center px-4">
            <LanguageSwitcher overHero={false} />
          </div>

          <nav className="flex-1 px-4 pb-8">
            <ul className="m-0 list-none p-0 text-center">
              {h.navLinks.map((item, i) => (
                <li key={item.href} className="mb-3">
                  <AppLink
                    href={item.href}
                    className="nav-link block py-2 text-xl text-slate-800 no-underline hover:text-[#5956e9]"
                    onClick={() => setMobileOpen(false)}
                    {...cp(`headerConfig.navLinks.${i}.label`)}
                  >
                    {t(item.label)}
                  </AppLink>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col items-center gap-3 border-t border-slate-200 pt-6">
              {wpLoggedIn ? (
                <>
                  <a
                    href={h.coursesUrl}
                    className="w-full max-w-xs rounded-md bg-[#5956e9] py-2 text-center text-sm font-semibold text-white no-underline transition hover:bg-[#4845d4]"
                    onClick={() => setMobileOpen(false)}
                    {...cp('headerConfig.coursesLabel')}
                  >
                    {t(h.coursesLabel)}
                  </a>
                  <a
                    href={h.logoutUrl}
                    className="w-full max-w-xs rounded-md bg-[#5956e9] py-2 text-center text-sm font-semibold text-white no-underline transition hover:bg-[#4845d4]"
                    onClick={() => setMobileOpen(false)}
                    {...cp('headerConfig.logoutLabel')}
                  >
                    {t(h.logoutLabel)}
                  </a>
                </>
              ) : (
                <a
                  href={h.loginUrl}
                  className="w-full max-w-xs rounded-md bg-[#5956e9] py-2 text-center text-sm font-semibold text-white no-underline transition hover:bg-[#4845d4]"
                  onClick={() => setMobileOpen(false)}
                  {...cp('headerConfig.loginLabel')}
                >
                  {t(h.loginLabel)}
                </a>
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
