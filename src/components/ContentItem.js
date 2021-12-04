
const ContentItem = (props) => {
    return(
        <div className={'call__connection--item'}>
            <img className={'img'} src={props.src}/>
            <div className={'info'}>
                <h2>Maxim Markovich</h2>
                <h3>Design - Senior UX/UI Designer</h3>
            </div>
            <button className={'call--button'}>CALL</button>
        </div>
    )
}
export default ContentItem