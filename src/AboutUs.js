import React from "react";
import Helmet from "react-helmet";
import styles from "./AboutUs.css"
import CallToAction from "./CallToAction";
const AboutUs = () => (
<div class="content-container">
    <Helmet>
        <title>RHD | Home</title>
    </Helmet>
    <div class="au-wrapper">
        <div class="bg-wrapper">
            <div class="dark-overlay">
            <div class="about-us">
                <h5 class="above-title au-title">About Our Company</h5>
                <h1 class="au-title">Hardscaping, Exteriors and Outdoor Living</h1>
                <hr id="hr"></hr>
                <p class="au-title au-desc">The owner of ReinHouse Design, Nate Rein, comes from a long line of contractors. He grew up watching his dad and grandfather build custom homes and learned most of his skills from them. Nate found himself drawn to the outdoor side of things and has been building custom outdoor spaces for over 24 years. He has assembled an amazing team of contractors who have over 100 years of experience in building and design. This family owned and operated company has the passion, the experience, and the expertise to provide you with an exceptional customer service experience. We will help create an outdoor space that will have all the neighbors saying "WOW!"</p>
            </div>
        </div>
        </div>
        <div class="img-display">
            <img class="au-img i-1" src="/au-p1.jpg"/>
            <img class="au-img i-2" src="/au-p2.jpg"/>
            <img class="au-img i-3" src="/au-p3.jpg"/>
        </div>
        <div class="cert-lit">
            <div>
                <img class="au-oc-img" src="owens-corning-small.jpg"/>
            </div>
            <div class="oc-sec">
                <h1>OWEN'S CORNING PLATINUM PREFERRED CONTRACTOR</h1>
                <p class="cert-lit-exp">For years, those in the Denver area have turned to ReinHouse Design for all of their hardscaping and exterior remodeling needs.</p>
                <h3 id="ins-text"><a id="free-in" href="#/contact-us">Get FREE inspection today!</a></h3>
            </div>
        </div>
    </div>
</div>
);
export default AboutUs;