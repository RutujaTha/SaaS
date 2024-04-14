import styles from "./FrameComponent1.module.css";

const FrameComponent1 = () => {
  return (
    <section className={styles.desktopInner}>
      <div className={styles.formInstanceParent}>
        <div className={styles.formInstance}>
          <div className={styles.trustedByThe}>
            Trusted by the world’s most innovative teams
          </div>
        </div>
        <div className={styles.getFreeButtonInstance}>
          <img
            className={styles.acme1Icon}
            loading="lazy"
            alt=""
            src="/acme-1@2x.png"
          />
          <img
            className={styles.quantum1Icon}
            loading="lazy"
            alt=""
            src="/quantum-1@2x.png"
          />
          <div className={styles.echo1Wrapper}>
            <img
              className={styles.echo1Icon}
              loading="lazy"
              alt=""
              src="/echo-1@2x.png"
            />
          </div>
          <div className={styles.celestia1Wrapper}>
            <img
              className={styles.celestia1Icon}
              loading="lazy"
              alt=""
              src="/celestia-1@2x.png"
            />
          </div>
          <div className={styles.pulse1Wrapper}>
            <img
              className={styles.pulse1Icon}
              loading="lazy"
              alt=""
              src="/pulse-1@2x.png"
            />
          </div>
          <div className={styles.apex1Wrapper}>
            <img
              className={styles.apex1Icon}
              loading="lazy"
              alt=""
              src="/apex-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
