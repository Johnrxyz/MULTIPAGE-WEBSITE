import NavBar from "./NavBar";
import Footer from "./Footer";
import '../Styles/style.css';
import python from '../Assets/python.png'
import AE from '../Assets/AE.png'
import blender from '../Assets/blender.png'
import canva from '../Assets/canva.png'
import capcut from '../Assets/capcut.png'
import css from '../Assets/css.png'
import vscode from '../Assets/vscode.png'
import davinci from '../Assets/davinci-resolve-12-logo-black-and-white.png'
import figma from '../Assets/figma.png'
import html from '../Assets/html.png'
import photoshop from '../Assets/photoS.png'
import github from '../Assets/github copy.png'
import Fb from '../Assets/fb.png';
import Gmail from '../Assets/gmail.png';
import TT from '../Assets/tt.png';
import IG from '../Assets/ig.png';
import github2 from '../Assets/github.png';
import phone from '../Assets/phone.png';

const About=()=> {
    return (
        <div>
            <NavBar/>
            <section className="about" id="aboutSection">

                <div className="jobContainer">
                    <div className="futureJOB">MY SOCIALS</div>
                    <div className="socialItem">
                                                <img src={Fb} alt="Facebook Icon" className="icon" />
                                                <span><a href="https://www.facebook.com/johnrey.mansilungan" target="_blank" rel="noreferrer">Johnrey Mansilungan</a></span>
                                            </div>
                                            <div className="socialItem">
                                                <img src={Gmail} alt="GMAIL Icon" className="icon" />
                                                <span><a href="mailto:mansilungan.johnrey.dll@gmail.com" target="_blank" rel="noreferrer">mansilungan.johnrey.dll@gmail.com</a></span>
                                            </div>
                                            <div className="socialItem">
                                                <img src={TT} alt="Tiktok Icon" className="icon" />
                                                <span><a href="https://www.tiktok.com/@johnrey.py?_t=8rsoAujBC7u&_r=1" target="_blank" rel="noreferrer">@johnrey.py</a></span>
                                            </div>
                                            <div className="socialItem">
                                                <img src={IG} alt="Instagram Icon" className="icon" />
                                                <span><a href="https://www.instagram.com/johnrxyz_/" target="_blank" rel="noreferrer">@johnrxyz_</a></span>
                                            </div>
                                            <div className="socialItem">
                                                <img src={github2} alt="GitHub Icon" className="icon" />
                                                <span><a href="https://github.com/Johnrxyz" target="_blank" rel="noreferrer">Johnrxyz</a></span>
                                            </div>
                                            <div className="socialItem">
                                                <img src={phone} alt="Phone Icon" className="icon" />
                                                <span><a href="tel:09686282520">09686282520</a></span>
                                            </div>
                </div>


                <div className="jobContainer">
                    <div className="futureJOB">WHY SHOULD YOU HIRE ME?</div>

                    <p>I am a skilled video and photo editor with over five years of hands-on experience. 
                        I also have knowledge on software and web development. My 
                        background includes a strong technical foundation and creative expertise, which I believe 
                        align perfectly with the needs of your company. My ability to adapt, learn quickly, and 
                        ollaborate effectively makes me a valuable asset for any team.</p>
                </div>

                <div className="jobContainer">
                    <div className="futureJOB">WORK EXPERIENCE</div>

                    <p>Currently, I work as a freelance video editor and UI designer while pursuing my studies. 
                        My freelance projects have allowed me to refine my skills, manage diverse client needs,
                        and deliver quality work under tight deadlines. This experience has also equipped me with 
                        problem-solving abilities and a keen eye for detail, ensuring that each project meets or 
                        exceeds expectations.</p>
                </div>

                <div className="jobContainer">
                    <div className="futureJOB">CAREER INTERESTS</div>

                    <p>I am passionate about leveraging my skills to contribute to innovative and impactful projects. 
                        I am actively seeking opportunities in:</p>

                    <div className="interest">
                        ⟶ FULL STACK WEB DEVELOPMENT
                    </div>

                    <div className="interest">
                        ⟶ GAME DEVELOPMENT 
                    </div>

                    <div className="interest">
                        ⟶ WEBSITE DESIGN
                    </div>

                    <div className="interest">
                        ⟶ MACHINE LEARNING
                </div>

                </div>

                    <div className="skillContainer">
                    <div className="skill">19 YEARS OF LIVING, <br/>MY CAPABILITIES <br/>SO FAR</div>
                    <div className="skillContent">
                        <div className="column">
                            <p>Web Development</p>
                            <p>UI/UX Design</p>
                            <p>AI tools</p>
                            <p>Programming</p>
                            <p>Game Development</p>
                            <p>Think Critically</p>
                            </div>
                
                        <div className="column">
                            <p>Sound Design</p>
                            <p>Video Editing</p>
                            <p>Photo Editing</p>
                            <p>PPT Making</p>
                            <p>Drive</p>
                            <p>Listen</p>
                        </div>
                
                        <div className="column">
                            <p>Documentary</p>
                            <p>Virtual Assistant</p>
                            <p>Communicate</p>
                            <p>Advice</p>
                        </div>
                    </div>
                </div>

                <div className="toolContainer">
                    <div className="toolContent">
                        <div className="toolTitle">TOOLS I'M FAMILIAR WITH</div>
                        <div className="toolsGrid">
                        <div className="toolLogo"><img src={python} alt="python logo"/><p>Python</p></div>
                        <div className="toolLogo"><img src={css} alt="css logo"/><p>CSS</p></div>
                        <div className="toolLogo"><img src={html} alt="html logo"/><p>HTML</p></div>
                        <div className="toolLogo"><img src={vscode} alt="Visual Studio COde logo"/><p>Visual Studio Code</p></div>
                        <div className="toolLogo"><img src={AE} alt="After Effects logo"/><p>After Effects</p></div>
                    <div className="toolLogo"><img src={photoshop} alt="photoshop logo"/><p>Photoshop</p></div>
                        <div className="toolLogo"><img src={figma} alt="figma logo"/><p>Figma</p></div>
                        <div className="toolLogo"><img src={github} alt="github logo"/><p>github</p></div>
                        <div className="toolLogo"><img src={capcut} alt="CapCut logo"/><p>CapCut</p></div>
                        <div className="toolLogo"><img src={blender} alt="Blender logo"/><p>Blender</p></div>
                        <div className="toolLogo"><img src={davinci} alt="DaVinci Resolve logo"/><p>DaVinci Resolve</p></div>
                        <div className="toolLogo" style={{paddingTop: '15%;'}}><img src={canva} alt="Canva logo"/><p>Canva</p></div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
        
    )
}
export default About;