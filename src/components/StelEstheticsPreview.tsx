import styles from "./StelEstheticsPreview.module.css";

function WebsitePreview({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className={`${styles.website} ${mobile ? styles.mobileWebsite : ""}`}>
      <div className={styles.siteHeader}>
        <span className={styles.siteBrand}>StelEsthetics</span>
        {mobile ? (
          <span className={styles.menu}>
            <i />
            <i />
            <i />
          </span>
        ) : (
          <div className={styles.siteNavigation}>
            <span>Home</span>
            <span>Services</span>
            <span>About</span>
            <span>Contact</span>
            <span className={styles.bookSmall}>Book</span>
          </div>
        )}
      </div>
      <div className={styles.siteHero}>
        <div className={styles.siteCopy}>
          <span className={styles.siteTitle}>StelEsthetics</span>
          <span className={styles.siteTagline}>
            Enhance Your Natural Beauty
          </span>
          <span className={styles.siteDescription}>
            Personalized skincare and aesthetic treatments in Los Angeles.
          </span>
          <span className={styles.bookButton}>Book Appointment</span>
        </div>
      </div>
    </div>
  );
}

export default function StelEstheticsPreview() {
  return (
    <div
      className={styles.preview}
      role="img"
      aria-label="StelEsthetics responsive website design displayed on a laptop and a mobile phone."
    >
      <div className={styles.devices} aria-hidden="true">
        <div className={styles.laptop}>
          <div className={styles.laptopLid}>
            <span className={styles.webcam} />
            <div className={styles.laptopScreen}>
              <WebsitePreview />
            </div>
          </div>
          <div className={styles.laptopHinge} />
          <div className={styles.laptopBase}>
            <span />
          </div>
        </div>
        <div className={styles.phone}>
          <div className={styles.phoneScreen}>
            <div className={styles.phoneStatus}>
              <span>9:41</span>
              <span className={styles.phoneSignals}>▮▮▮ ▰</span>
            </div>
            <WebsitePreview mobile />
          </div>
          <span className={styles.phoneNotch}>
            <i />
          </span>
          <span className={styles.phoneHome} />
        </div>
      </div>
    </div>
  );
}
