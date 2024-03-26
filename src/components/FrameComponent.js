import FrameComponent1 from "./FrameComponent1";
import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.coffeeTypesParent}>
        <button className={styles.coffeeTypes}>
          <div className={styles.coffeeTypesChild} />
          <div className={styles.latteCoffee}>Latte Coffee</div>
        </button>
        <div className={styles.guideToLatteArt}>
          <div className={styles.guideToLatteArtChild} />
          <div className={styles.aguidetolatteart}>
            <img
              className={styles.images3Icon}
              loading="lazy"
              alt=""
              src="/images-3@2x.png"
            />
          </div>
          <div className={styles.latteS}>Latte (S)</div>
          <div className={styles.treatYourselfWithContainer}>
            <p
              className={styles.treatYourselfWith}
            >{`Treat yourself with the smooth `}</p>
            <p className={styles.andSophistic}>and sophistic ......</p>
          </div>
        </div>
      </div>
      <FrameComponent1 americanoCoffee="Americano Coffee " />
      <FrameComponent1
        americanoCoffee="Cappuccino Coffee"
        propAlignSelf="stretch"
        propMinWidth="110px"
      />
    </div>
  );
};

export default FrameComponent;
