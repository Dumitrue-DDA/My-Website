import noResult from "../../assets/no-results.png"
import Header from "../../Elements/Header"
import Footer from "../../Elements/Footer"

const styling = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'var(--background-color, #f8f9fa)',
  color: 'Red',
  fontSize: '24px',
  margin: '50px 0',
  height: '100vh'
}

function ErrorPage() {
    return(
        <body>
            <Header/>
            <div style={styling}>
                <img src={noResult} alt="Error Image" style={{ marginBottom: '20px', width: '25%', height: 'auto' }}/>
                ERROR 404: Page not found
            </div>
            <Footer/>
        </body>
    ); 
}

export default ErrorPage;