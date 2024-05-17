import { useCallback } from "react";
import styles from "./Frame1.module.css";

const Frame1 = () => {
  const onImageClick = useCallback(() => {
    // Handle image click event
  }, []);

  return (
    <div className={styles.frameParent1}>
      <section className={styles.backgroundSection1}>
        <img
          className={styles.backgroundImage1}
          loading="lazy"
          alt=""
          src="/backgroundImage_2.png"
          onClick={onImageClick}
        />
      </section>
      <section className={styles.logoSection1}>
        <img
          className={styles.logoImage1}
          loading="lazy"
          alt=""
          src="/orangewoodLogo.png"
        />
      </section>
      <section className={styles.contentSection1}>
        <b className={styles.contentText1}>We are preparing your order</b>
        <div className={styles.gifContainer1}>
          <img
            className={styles.gifImage1}
            loading="lazy"
            alt=""
            src="/genius-gif--coffee-oclock-1@2x.gif"
          />
        </div>
      </section>
    </div>
  );
};

export default Frame1;
