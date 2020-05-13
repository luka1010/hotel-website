import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function ActivityContainer(props) {
  function getImg() {
    return (
      <div>
        <img src={props.img} alt="wellness" className="activity-img" />
      </div>
    );
  }
  function getDesc(){
    return (
      <div className="activity-description">
        <h3>{props.title}</h3>
        <div className="details">
          <p>{props.desc}</p>
        </div>
        <span className="details-link">
          <Link to="/SingleActivity">
            DETAILS <FaArrowRight className="details-icon" />
          </Link>
        </span>
      </div>
    );
  }
  return(
    <>
      <div className={props.imgPosition === "left" ? "activity-container-left" : "activity-container-right"}>
        {props.imgPosition === "left" ? getImg() : getDesc()}
        {props.imgPosition === "left" ? getDesc() : getImg()}
      </div>
    </>
  );
}
