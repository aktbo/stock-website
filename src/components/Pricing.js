import React from "react";
import { Button } from "./Button";
import "./Pricing.css";
import { FaFire } from "react-icons/fa";
import { BsXDiamondFill } from "react-icons/bs";
import { GiCrystalize } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="pricing__section">
        <div className="pricing__wrapper">
          <h1 className="pricing__heading">Stock Plans</h1>
          <div className="pricing__container">
            <Link to="/sign-up" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <FaFire />
                </div>
                <h3>Stock 1</h3>
                <h4>$0.00</h4>
                <p>per month</p>
                <ul className="pricing__container-features">
                  <li>Stock Stock</li>
                  <li>Stock Stock</li>
                  <li>Stock Stock</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary">
                  Stock Button
                </Button>
              </div>
            </Link>
            <Link to="/sign-up" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <BsXDiamondFill />
                </div>
                <h3>Stock 2</h3>
                <h4>$0.00</h4>
                <p>per month</p>
                <ul className="pricing__container-features">
                  <li>Stock Stock</li>
                  <li>Stock Stock</li>
                  <li>Stock Stock</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="blue">
                  Stock Button
                </Button>
              </div>
            </Link>
            <Link to="/sign-up" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <GiCrystalize />
                </div>
                <h3>Stock 3</h3>
                <h4>$0.00</h4>
                <p>per month</p>
                <ul className="pricing__container-features">
                  <li>Stock Stock</li>
                  <li>Stock Stock</li>
                  <li>Stock Stock</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary">
                  Stock Button
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
