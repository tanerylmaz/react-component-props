import './SiteMenu.css';

function SiteMenu() {
    return (
        <div id='SiteMenu'>
            <div className='container'>
                <img src='https://preview.colorlib.com/theme/hosting/img/logo.png.webp' />
                <ul>
                    <li>
                        <a href='javascript:void(0)'>Anasayfa</a>
                    </li>
                    <li>
                        <a href='javascript:void(0)'>Portfolyo</a>
                    </li>
                    <li>
                        <a href='javascript:void(0)'>Blog</a>
                    </li>
                    <li>
                        <a href='javascript:void(0)'>İletişim</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SiteMenu;