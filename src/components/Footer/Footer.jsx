import styles from './Footer.module.css';
import brand from '../../data/brand.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const copyright = brand.copyrightTemplate.replace('{year}', currentYear);

  return (
    <footer className={styles.footer} id="site-footer" role="contentinfo">
      <div className={styles.footerInner}>
        <span className={styles.footerBrand}>{brand.name}</span>
        <span className={styles.footerTagline}>{brand.tagline}</span>

        <div className={styles.footerSocial}>
          {brand.socialLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              {link.text}
            </a>
          ))}
        </div>

        <p className={styles.footerQuote}>
          "{brand.quote}"
        </p>

        <span className={styles.footerCopyright}>
          {copyright}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
