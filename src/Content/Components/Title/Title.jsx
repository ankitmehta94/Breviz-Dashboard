
import './Title.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Title({titleText, toggleContentVisibility}) {
  return (
    <div className="title">
      {/* <FontAwesomeIcon icon={faCoffee} /> */}
      <span onClick={toggleContentVisibility} >{titleText}</span>  
    </div>
  );
}

export default Title;
