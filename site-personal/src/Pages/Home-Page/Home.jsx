import "./Home.css"

import meMaramures from "../../assets/Me-Maramures.jpeg"
import meCityTour from "../../assets/city-tour.png"
import esnStar from "../../assets/esn-star.png"
import rauLogo from "../../assets/URA-logo.png"
import uhkLogo from "../../assets/uhk-logo.png"
import lttLogo from "../../assets/LTT-logo.png"

function Home() {
    return(
        <div id="main-container">
            <div id="main-content">
                <h1>My Name is Dumitru-Andrei Despina</h1>
                <h3>Welcome to my website!</h3>
                <article id="about-me-article">
                    <div id="img-container">
                        <img src={meMaramures} alt={"me"} id="my-image"/>
                    </div>
                        <h2>About Me</h2>
                        <hr />
                        <p>
                            I am a student of Computer Science for Economics, currently looking for oportunities to learn in a 
                            practical way and  go beyong what I'm taught in university.<br />
                            I made this website as a passion project to apply what I've learned so far in highschool and
                            university about web-dev and also learn about creating a website using the React library. <br />
                            On this website, you'll be able to learn about my educational and professional experience,
                            but also my passions. <br /> Also, I'll place my future projects here, to make them easily
                            accesible to anyone who wants to view them.
                        </p> </article>
                        <article>
                        <h2>Skills</h2> <hr />
                        <h3>Programming:</h3> 
                        <div id="programming-skills">
                            <ul id="languages-list">
                                <li><label>C++</label></li>
                                <li><label>C#</label></li>
                                <li><label>Java</label></li>
                                <li><label>SQL (using Microsoft SMSS)</label></li>
                                <li><label>HTML + CSS</label></li>
                                <li><label>Javascript (React.js)</label></li>
                                <li><label>Visual Basic</label></li>
                                <li><label>Python</label></li>
                            </ul>
                            <ul id="languages-bars">
                                <li><progress value={5} max={5}/></li>
                                <li><progress value={4} max={5}/></li>
                                <li><progress value={4} max={5}/></li>
                                <li><progress value={3} max={5}/></li>
                                <li><progress value={5} max={5}/></li>
                                <li><progress value={3} max={5}/></li>
                                <li><progress value={4} max={5}/></li>
                                <li><progress value={2} max={5}/></li>
                            </ul> </div>
                        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr'}}>
                        <div style={{marginLeft: '15px'}}>
                            <h3>Digital Skills</h3>
                                Microsoft Office, Adobe Photoshop, Adobe Premiere Pro, SAS Enterprise Guide
                        </div>
                        <div>
                            <h3>Languages</h3>
                                Romanian: <b>Native</b><br/>
                                English: <b>B2</b>
                        </div> </div> </article>
                    <article>
                        <img src={meCityTour} alt="me-with-the-ESN-flag" 
                            style={{width:'30%',minWidth:'200px', float:'right',
                            filter:"drop-shadow(10px 5px var(--darkgreen))"}}/>
                        <h2>Volunteering Experience</h2>
                        <div>
                            <a href="https://unibucharest.esn.ro/" rel="noreferrer noopener" target="_blank">
                                <img src={esnStar} alt="ESN-Logo" className="logoLink" /></a>
                            <span><i>March 2024 - Present</i></span>
                            <h3>ESN UniBucharest</h3>                           
                            <span><i>Bucharest, Romania</i></span>
                            <ul>
                                <li>Part of the events department.</li>
                                <li>Working alongside the other volunteers to make great experiences for the 
                                    Erasmus students in Bucharest.</li>
                                <li>Participated at the "Escape to Vama Veche" national event.</li>
                            </ul>
                        </div>
                    </article>
                    <article>
                        <h2>Education</h2>
                        <a href="https://www.rau.ro/?lang=en" rel="noreferrer noopener" target="_blank">
                            <img src={rauLogo} alt="RAU-Logo" className="logoLink" /></a>
                        <span><i>2022 - Present</i></span>
                        <h3>Bachelor of Computer Science for Economics</h3>
                        <span><i>Faculty of Computer Science for Business Management, Romanian-American University,
                        Bucharest, Romania</i></span>
                        <ul>
                            <li>Study Field: Computer Science, Cybernetics, Statistics and Economics.</li>
                            <li>Taking optional courses in management.</li>
                            <li>Finished the first year with an average grade of 88.5%.</li>
                        </ul>
                        <hr />
                        <a href="https://www.uhk.cz/" rel="noreferrer noopener" target="_blank">
                            <img src={uhkLogo} alt="UHK-Logo" className="logoLink" /></a>
                        <span><i>September 2023 - January 2024</i></span>
                        <h3>Erasmus Mobility</h3>
                        <span><i>Faculty of Informatics and Management, University of Hradec Králové,
                        Hradec Králové, Czech Republic</i></span>
                        <ul>
                            <li>Finished the semester with a grade of 84%, having taken 4 out of 5 of the exams in the
                                span of just 2 days.</li>
                            <li> Significantly improved my communication skills (especially in English) and adaptability.</li>
                        </ul>
                        <hr />
                        <a href="https://www.rau.ro/?lang=en" rel="noreferrer noopener" target="_blank">
                            <img src={rauLogo} alt="RAU-Logo" className="logoLink" /></a>
                        <span><i>21 - 25 November 2022</i></span>
                        <h3>“Introduction to Information Systems” Course</h3>
                        <span><i>Held by Professor Weiqi Li, Ph.D. from the University of Michigan-Flint, USA at the
                            Romanian-American University, Bucharest, Romania</i></span>
                        <ul>
                            <li>Learned about the fundamental concepts of Information Systems
                                 and their role in an organization.</li>
                            <li>Learned about Database Management Systems and Enterprise Resource Planning Systems.</li>
                        </ul>
                        <hr />
                        <a href="https://www.liceultraianbucuresti.ro/" rel="noreferrer noopener" target="_blank">
                            <img src={lttLogo} alt="LTT-Logo" className="logoLink" /></a>
                        <span><i>2018 - 2022</i></span>
                        <h3>Mathematics and Informatics Profile High School</h3>
                        <span><i>“Traian” Theoretical High School, Bucharest, Romania</i></span>
                        <ul>
                            <li>Started my passion for programming and deepened my passion for computers.</li>
                            <li>Participated at a interdisciplinary science competition (“Cuza Smart” 2019) and a
                                mathematics symposium (“Fascinating Mathematics” 2019).</li>
                        </ul>
                    </article>
                </div>
            </div>
    );
}

export default Home;