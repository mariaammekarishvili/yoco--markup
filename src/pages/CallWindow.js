import Draggable from 'react-draggable';
import monitor from '../assets/monitor.png'
import microphone from '../assets/microphone.png'
import CallOptions from "../components/CallOptions";
import camera from  "../assets/video-camera.png"
import add from "../assets/addition.png"
import lock from "../assets/lock.png"
import phone from "../assets/phone.png"

const CallWindow = () => {
    return(
        <Draggable>
            <div className={'call-window'}>
                <div className={'call-window--box'}>
                    <div className={'call__img--box'}>
                        <img className={'call__participant--img img'} src={'https://media.istockphoto.com/photos/young-happy-woman-takes-a-selfie-on-the-top-of-the-mountain-in-the-picture-id1044989054?k=20&m=1044989054&s=170667a&w=0&h=iJsfR5A0s1CdwoLj7StON56oIS3HktHU-_34aO1Y9gQ='}/>
                        <img className={'call__participant--img img'} src={'https://media.istockphoto.com/photos/self-portrait-picture-of-a-man-on-the-top-of-the-mountain-picture-id1209510443?k=20&m=1209510443&s=612x612&w=0&h=naqeTqBD7New3EanvizXyXrRR5V38ybXTkktYnsSrmQ='}/>
                    </div>
                    <div className={'call__option--box'}>
                        <CallOptions src={monitor}/>
                        <CallOptions src={microphone} options/>
                        <CallOptions src={camera} options/>
                        <CallOptions src={add}/>
                        <CallOptions src={lock}/>
                        <CallOptions src={phone} off/>
                    </div>
                </div>
                <div className={'call__connection--box'}>
                    <div className={'call__connection--header'}>
                        <input type={'text'}/>
                        <div>Favorites</div>
                        <div>Recent</div>
                    </div>
                </div>
            </div>
        </Draggable>
    )
}

export default CallWindow