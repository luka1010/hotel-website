import React from "react";
import Hero from "../components/Hero";
import AboutContainer from "../components/AboutContainer";
import HomeImages from "../components/HomeImages";
import ActivityContainer from "../components/ActivityContainer";

import img1 from "../images/activity-wellness.jpg";
import img2 from "../images/activity-citytour.jpg";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutContainer />
      <HomeImages />
      <div>
        <ActivityContainer title="Wellness & Spa" img={img1} desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
        <ActivityContainer title="City Tour" img={img2} desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
      </div>
    </>
  );
}
