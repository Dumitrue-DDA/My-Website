import "./index.css"

import phoneIcon from "../../assets/telephone.png"
import emailicon from "../../assets/email.png"
import linkedInIcon from "../../assets/linkedin.png"
import githubIcon from "../../assets/github.png"

function Footer() {
    return (
        <footer>
            <div className="footer-left">
                <p> Last modified: 17th of May 2024
                    <hr />
                    I wanted to have a place where I can easily showcase my experience and projects, so I started making 
                    my own website. It's made using React (Vite). </p> </div>
            <div className="footer-right">
                       <p> Contact information:<hr />
                    <span> <img src={emailicon} alt={"email-icon"}/>
                        Email: despina.andrei2003@gmail.com
                    </span>
                    <span> <img src={phoneIcon} alt={"phone-icon"}/>
                        Phone number: (+40)737 631 851
                    </span>
                    <span> 
                        <ul id="button-container">
                            <li className="button">
                                <a href="https://www.linkedin.com/in/dumitru-andrei-despina/" rel="noreferrer noopener" target="_blank">
                                    <img src={linkedInIcon} alt={"linkedin"}/></a>
                            </li>
                            <li className="button">
                                <a href="https://github.com/Dumitrue-DDA" rel="noreferrer noopener" target="_blank">
                                    <img src={githubIcon} alt={"github"}/></a>
                            </li>
                        </ul>
                    </span> </p> </div>
        </footer>
    );
}
export default Footer