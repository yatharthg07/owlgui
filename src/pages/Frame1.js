import { useCallback,  useEffect, useState } from "react";
import styles from "./Frame1.module.css";
import Progressbar from "../components/Progressbar";
import { useNavigate } from "react-router-dom";

const Frame1 = () => {
  const navigate = useNavigate();
  const onImageClick = useCallback(() => {
    // Handle image click event
  }, []);
  const [showThankYou, setShowThankYou] = useState(false);
  const[progress,setProgress]= useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p < 100) {
          return p + 1;
        } else {
          clearInterval(timer);
          return p;
        }
      });
    }, 100);

    return () => clearInterval(timer);
  }, [progress]);

  useEffect(() => {
    if (progress === 100) {
      setShowThankYou(true);
      setTimeout(() => {
        setShowThankYou(false);
        navigate("/");
        
      }, 300000); // Redirect to main frame page after 3 seconds
    }
  }, [progress, navigate]);

  const closePopup = () => {
    setShowThankYou(false);
    navigate("/");
  };
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
        <div className="container z-10">
    {/* <h1 className="mt-3 mb-3 text-white text-3xl font-bold z-20 "></h1> */}
      <div className="row justify-content-md-center">
        <div className="col-md-6">
           <Progressbar value={ progress} />
        </div>
      </div>
      </div>  
      </section>
      {showThankYou && (
        <div className={styles.thankYouPopup}>
          <div className={styles.thankYouMessage}>
            <button className={styles.closeButton} onClick={closePopup}>
              &times;
            </button>
            <p>Thank you! Your order is ready.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Frame1;
