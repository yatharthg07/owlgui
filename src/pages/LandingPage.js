import FrameComponent from "../components/FrameComponent";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <img className={styles.images1Icon} alt="" src="/images-1@2x.png" />
      <header className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.logoBlack11}
          loading="lazy"
          alt=""
          src="/logo-black-1-1@2x.png"
        />
      </header>
      <section className={styles.landingPageInner}>
        <FrameComponent />
      </section>
    </div>
  );
};

export default LandingPage;
