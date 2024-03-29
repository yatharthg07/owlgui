import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame.module.css";

const Frame = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/Preparing");
  }, [navigate]);

 
  return (
    <div className={styles.frameParent}>
      <section className={styles.oDFWWrapper}>
        <div className={styles.oDFW}>
          <img
            className={styles.od4fw004Icon}
            alt=""
            src="/933587-od4fw00-4@2x.png"
          />
          <img
            className={styles.logoBlack11}
            loading="lazy"
            alt=""
            src="/logo-black-1-1@2x.png"
          />
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.od4fw002Parent}>
              <img
                className={styles.od4fw002Icon}
                alt=""
                src="/933587-od4fw00-2@2x.png"
              />
              <div className={styles.wrapperVector2}>
                <img
                  className={styles.wrapperVector2Child}
                  loading="lazy"
                  alt=""
                  src="/vector-2.svg"
                />
              </div>
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/vector-3.svg"
              />
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameInner} />
              <button className={styles.rectangleContainer}>
                <div
                  className={styles.rectangleDiv}
                  onClick={onRectangleClick}
                />
                <div className={styles.orderNow}>Order Now</div>
              </button>
              <h1 className={styles.latte}>{`Latte `}</h1>
              <div className={styles.ourLatteIs}>
                Our Latte is a classic coffee drink made with espresso and
                steamed milk. It is best enjoyed with our almond biscotti.
              </div>
            </div>
            <img
              className={styles.whatIsALatte17083104771Icon}
              loading="lazy"
              alt=""
              src="/whatisalatte1708310477-1@2x.png"
            />
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameChild1} />
            <div className={styles.od4fw005Parent}>
              <img
                className={styles.od4fw005Icon}
                alt=""
                src="/933587-od4fw00-2@2x.png"
              />
              <div className={styles.wrapperVector4}>
                <img
                  className={styles.wrapperVector4Child}
                  loading="lazy"
                  alt=""
                  src="/vector-2.svg"
                />
              </div>
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector-5.svg"
              />
            </div>
            <div className={styles.rectangleParent1}>
              <div className={styles.frameChild2} />
              <button className={styles.frameButton}>
                <div className={styles.frameChild3} />
                <div className={styles.orderNow1}>Order Now</div>
              </button>
              <h1 className={styles.americano}>{`Americano `}</h1>
              <div className={styles.ourLatteIs1}>
                Our Latte is a classic coffee drink made with espresso and
                steamed milk. It is best enjoyed with our almond biscotti.
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent2}>
            <div className={styles.frameChild4} />
            <div className={styles.od4fw006Parent}>
              <img
                className={styles.od4fw006Icon}
                alt=""
                src="/933587-od4fw00-2@2x.png"
              />
              <div className={styles.wrapperVector6}>
                <img
                  className={styles.wrapperVector6Child}
                  loading="lazy"
                  alt=""
                  src="/vector-2.svg"
                />
              </div>
              <img
                className={styles.frameChild5}
                loading="lazy"
                alt=""
                src="/vector-3.svg"
              />
            </div>
            <div className={styles.rectangleParent3}>
              <div className={styles.frameChild6} />
              <button className={styles.rectangleParent4}>
                <div className={styles.frameChild7} />
                <div className={styles.orderNow2}>Order Now</div>
              </button>
              <h1 className={styles.cappuccino}>Cappuccino</h1>
              <div className={styles.ourLatteIs2}>
                Our Latte is a classic coffee drink made with espresso and
                steamed milk. It is best enjoyed with our almond biscotti.
              </div>
            </div>
            <img
              className={styles.unnamed11}
              loading="lazy"
              alt=""
              src="/unnamed-1-1@2x.png"
            />
          </div>
          <img
            className={styles.howToDrinkCafeAmericano17Icon}
            alt=""
            src="/howtodrinkcafeamericano1705749373-1@2x.png"
          />
        </div>
      </section>
    </div>
  );
};

export default Frame;
