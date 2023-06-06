import SocialIcons from '../../global/SocialIcons';
import './TopBar.css';

function TopBar() {
    return (
        <div id="topbar">
            <div className="container">
                <div>
                    <span>
                        <a href="tel:+905319244992">+90 531 924 4992</a>
                    </span>
                    <span>
                        <a href="mailto:yilmaz.taner.1100@gmail.com">yilmaz.taner.1100@gmail.com</a>
                    </span>
                </div>
                <div>
                   <SocialIcons icon="facebook"/>
                   <SocialIcons icon="twitter"/>
                   <SocialIcons icon="instagram"/>
                   <SocialIcons icon="youtube"/>
                   <SocialIcons icon="linkedin"/>
                </div>
            </div>
        </div>
    );
}

export default TopBar;