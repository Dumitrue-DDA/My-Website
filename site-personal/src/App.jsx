import Homepage from "./Pages/Home-Page";
import Header from "./Elements/Header"
import Footer from "./Elements/Footer";
import Home from "./Pages/Home-Page"
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    // <BrowserRouter>
    //     <Routes>
    //       <Route index elemnt={<>
    //         <Header/>
    //         <Home/>
    //         <Footer/>
    //       </>}/>
    //     </Routes>
    // </BrowserRouter>
    <Homepage />
  );
}

export default App;