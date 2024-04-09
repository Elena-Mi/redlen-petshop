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
            <ScrollButton/>
        </div>
    )
}
export default Main;
