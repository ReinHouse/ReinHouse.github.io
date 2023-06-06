import React from "react";
import styles from "./OutdoorLiving.css";
import CallToAction from "./CallToAction";

const OutdoorLiving = () => (
<div class="content">
    <div class="ext-wrap">
        <h3 class="ext-rem-head">Exterior Remodeling Services</h3>
        <div ext-lit>
            <p class="p-lit">Your yard should be your sanctuary - where you leave the problems of the world behind you. Let us help you create that oasis in your yard.</p>
            <p class="p-lit">ReinHouse Design helps you find your design and build your custom yard. As a certified full-service hardscaping company, we can help you create a beautiful space that is custom to your needs. </p>
            <p class="p-lit">We pride ourselves in listening to our customers and making sure we are hearing your needs, wants, and preferences in your design. From there we will create a plan that fits that design into the landscaping and budget for your project. </p>
            <p class="p-lit last-intro">ReinHouse Designs is dedicated to creating you the outdoor space you are dreaming of.</p>
        </div>
        <div id="c-g" class="card-group">
          <div class="card">
            <img class="card-img-top" src="/paving.jpg" alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Interlocking Custom Paving</h5>
              <p class="card-text">Our interlocking pavers connect concrete blocks together through the use of sand, and can cover any patio, decking, driveway, hot tub pad or walkway. Our team can design a stunning concept for your personal style.</p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="/turf.jpg" alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Artificial Turf</h5>
              <p class="card-text">We can design a no-maintenance yard with green grass all year round for your convenience. Our turf is realistic and durable that it won't fade in the Colorado sun but also soft enough to play on.</p>
            </div>
          </div>
        </div>
        <hr id="ext-hr"></hr>
        <div id="c-g" class="card-group">
          <div class="card">
            <img class="card-img-top" src="/deck.webp" alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Custom Decks</h5>
              <p class="card-text">No matter your style we can build composite decks, wood decks, decks with steel accents and handrails and much more. No matter your style we can create a custom design exclusively for you.</p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="/outdoor.webp" alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Outdoor Living Spaces</h5>
              <p class="card-text">Let us help you turn your backyard into your dream oasis to include out door kitchens, fire pits, sun/wind protection, exterior lighting, pergolas, plant installation and more. The sky is the limit to turn your dream into reality.</p>
            </div>
          </div>
        </div>
        <div id="c-g" class="card-group">
        <div class="card">
            <img class="card-img-top" src="/pool.webp" alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Pools and Decks</h5>
              <p class="card-text">We also specialize in pools! We can add any size pool to your backyard or give an existing pool deck a face lift. We are here to create a custom look that fits your style and leaves you happy.</p>
            </div>
          </div>
          <div class="card">
            <img id="gazebo" class="card-img-top" src="/gazebo-pic.jpg" alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Gazebos</h5>
              <p class="card-text">We can also add a great gazebo to your home, this is somewhere you can sit rain or shine and enjoy your living space. We can build this to your liking and will work with you to make it a great addition to your home.</p>
            </div>
          </div>
        </div>
    </div>

</div>
);

export default OutdoorLiving;