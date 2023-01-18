import React, { useEffect, useState } from "react";
import "./PlansScreen.css";

const PlansScreen = () => {
  const [subscrition, setSubscrition] = useState();

  useEffect(() => {}, []);

  return (
    <div className="plansScreen">
      <div className="plansScreen__plan">
        <div className="plansScreen___info">
          <h5>Basic Plan</h5>
          <h6>720p</h6>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="plansScreen__plan">
        <div className="plansScreen___info">
          <h5>Standard Plan</h5>
          <h6>1080p</h6>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="plansScreen__plan">
        <div className="plansScreen___info">
          <h5>Premium Plan</h5>
          <h6>4K + HDR</h6>
        </div>
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default PlansScreen;
