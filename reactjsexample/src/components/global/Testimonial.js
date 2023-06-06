function Testimonial(props) {
    return (
        <div id="testimonial">
            <div className="container">
                <div className="row">
                    <div className="information col-3">
                        <h3>{props.name}</h3>
                        <h6>{props.title}</h6>
                    </div>
                    <div className="detail col-9">
                        {props.content}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Testimonial;