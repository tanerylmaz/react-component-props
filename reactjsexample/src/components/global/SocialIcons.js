function SocialIcons(props) {
    var pp=props.icon;
    pp="bi bi-"+pp;

    return (
        <a href="javascript:void(0)">
            <i className={pp}></i>
        </a>
    );
}
export default SocialIcons;