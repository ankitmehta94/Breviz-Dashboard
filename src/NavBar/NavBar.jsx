
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'
function NavBar({ sidebarOpen, openSidebar }) {
    return (
        <nav className="navbar">
          <div className="nav_icon" onClick={() => openSidebar()}>
            <i className="fa fa-bars" aria-hidden="true"></i>
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
            <FontAwesomeIcon size="lg" icon={faUserAstronaut}  />
            </a>
          </div>
        </nav>
      );
}

export default NavBar;
