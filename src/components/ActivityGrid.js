import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import img1 from "../images/activity-movienight.jpg";
import img2 from "../images/activity-hiking.jpg";
import img3 from "../images/activity-guitar.jpg";

export default function ActivityGrid() {
  return (
    <div className="gridcontainer">
      <Link to="/SingleActivity">
        <div className="gridelements">
          <div className="gridimagecontainer">
            <img src={img1} alt="grid-first" className="gridimg" />
          </div>
          <div className="gridtextcontainer">
            <h3>Movie Night</h3>
            <p>
              Three evenings of classic movies by the beach. What else would you
              want?
            </p>
            <div className="griddate">
              <div>29th of August - 1st of Semptember</div>
              <div className="details-link">
                <FaArrowRight className="details-icon" />
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/SingleActivity">
        <div className="gridelements">
          <div className="gridimagecontainer">
            <img src={img2} alt="grid-first" className="gridimg" />
          </div>
          <div className="gridtextcontainer">
            <h3>Hiking</h3>
            <p>
              Three evenings of classic movies by the beach. What else would you
              want?
            </p>
            <div className="griddate">
              <div>29th of August - 1st of Semptember</div>
              <div className="details-link">
                <FaArrowRight className="details-icon" />
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/SingleActivity">
        <div className="gridelements">
          <div className="gridimagecontainer">
            <img src={img3} alt="grid-first" className="gridimg" />
          </div>
          <div className="gridtextcontainer">
            <h3>Acoustic Guitar Night</h3>
            <p>
              Three evenings of classic movies by the beach. What else would you
              want?
            </p>
            <div className="griddate">
              <div>29th of August - 1st of Semptember</div>
              <div className="details-link">
                <FaArrowRight className="details-icon" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
