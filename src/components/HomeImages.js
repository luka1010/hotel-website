import React from 'react'
import img1 from "../images/beach.jpg"
import img2 from "../images/massage.jpg"
import img3 from "../images/nightlife.jpg"
import img4 from "../images/hiking.jpg"

export default function HomeImages() {
    return (
        <div className="home-images-container">
            <img src={img1} alt="beach"></img>
            <img src={img2} alt="massage"></img>
            <img src={img3} alt="nightlife"></img>
            <img src={img4} alt="hiking"></img>
        </div>
    )
}
