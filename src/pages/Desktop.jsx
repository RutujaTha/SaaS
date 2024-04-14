import NavBarDesktop from "../components/NavBarDesktop";
import AboutFeaturesCustomersUpdat from "../components/AboutFeaturesCustomersUpdat";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import FooterSocialLinks from "../components/FooterSocialLinks";
import NA from "../components/NA";
import FooterS from "../components/FooterS";
import styles from "./Desktop.module.css";

const Desktop = () => {
  return (
    <div className={styles.desktop}>
      <div className={styles.bar}>
        <div className={styles.stack}>
          <div className={styles.thisPageIs}>
            This page is included in a free SaaS Website Kit.
          </div>
          <div className={styles.versionIsHere}>
            <div className={styles.viewTheComplete}>View the complete Kit</div>
            <img className={styles.icons} alt="" src="/icons.svg" />
          </div>
        </div>
      </div>
      <NavBarDesktop />
      <AboutFeaturesCustomersUpdat />
      <FrameComponent1 />
      <FrameComponent />
      <FooterSocialLinks />
      <NA />
      <FooterS />
    </div>
  );
};

export default Desktop;
