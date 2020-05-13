import React from "react";
import ActivityContainer from "../components/ActivityContainer";
import Footer from "../components/Footer"
import ActivityGrid from "../components/ActivityGrid"

import img1 from "../images/activity-wellness.jpg";
import img2 from "../images/activity-citytour.jpg";
import img3 from "../images/activity-restaurant.jpg"
import img4 from "../images/activity-beach.jpg"

export default function Activities() {
  return (
    <>
      <div className="featured-desc">
        <div className="featured-title">
          <h6>MAKE MEMORIES HAPPEN ...</h6>
          <h1>Featured activities</h1>
        </div>
        <div className="featured-text">
          Take advantage of special savings and exclusive offers when you book
          direct with Adriatic Luxury Hotels. Whether you’re looking to explore
          Dubrovnik and other parts of the beautiful south Dalmatia, or perhaps
          you just want a weekend away, we have special packages across our
          properties to suit your needs. 
        </div>
      </div>
      <ActivityGrid />
      <ActivityContainer title="Beach" img={img4} imgPosition="left" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "/>
      <ActivityContainer title="Restaurant & Bar" img={img3} imgPosition="right" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "/>
      <ActivityContainer title="Wellness & Spa" img={img1} imgPosition="left" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "/>
      <ActivityContainer title="City Tour" img={img2} imgPosition="right" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "/>
      <Footer />
    </>
  );
}
