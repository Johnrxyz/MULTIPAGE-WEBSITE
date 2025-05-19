import { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import '../Styles/style.css';
import Me from '../Assets/me.png';


const Hero = () => {

    return (
        <>
            <NavBar />
            <section className="firstPart" id="hero">
                <div className="mainContent">
                    <div className="right-column">
                        <div className="profileInfo">
                            <div className="profile-image">
                                <img src={Me} alt="me" style={{ borderRadius: '2%' }} width="100%" height="auto" />
                            </div>

                            <div className="profileDetails">
                                <p className="mainP">Reincarnated in <strong>2005</strong></p>
                                <p className="mainP">Born in <strong>Lucena City, Philippines</strong></p>
                                <p className="mainP" id="lastChild">Studying at <strong>Dalubhasaan ng Lunsod ng Lucena</strong></p>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="intro">
                    <div className="fName">I am <strong>Johnrey</strong></div>
                    <p className="aboutMeHero">
                        A student with a passion for capturing moments through photography,
                        storytelling through filmmaking, and crafting seamless user experiences
                        with UI/UX design.
                    </p>
                </section>
            </section>

            <div className="nouns">
                <h1>
                    SON. BROTHER. FRIEND. <br />
                    FAMILY. STUDENT. <br />
                    DOG OWNER.<br />
                </h1>
            </div>

            <Footer />
        </>
    );
};

export default Hero;
