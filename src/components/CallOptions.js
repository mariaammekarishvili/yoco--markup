import monitor from "../assets/monitor.png";
import arrow from "../assets/arrow.png"

const CallOptions = (props) => {
    return(
        <div className={(props.off ?  'end-call' : '')}>
            <img src={props.src} className={'img call__option--icon'} onClick={props.add ? props.func : ''}/>
            {
                props.options ?   <img src={arrow} className={'img option__icon--arrow'}/> : ''
            }
        </div>
    )
}
export default CallOptions;