import SiteMenu from "./menu/SiteMenu";
import TopBar from "./topbar/TopBar";

function Header() {
    return(
        <div id="header">
            <TopBar/>
            <SiteMenu />
        </div>
    );
}

export default Header;