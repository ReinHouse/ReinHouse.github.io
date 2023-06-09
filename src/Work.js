import React from "react";
import Helmet from "react-helmet";
import styles from "./Work.css";
import CallToAction from "./CallToAction";
import Testomonials from "./Testomonials";

const Work = () => (
  
<div class="content-container">
<div class="testimonialWork"><Testomonials/></div>
    <div class="gallery-container">
   
    

        <div class="row">
          <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
              src="/client-gallery/gazebo.webp"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />

            <img
              src="/client-gallery/paving-vert.webp"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Wintry Mountain Landscape"
            />
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
            <img
              src="/client-gallery/vert-pic.webp"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Mountains in the Clouds"
            />

            <img
              src="/client-gallery/horiz-wall.jpg"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
            <img
              src="/client-gallery/custom-paving.webp"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Waves at Sea"
            />

            <img
              src="/client-gallery/vert-paving.webp"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Yosemite National Park"
            />
          </div>
        </div>
    </div>
    <div class="gallery-container2">
        <div class="row">
          <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
              src="/client-gallery/horiz-construction.webp"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />

            <img
              src="/client-gallery/vert-walkway.webp"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Wintry Mountain Landscape"
            />
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
            <img
              src="/client-gallery/vert-shed.jpg"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Mountains in the Clouds"
            />

            <img
              src="/client-gallery/horiz-gazebo.jpg"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
            <img
              src="/client-gallery/horiz-fireplace.webp"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Waves at Sea"
            />

            <img
              src="/client-gallery/vert-brick.webp"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Yosemite National Park"
            />
          </div>
        </div>
    </div>
</div>
);
export default Work;