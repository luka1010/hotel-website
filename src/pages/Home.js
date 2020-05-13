import React from "react";
import Hero from "../components/Hero";
import AboutContainer from "../components/AboutContainer";
import HomeImages from "../components/HomeImages";
import ActivityContainer from "../components/ActivityContainer";
import Footer from "../components/Footer"

import img1 from "../images/activity-wellness.jpg";
import img2 from "../images/activity-citytour.jpg";
import img3 from "../images/activity-restaurant.jpg"
import img4 from "../images/activity-beach.jpg"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutContainer />
      <HomeImages />
      <ActivityContainer title="Beach" img={img4} imgPosition="left" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "/>
      <ActivityContainer title="Restaurant & Bar" img={img3} imgPosition="right" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "/>
      <ActivityContainer title="Wellness & Spa" img={img1} imgPosition="left" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "/>
      <ActivityContainer title="City Tour" img={img2} imgPosition="right" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "/>
      <Footer />
    </>
  );
}
