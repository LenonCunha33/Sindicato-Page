import EighthSection from "./EighthSection/page";

import FirstSection from "./FirstSection/page";
import FourthSection from "./FourthSection/page";
import Navbar from "./Navbar/navbar";
import SecondSection from "./SecondSection/page";

import SixthSection from "./SixthSection/page";
import ThirdSection from "./ThirdSection/page";
import Footer from "./footer/page";



const LandingPage = () => {
    return ( <div>
      <Navbar/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      
      <SixthSection/>

      <EighthSection/>
      <Footer/>
      
    </div> );
}
 
export default LandingPage;