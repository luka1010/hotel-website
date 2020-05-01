import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function ActivityContainer(props) {
  return (
    <div className="activity-container">
      <div className="img-container">
        <img src={props.img} alt="wellness" />
      </div>
      <div className="activity-description">
        <h3>{props.title}</h3>
        <div className="details">
          <p>
            {props.desc}
          </p>
          <div className="activity-link">
            <Link to="/SingleActivity">
              DETAILS <FaArrowRight className="details-icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
