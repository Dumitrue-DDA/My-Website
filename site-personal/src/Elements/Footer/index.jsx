import "./index.css"

import phoneIcon from "../../assets/telephone.png"
import emailicon from "../../assets/email.png"
import linkedInIcon from "../../assets/linkedin.png"

function Footer() {
    return (
        <footer>
            <div className="footer-left">
                <p> Last modified: 17th of May 2024
                    <hr />
                    The main purpose of this website was learning to use the React library </p> </div>
            <div className="footer-right">
                       <p> Contact information:<hr />
                    <span> <img src={emailicon} alt={"email-icon"}/>
                        Email: despina.andrei2003@gmail.com
                    </span>
                    <span> <img src={phoneIcon} alt={"phone-icon"}/>
                        Phone number: (+40)737 631 851
                    </span>
                    <span> <img src={linkedInIcon} alt={"linkedin-icon"}/>
                    Linkedin: <a href="https://www.linkedin.com/in/dumitru-andrei-despina/">
                        www.linkedin.com/in/dumitru-andrei-despina
                    </a> </span> </p> </div>
        </footer>
    );
}
export default Footer