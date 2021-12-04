import './App.css';
import CallWindow from "./pages/CallWindow";
import HearingMessage from "./pages/HearingMessage";

const Main = () => {
    return(
        <div className={'main'}>
            <CallWindow/>
            <HearingMessage/>
        </div>
    )
}

export default Main;