import React from "react";
import styles from "./Exteriors.css"
import CallToAction from "./CallToAction";

const Exteriors = () => (
<div class="content">
<div class="r-wrap">
        <div id="roof-banner" class="roof-banner">
            <h2 id="roof-header" class="roof-header">Roofing</h2>
        </div>
        <div class="roof-wrapper">
            <img id="roofing-img" class="roof-img" src="/roofing.jpg" />
            <div class="roof-div">
                <h3 class="ext-rem-head roof-head">Commercial and Residential Roofing</h3>
                <p class="roof-p">We offer commercial and residential roofing services. To maximize our flexibility we have many different materials for you to choose from when re-roofing your home. Materials include shingles, shake, tile, metal, slate, flat/low Slope. Call today to get your project started!</p>
            </div>
        </div>
    </div>
    <div class="s-wrap">
        <div id="siding-banner" class="roof-banner">
            <h2 id="siding-header" class="roof-header">Siding</h2>
        </div>
        <div class="roof-wrapper">
            <img id="siding-img" class="roof-img" src="/siding.jpg" />
            <div class="roof-div">
                <h3 class="ext-rem-head roof-head">Siding Replacement and Installation</h3>
                <p class="roof-p">We offer siding replacement and installation using high quality materials that can stand up to the weather. Siding is one of the most important first lines of defense for your house. If you have siding damage it is important to get this fixed to prevent permanent damage to your home.</p>
            </div>
        </div>
    </div>
    <div class="g-wrap">
        <div id="gutter-banner" class="roof-banner">
            <h2 id="gutter-header" class="roof-header">Gutters</h2>
        </div>
        <div class="roof-wrapper">
            <img id="gutter-img" class="roof-img" src="/gutter.jpg" />
            <div class="roof-div">
                <h3 class="ext-rem-head roof-head">Gutter Replacement and Installation</h3>
                <p id="gutter-exp" class="roof-p">The gutters on your house redirect water from your roof to the natural groundwater system, this prevents standing water from causing permanent damage. We can replace damaged gutters with high quality gutters that will sufficiently protect your home.</p>
            </div>
        </div>
    </div>
    <div class="g-wrap">
        <div id="gutter-banner" class="roof-banner">
            <h2 id="window-header" class="roof-header">Windows</h2>
        </div>
        <div class="roof-wrapper">
            <img  class="roof-img" src="/window.jpg" />
            <div class="roof-div">
                <h3 class="ext-rem-head roof-head">Window Installation</h3>
                <p id="gutter-exp" class="roof-p">Do you have drafty and cold windows? Changing your windows will not only increase your curb appeal, but also improve the energy efficiency and comfort of your home. Customize your windows the way you want them. Choose your color, style, and even how they operate.</p>
            </div>
        </div>
    </div>
    <div class="storm-restoration-cta">
            <h2>Storm Damage? Visit our Insurance Claims page.</h2>
            <a id="ins-btn" class="home-btn btn" href="#/colorado-insurance-contractor-services">TAKE ME THERE</a>
            <div class="sty-bar"></div>
        </div>

</div>
);

export default Exteriors;