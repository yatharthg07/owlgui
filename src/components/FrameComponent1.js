import { useMemo } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ americanoCoffee, propAlignSelf, propMinWidth }) => {
  const frameButtonStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const americanoCoffeeStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.frameParent}>
      <button className={styles.rectangleParent} style={frameButtonStyle}>
        <div className={styles.frameChild} />
        <div className={styles.americanoCoffee} style={americanoCoffeeStyle}>
          {americanoCoffee}
        </div>
      </button>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <img
          className={styles.aGuideToLatteArt1107524Icon}
          loading="lazy"
          alt=""
          src="/img1.png"
        />
        <div className={styles.latteS}>Latte (S)</div>
        <div className={styles.treatYourselfWithContainer}>
          <p
            className={styles.treatYourselfWith}
          >{`Treat yourself with the smooth `}</p>
          <p className={styles.andSophistic}>and sophistic ......</p>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
