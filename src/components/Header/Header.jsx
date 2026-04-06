import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import brand from '../../data/brand.json';
import navigation from '../../data/navigation.json';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        id="site-header"
        className={`${styles.header} ${scrolled ? styles['header--scrolled'] : ''}`}
        role="banner"
      >
        <div className={styles.headerInner}>
          <Link to="/" className={styles.brand} aria-label={`${brand.name} Home`}>
            <img src={brand.logo} alt={brand.logoAlt} className={styles.brandIcon} />
            <div className={styles.brandText}>
              <span className={styles.brandName}>{brand.name}</span>
              <span className={styles.brandTagline}>{brand.tagline}</span>
            </div>
          </Link>

          <nav className={styles.navLinks} aria-label="Main navigation">
            {navigation.links.map((link) => (
              <button
                key={link.label}
                className={`${styles.navLink} ${link.active ? styles['navLink--active'] : ''}`}
              >
                {link.label}
              </button>
            ))}
            <button className={styles.navCta}>{navigation.cta.label}</button>
          </nav>

          <button
            className={`${styles.menuBtn} ${mobileOpen ? styles['menuBtn--open'] : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            id="mobile-menu-btn"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <nav
        className={`${styles.mobileNav} ${mobileOpen ? styles['mobileNav--open'] : ''}`}
        aria-label="Mobile navigation"
        role="navigation"
      >
        {navigation.links.map((link) => (
          <button
            key={link.label}
            className={styles.mobileNavLink}
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </button>
        ))}
        <button className={styles.mobileNavCta} onClick={() => setMobileOpen(false)}>
          {navigation.cta.label}
        </button>
      </nav>
    </>
  );
};

export default Header;
