import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./frameStyles.css"; // Import the renamed CSS file

const Frame = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    // First, navigate to "/Preparing"
    navigate("/Preparing");

    // Then, make a request to run the Python server
    axios
      .get("http://localhost:8000/run-server") // Adjust URL as needed
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error running server:", error);
      });
  }, [navigate]);

  return (
    <div className="pageContainer">
      <div className="par">
        <div className="logodiv">
          <img
            className="orangewoodLogo"
            loading="lazy"
            alt=""
            src="/orangewoodLogo.png"
          />
        </div>

        <div className="frameParent">
          {/* Card 1 */}
          <div className="frame">
            <div className="rectangleParent">
              <img
                className="cardImage"
                src={`${process.env.PUBLIC_URL}/whatisalatte1708310477-1@2x.png`}
                alt="Cappuccino"
              />
              <h1 className="cardTitle">Latte</h1>
              <p className="cardDescription">
                Our Latte is a classic coffee drink made with espresso and
                steamed milk. It is best enjoyed with our almond biscotti.
              </p>
            </div>
            <button className="orderNowButton" onClick={onRectangleClick}>
              Order Now
            </button>
          </div>
          <div className="frame">
            <div className="rectangleParent">
              <img
                className="cardImage"
                src={`${process.env.PUBLIC_URL}/whatisalatte1708310477-1@2x.png`}
                alt="Cappuccino"
              />
              <h1 className="cardTitle">Americano</h1>
              <p className="cardDescription">
                Our Americano is a classic coffee drink made with espresso and
                hot water. It is perfect for those who enjoy a strong and bold
                flavor.
              </p>
            </div>
            <button className="orderNowButton" onClick={onRectangleClick}>
              Order Now
            </button>
          </div>
          {/* Card 3 */}
          <div className="frame">
            <div className="rectangleParent">
              <img
                className="cardImage"
                src={`${process.env.PUBLIC_URL}/whatisalatte1708310477-1@2x.png`}
                alt="Cappuccino"
              />
              <h1 className="cardTitle">Cappuccino</h1>
              <p className="cardDescription">
                Our Cappuccino is a classic coffee drink made with equal parts
                espresso, steamed milk, and milk foam. It is perfect for those
                who enjoy a creamy and frothy texture.
              </p>
            </div>
            <button className="orderNowButton" onClick={onRectangleClick}>
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
