import FormFAQ from "./FormFAQ";
import styles from "./FooterSocialLinks.module.css";

const FooterSocialLinks = () => {
  return (
    <section className={styles.footerSocialLinks}>
      <div className={styles.footerSocialLinksChild} />
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.h2Parent}>
            <h1 className={styles.h2}>Intuitive interface</h1>
            <h3 className={styles.body}>
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes, one task at a time.
            </h3>
          </div>
        </div>
        <div className={styles.wrapperAppNight}>
          <img
            className={styles.appNightIcon}
            loading="lazy"
            alt=""
            src="/app-night@2x.png"
          />
        </div>
      </div>
      <div className={styles.footerSocialLinksInner}>
        <div className={styles.frameGroup}>
          <div className={styles.h2Wrapper}>
            <h1 className={styles.h21}>Frequently asked questions</h1>
          </div>
          <div className={styles.faqs}>
            <FormFAQ />
            <div className={styles.nA}>
              <FormFAQ propMarginTop="unset" />
              <FormFAQ propMarginTop="-0.1px" />
            </div>
            <FormFAQ propMarginTop="unset" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSocialLinks;
