import NavBar from "./NavBar";
import Footer from "./Footer";
import '../Styles/style.css'

const Contact = () => {
    return (
        <div>
            <section class="contactSection" id="contact">
                <NavBar/>
                <div class="contactContainer">
                <div class="contactText">
                    GET IN TOUCH WITH ME!

                    <p>Are you working on a project that needs a creative touch or technical 
                    expertise? Whether it’s front-end or back-end website development, game design, 
                    or machine learning solutions, I’m here to help bring your 
                    vision to life. <br/><strong>Reach out today, and let’s get started!</strong></p>
                </div>
                <form class="contactForm">
                    <div class="formRow">
                    <input type="text" placeholder="Your name*" required />
                    <input type="email" placeholder="Your email*" required />
                    </div>
                    <textarea placeholder="Write your message here*" required></textarea>
                    <button type="submit" class="submitButton">
                    SUBMIT⟶
                    </button>
                </form>
                </div>
                
            </section>
            <Footer/>
        </div>
        
    )
}

export default Contact;