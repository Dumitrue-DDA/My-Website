import "./Home.css"

function Home() {
    return(
        <div id="main-container">
            <div id="main-content">
                <h1>My Name is Dumitru-Andrei Despina</h1>
                <h3>Welcome to my website!</h3>
                <article id="about-me">
                    <div>
                        <img src={require("../assets/Me-Maramures.jpeg")} alt={""}/>
                    </div>
                    <div>
                        <h3>About Me</h3>
                        <span>I am a student of Computer Science for Economics</span> <hr />
                        <span>
                            Currently looking for oportunities to learn in a practical way and  go beyong what 
                            I'm taught in university.<br />
                            I made this website as a passion project to apply what I've learned so far in highschool and
                            university about web-dev and also learn about creating a website using the React library. <br />
                            On this website, you'll be able to learn about my educational and professional experience,
                            but also my passions. <br /> Also, I'll place my future projects here, to make them easily
                            accesible to anyone who wants to view them.
                        </span>
                    </div>
                </article>
                <hr />
                <article id="two-column-article">
                    <div></div>
                </article>
            </div>
        </div>
    );
}

export default Home;