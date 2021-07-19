import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram,  faTwitter } from '@fortawesome/free-brands-svg-icons';
import FooterCol from '../FooterCol/FooterCol';

const Footer = () => {
    const ForIndividuals = [
        {name: "Signup" , link: "/signup"},
        {name: "login" , link: "/login"},
        {name: "Explore" , link: "/explore"},
        {name: "Finder app" , link: "/finder app"},
        {name: "Features" , link: "/features"},
        {name: "Language settings" , link: "/language"},
    ]
    const openTime = [
        {name: "Store Hours:" , link: "/time"},
        {name: "Monday - Friday: 9:00 a.m. to 8:00 p.m." , link: "/time"},
        {name: "Saturday & Sunday: 10:00 a.m. to 6:00 p.m" , link: "/time"},
       
    ]
    const about = [
        {name: "About us" , link: "/about-us"},
        {name: "Contact us" , link: "/contact-us"},
        {name: "Privacy Policy" , link: "/privacy-policy"},
        {name: "Terms" , link: "/terms"},
        {name: "Help" , link: "/help"}
    ]
    const forBusinesses = [
        {name: "Business signup" , link: "/business"},
        {name: "Business login" , link: "/businessLogin"},
        {name: "Benefits" , link: "/benefits"},
        {name: "Resources" , link: "/resources"},
        {name: "Advertise" , link: "/advertise"},
        {name: "Setup" , link: "/setup"}
    ]
    return (
        <footer className="footer-area clear-both">
        <div className="container pt-5">
            <div className="row py-5">
                <FooterCol key={1} menuTitle="Emoji World" menuItems={openTime}> 
                    <ul className="social-media list-inline">
                        <li className="list-inline-item"><a to="//twitter.com"><FontAwesomeIcon className="icon" icon={faTwitter} /></a></li>
                        <li className="list-inline-item"><a to="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        <li className="list-inline-item"><a to="//facebook.com"><FontAwesomeIcon className="icon " icon={faFacebookF} /></a></li>
                    </ul>
                </FooterCol>
                <FooterCol key={2} menuTitle="For individuals" menuItems={ForIndividuals}/>
                <FooterCol key={3} menuTitle="For businesses" menuItems={forBusinesses}/>
                <FooterCol key={4} menuTitle="About" menuItems={about}/>
            </div>
            <div className="copyRight text-white text-center">
                <p>Copyright © MD Mahe Alam {(new Date()).getFullYear()} All Rights Reserved.</p>
            </div>
        </div>
    </footer>
    );
};

export default Footer;