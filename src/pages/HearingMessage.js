import audio from '../assets/audio.mp4'
import {useState} from "react";


const HearingMessage = () => {
    // let audio = new Audio('https://www.youtube.com/watch?v=2sc-4a-3NFs')

    const [start,setStart] = useState()

    const playAudio = () => {
        new Audio(audio).play();
        setStart('true')
    }


    return(
        <div className={'message__page'}>
            <div className={'message__box'}>
                <img className={'img message__img'} src={'https://media.istockphoto.com/photos/self-portrait-picture-of-a-man-on-the-top-of-the-mountain-picture-id1209510443?k=20&m=1209510443&s=612x612&w=0&h=naqeTqBD7New3EanvizXyXrRR5V38ybXTkktYnsSrmQ='}/>
                <div className={'message__info--content'}>
                    <h2 className={'message__author'}>Shmulik Grizim</h2>
                    <h4 className={'message__type'}>Sent a voice message</h4>
                    <div className={'message__button--box'}>
                        <div className={'message__voice--box'}>
                            <svg  onClick={playAudio} className={'voice__box--icon' + (start ? ' display--none' : '')} width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.11183 0.21356C1.18862 -0.370501 0 0.312333 0 1.42675V10.5733C0 11.6877 1.18863 12.3705 2.11183 11.7864L9.34058 7.21318C10.2198 6.65694 10.2198 5.34306 9.34058 4.78682L2.11183 0.21356Z" fill="#626A84"/>
                            </svg>
                            <svg className={(start ? 'voice__box--icon' :  'display--none')} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.3089 4.44482H6.68672C5.41646 4.44482 4.38672 5.47457 4.38672 6.74482V33.2559C4.38672 34.5262 5.41646 35.5559 6.68672 35.5559H14.3089C15.5792 35.5559 16.6089 34.5262 16.6089 33.2559V6.74482C16.6089 5.47457 15.5792 4.44482 14.3089 4.44482Z" fill="white"/>
                                <path d="M33.1996 4.44482H25.5773C24.3071 4.44482 23.2773 5.47457 23.2773 6.74482V33.2559C23.2773 34.5262 24.3071 35.5559 25.5773 35.5559H33.1996C34.4698 35.5559 35.4996 34.5262 35.4996 33.2559V6.74482C35.4996 5.47457 34.4698 4.44482 33.1996 4.44482Z" fill="white"/>
                            </svg>
                            <p>0:17</p>
                        </div>
                        <button className={'message__button--dismiss'}>Dismiss</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  HearingMessage