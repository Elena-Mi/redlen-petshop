import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import ScrollButton from "../ScrollButton/ScrollButton";
import Routers from "../routes/Routes";

const Main = () => {
    return(
        <div>
            <Header/>
            <div>
                <Routers/>
            </div>
        
    
            <Footer/>
            <ScrollButton/>
        </div>
    )
}
export default Main;
