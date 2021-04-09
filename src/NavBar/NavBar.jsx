
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAstronaut, faBars } from '@fortawesome/free-solid-svg-icons'
function NavBar({ sidebarOpen, openSidebar }) {
    return (
        <nav className="navbar">
          <div className="nav_icon" onClick={() => openSidebar()}>
          <FontAwesomeIcon size="lg" icon={faBars}  style={{color:'#3ea175'}}/>
          </div>
          <div className="navbar__left">
          </div>
          <div className="navbar__right">
            <a href="#">
              {/* <i className="fa fa-search" aria-hidden="true"></i> */}
            </a>
            <a href="#">
              {/* <i className="fa fa-clock-o" aria-hidden="true"></i> */}
            </a>
            <a href="#!">
            <FontAwesomeIcon size="lg" icon={faUserAstronaut}  style={{color:'#3ea175'}}/>
            </a>
          </div>
        </nav>
      );
}

export default NavBar;
