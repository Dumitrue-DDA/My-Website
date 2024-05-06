
function Footer() {
    return (
        <footer>
            <div className="footer-left">
                <p>
                    Last modified 6 May 2024
                </p>
                <hr style={{marginRight: 50}}/>
                <p>
                    The purpose of this website is for me to learn to use the React library  
                </p>
            </div>
            <div className="footer-right">
                <p>
                        Contact information:<br />
                    <span><img src={require("./assets/email.png")} alt={"email-icon"}/>
                        Email: despina.andrei2003@gmail.com
                    </span>
                    <span><img src={require("./assets/telephone.png")} alt={"phone-icon"}/>
                        Phone number: (+40)737 631 851
                    </span>
                    <span><img src={require("./assets/linkedin.png")} alt={"linkedin-icon"}/> Linkedin:
                    <a href="https://www.linkedin.com/in/dumitru-andrei-despina/">
                        www.linkedin.com/in/dumitru-andrei-despina
                    </a></span>
                </p>
            </div>
        </footer>
    );
}

export default Footer