import styles from "./NA.module.css";

const NA = () => {
  return (
    <section className={styles.nA}>
      <div className={styles.nA1}>
        <div className={styles.nA2}>
          <div className={styles.nA3}>
            <h1 className={styles.h2}>Get instant access</h1>
            <div className={styles.body}>
              Celebrate the joy of accomplishment with an app designed to track
              your progress and motivate your efforts.
            </div>
          </div>
          <div className={styles.form}>
            <div className={styles.form1}>
              <div className={styles.nameemailcom}>name@email.com</div>
            </div>
            <div className={styles.buttons}>
              <div className={styles.getForFree}>Get access</div>
            </div>
          </div>
        </div>
        <img
          className={styles.emojistar1Icon}
          loading="lazy"
          alt=""
          src="/emojistar-1@2x.png"
        />
        <img
          className={styles.helix21Icon}
          loading="lazy"
          alt=""
          src="/helix2-1@2x.png"
        />
      </div>
    </section>
  );
};

export default NA;
