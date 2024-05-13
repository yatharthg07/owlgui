import { useCallback } from "react";
import styles from "./Frame1.module.css";

const Frame1 = () => {
  const onOD4FW004ImageClick = useCallback(() => {
    // Please sync "landing page" to the project
  }, []);

  return (
    <div className={styles.frameParent}>
      <section className={styles.od4fw004Parent}>
        <img
          className={styles.backgroundImage}
          alt=""
          src="/backgrounImage_2.png"
          onClick={onOD4FW004ImageClick}
        />
        <img
          className={styles.orangewoodLogo}
          loading="lazy"
          alt=""
          src="/orangewoodLogo.png"
        />
      </section>
      <section className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <b className={styles.weArePreparing}>we are preparing your order</b>
        <div className={styles.geniusGifClock}>
          <img
            className={styles.geniusGifCoffeeOclock1}
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
