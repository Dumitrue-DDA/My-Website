import "./Home.css"

function Home() {
    return(
        <div id="main-container">
            <div id="main-content">
                <h1>My Name is Dumitru-Andrei Despina</h1>
                <h3>Welcome to my website!</h3>
                <article id="about-me-article">
                    <div id="img-container">
                        <img src={require("../assets/Me-Maramures.jpeg")} alt={""} id="my-image"/>
                    </div>
                        <h3>About Me</h3>
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
                        <h3>Skills</h3> <hr />
                        <h4>Programming:</h4> 
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
                        <div>
                        <h4>Digital Skills</h4>
                            Microsoft Office, Adobe Photoshop, Adobe Premiere Pro, SAS Enterprise Guide
                        </div>
                        <div>
                        <h4>Languages</h4>
                        
                            Romanian: <b>Native</b><br/>
                            English: <b>B2</b>
                        </div> </div> </article>
                    <article>
                        <h3>Volunteering Experience</h3> <hr />

                    </article>
                </div>
            </div>
    );
}

export default Home;