import './Global.css';
function Banner(props) {
    return (
        <div id="banner">
            <div className='container'>
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
                <a href={props.link}>{props.text}</a>
            </div>
        </div>
    );
}

export default Banner;