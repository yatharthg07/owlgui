import { useCallback } from "react";
import "./Frame1.css";

const Frame1 = () => {
  const onImageClick = useCallback(() => {
    // Handle image click event
  }, []);

  return (
    <div className="frameParent1" >
      <section className="backgroundSection1">
        <img
          className="backgroundImage1"
          loading="lazy"
          alt=""
          src="/backgroundImage_2.png"
          onClick={onImageClick}
        />
      </section>
      <section className="logoSection1">
        <img
          className="logoImage1"
          loading="lazy"
          alt=""
          src="/orangewoodLogo.png"
        />
      </section>
      <section className="contentSection1">
        <b className="contentText1">We are preparing your order</b>
        <div className="gifContainer1">
          <img
            className="gifImage1"
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
