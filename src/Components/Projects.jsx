import NavBar from "./NavBar";
import Footer from "./Footer";
import '../Styles/style.css'
import Cards from "./ProjectCards";
import photogCover from "../Assets/photogCover.jpg";
import videoCover from "../Assets/videoCover.png";
import webCover from "../Assets/webCover.png";

const Projects =() => {
    return (
        <>
        <div>
            <NavBar/>
           <section className="projectSection" id="projects">
                <div className="mainC">
                    <h1 className="aboutMe">MY PROJECTS</h1>
                    <p className="aboutDes">WITH YEARS OF EXPERIENCE, THESE ARE MY WORKS SO FAR</p>

                    <div className="container">
                        <Cards image={photogCover} name={"PHOTOGRAPHS"} myLink={"https://drive.google.com/drive/folders/1XHKYzDG00zNou8MJ5rkn1Ybp3Nb2QiaD?usp=sharing"}/>
                        <Cards image={videoCover} name={"VIDEOS"} myLink={"https://drive.google.com/drive/folders/1CtLIChJLbv6cC4TwmFIheVTit4QHqtdd?usp=sharing"}/>
                        <Cards image={webCover} name={"WEBSITES"} myLink={"https://github.com/Johnrxyz"}/>
                    </div>
                </div>
                </section>


            <Footer/>
        </div>
        </>
    )
}

export default Projects;