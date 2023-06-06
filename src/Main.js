import React from "react";
import {Route, Routes} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home"
import Work from "./Work";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Exteriors from "./Exteriors";
import Insurance from "./Insurance"
import OutdoorLiving from "./OutdoorLiving";

const Main = () => (
<main>
    <Routes>
        <Route path="/exterior-remodeling-roofing-contractor-denver-colorado" element={<Exteriors/>} />
        <Route path="/colorado-insurance-contractor-services" element={<Insurance/>} />
        <Route path="/client-work" element={<Work/>} />
        <Route path="/outdoor-living-services" element={<OutdoorLiving/>} />
        <Route path="/about-our-roofing-services" element={<AboutUs/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route exact path="/" element={<Home />} />
    </Routes>
</main>
);
export default Main;