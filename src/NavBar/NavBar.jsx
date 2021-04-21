
import style from './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAstronaut, faBars } from '@fortawesome/free-solid-svg-icons'
function NavBar({ sidebarOpen, openSidebar }) {
    return (
        <nav className={style['navbar']}>
          <div className={style['nav_icon']} onClick={() => openSidebar()}>
          <FontAwesomeIcon size="lg" icon={faBars}  style={{color:'#2568c3'}}/>
          </div>
          <div className={style['navbar__left']}>
          </div>
          <div className={style['navbar__right']}>
            <a href="#">
              {/* <i className={style['fa fa-search" aria-hidden="true"></i> */}
            </a>
            <a href="#">
              {/* <i className={style['fa fa-clock-o" aria-hidden="true"></i> */}
            </a>
            <a href="#!">
            <FontAwesomeIcon size="lg" icon={faUserAstronaut}  style={{color:'#2568c3'}}/>
            </a>
          </div>
        </nav>
      );
}

export default NavBar;
