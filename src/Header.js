import {React, useState} from "react";
import styles from "./Header.css"
import { Navbar, Container, Nav  } from "reactstrap";
import { Link } from "react-router-dom";
import LinkContainer from "react-router-bootstrap/LinkContainer";
const Header = () => {
    return (
        <div id="navcon" class="header-container">
            <nav id="navbar" class="navbar navbar-expand-lg">
              <div class="container-fluid">
                <a class="navbar-brand" href="/"><img id="rhd-logo" src="/RHD.png" alt="ReinHouse Design" /></a>
                <button id="nav-toggler" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                      <a class="nav-link" id="nav-link" active aria-current="page" href="/">HOME</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id="nav-link" href="#/exterior-remodeling-roofing-contractor-denver-colorado">EXTERIORS</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id="nav-link" href="#/outdoor-living-services">OUTDOOR LIVING</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id="nav-link" href="#/colorado-insurance-contractor-services">INSURANCE</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id="nav-link" href="#/client-work">CLIENT WORK</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id="nav-link" href="#/about-our-roofing-services">ABOUT US</a>
                    </li>
                    <button type="button" class="btn" id="call-button">
                      
                    <a id="call-link" href="#/contact-us">CONTACT US</a>
                      
                  </button>
                  </ul>
                </div>
              </div>
            </nav>
        </div>
    )
};

export default Header;