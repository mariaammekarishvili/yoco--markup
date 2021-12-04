import Draggable from 'react-draggable';
import monitor from '../assets/monitor.png'
import microphone from '../assets/microphone.png'
import CallOptions from "../components/CallOptions";
import camera from  "../assets/video-camera.png"
import add from "../assets/addition.png"
import lock from "../assets/lock.png"
import phone from "../assets/phone.png"
import ContentItem from "../components/ContentItem";
import {useState} from "react";

const CallWindow = () => {
   const [openContact,setOpenContent] = useState(false)

   const openAction = () => {
       setOpenContent(!openContact)
    }

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
                        <CallOptions src={add} add func={openAction} />
                        <CallOptions src={lock}/>
                        <CallOptions src={phone} off/>
                    </div>
                </div>
                {openContact ?
                <div className={'call__connection--box'} >
                    <div className={'call__connection--header'}>
                        <input type={'text'} placeholder={'enter name'}/>
                        <div>Favorites</div>
                        <div>Recent</div>
                    </div>
                        <div className={'call__connection--content'}>
                            <ContentItem
                                src={'https://image.shutterstock.com/image-photo/close-young-smiling-man-casual-260nw-1521512921.jpg'}/>
                            <ContentItem
                                src={'https://www.the-sun.com/wp-content/uploads/sites/6/2020/11/NINTCHDBPICT000622320037.jpg'}/>
                            <ContentItem
                                src={'https://www.westend61.de/images/0001529325pw/handsome-male-doctor-against-gray-wall-in-hospital-GIOF11522.jpg'}/>
                            <ContentItem
                                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR40LOSr_WvREnYlZu2W9dRcDM5wWvOdKAdLL87SoTedgVisqn_KaHlKZZFqlJeLoyMYjw&usqp=CAU'}/>
                            <ContentItem
                                src={'https://storage.googleapis.com/ares-profile-pictures/hd/doctor.negrete-db6d6246d82fd6a9ee9e29c02ccb79c7_hd.jpg'}/>
                        </div>
                </div>
                    :''
                }
            </div>
        </Draggable>
    )
}

export default CallWindow;