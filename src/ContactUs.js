import React, {useRef} from "react";
import CallToAction from "./CallToAction";
import styles from "./ContactUs.css"
//import emailjs from "@emailjs/browser";
const ContactUs = () => {
    const form = document.getElementById("contact-form");
    function sendEmail(e) {
        e.preventDefault();
                emailjs.sendForm('service_tvymhkp', 'template_2i3544p', form, 'YOoamRM3hT-FxQ6ZR')
                    .then((result) => {
                        console.log(result.text); 
                    }, (error) => {
                        console.log(error.text);
                    });
                    form.reset();
    };
    return(
    <div id="contact-page-wrapper">
        <form id="contact-form" onSubmit={sendEmail}>
            <div class="contact-form-bg">
                <h1 class="form-title">FREE Storm Report and FREE Roof Inspection</h1>
                <div class="form-group name-group">
                  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="First Name" name="first-name"/>
                  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Last Name" name="last-name"/>
                </div>
                <div class="form-group">
                    <input class="form-control" type="text" placeholder="Phone Number" name="phone-number"  />
                    <input class="form-control" type="email" placeholder="Email Address" name="email" />
                    <input class="form-control" type="text" placeholder="Street Address" name="address" />
                </div>
                <div class="form-group">
                </div>
                <div class="form-group name-group">
                    <input class="form-control" placeholder="City" name="city"></input>
                    <select placeholder="State" class="form-control" id="exampleFormControlSelect1" name="state">
                        <option value="default">State</option>
                        <option value="AL">Alabama</option>
	                    <option value="AK">Alaska</option>
	                    <option value="AZ">Arizona</option>
	                    <option value="AR">Arkansas</option>
	                    <option value="CA">California</option>
	                    <option value="CO">Colorado</option>
	                    <option value="CT">Connecticut</option>
	                    <option value="DE">Delaware</option>
	                    <option value="DC">District Of Columbia</option>
	                    <option value="FL">Florida</option>
	                    <option value="GA">Georgia</option>
	                    <option value="HI">Hawaii</option>
	                    <option value="ID">Idaho</option>
	                    <option value="IL">Illinois</option>
	                    <option value="IN">Indiana</option>
	                    <option value="IA">Iowa</option>
	                    <option value="KS">Kansas</option>
	                    <option value="KY">Kentucky</option>
	                    <option value="LA">Louisiana</option>
	                    <option value="ME">Maine</option>
	                    <option value="MD">Maryland</option>
	                    <option value="MA">Massachusetts</option>
	                    <option value="MI">Michigan</option>
	                    <option value="MN">Minnesota</option>
	                    <option value="MS">Mississippi</option>
	                    <option value="MO">Missouri</option>
	                    <option value="MT">Montana</option>
	                    <option value="NE">Nebraska</option>
	                    <option value="NV">Nevada</option>
	                    <option value="NH">New Hampshire</option>
	                    <option value="NJ">New Jersey</option>
	                    <option value="NM">New Mexico</option>
	                    <option value="NY">New York</option>
	                    <option value="NC">North Carolina</option>
	                    <option value="ND">North Dakota</option>
	                    <option value="OH">Ohio</option>
	                    <option value="OK">Oklahoma</option>
	                    <option value="OR">Oregon</option>
	                    <option value="PA">Pennsylvania</option>
	                    <option value="RI">Rhode Island</option>
	                    <option value="SC">South Carolina</option>
	                    <option value="SD">South Dakota</option>
	                    <option value="TN">Tennessee</option>
	                    <option value="TX">Texas</option>
	                    <option value="UT">Utah</option>
	                    <option value="VT">Vermont</option>
	                    <option value="VA">Virginia</option>
	                    <option value="WA">Washington</option>
	                    <option value="WV">West Virginia</option>
	                    <option value="WI">Wisconsin</option>
	                    <option value="WY">Wyoming</option>
                    </select>
                </div>
                <div class="form-group">
                    <input class="form-control" type="text" placeholder="Zip Code" name="zip-code"></input>
                    <select class="form-control" name="req-app">
                        <option>Request Appointment?</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                    <select name="project-type" class="form-control">
                        <option>Project Type</option>
                        <option>Roofing</option>
                        <option>Exterior Remodeling</option>
                        <option>Gutters</option>
                        <option>Siding</option>
                        <option>Windows</option>
                        <option>Other</option>
                    </select>
                    <select class="form-control" name="start-date">
                        <option>When would you like to start?</option>
                        <option>As soon as possible</option>
                        <option>Within the next 6 months</option>
                        <option>Within the next year</option>
                        <option>Just considering my options</option>
                    </select>
                </div> 
                <div class="form-group last-form">
                  <textarea placeholder="Project Description" name="project-desc" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
            <input id="btn" value="SEND" class="form-button" type="submit"/>
        </form>
        <div class="phn">
            <a href="tel:6513009394"><button class="btn call-btn">TWIN CITIES: 651-300-9394</button></a>
            <a href="tel:7208798827"><button class="btn call-btn">DENVER/FRONT RANGE 720-879-8827</button></a>
        </div>
    </div>
)};

export default ContactUs;