
import './Sidebar.css';
import { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import logo from '../Assets/brelogo.svg'
import SidebarActions from './SidebarActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
const { updateSummaryKey } = SidebarActions
console.log(SidebarActions)
  class MeetingLink extends Component {
    onClick = () => {
      const {name, onMeetinClick, disable} = this.props;
      console.log(name,onMeetinClick,'<-----------------onMeetinClick')
      if(!disable)
        onMeetinClick(name)
     
    }
render(){
  const {name, active} = this.props;
  let activeClass = '';
  if(active){
    activeClass = ' active_menu_link'
  }

  return (
    <div className={"sidebar__link"+activeClass}>
    <i className="fa fa-home"></i>
    <a href="#" onClick={this.onClick}>{name}</a>
  </div>
  )
}
}


class Sidebar extends Component {
  createMeetingList = () => {
    const { SummaryListObject, SummaryKey, updateSummaryKey, clickedText } = this.props;
    // console.log(SummaryListObject);
    // const SumObj = SummaryListObject[SummaryKey].summaries
    const disable = clickedText?true:false
    const htmlArray =  Object.keys(SummaryListObject).map((sumKey, sumIndex) => {
      const active = SummaryKey === sumKey
      return <MeetingLink name={sumKey} active={active} onMeetinClick={updateSummaryKey} disable={disable}/>
    });
    console.log(htmlArray,'<-----------------htmlArray')
    return (<Fragment>{htmlArray}</Fragment>)
  }
  render(){
    const Meetings = this.createMeetingList()
    console.log('Meetings');
    console.log(this.props.sidebarOpen,'<-----------------this.sidebarOpen')
    return (
      <div className={this.props.sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
        <div className="sidebar__title">
          <div className="sidebar__img">
            <img className={'sidebar__logo'} src={logo} alt="logo" />
            <h1>Breviz</h1>
            <div></div>
            <div className={'sidebar_cross'}>  <FontAwesomeIcon size="lg" icon={faTimes}  style={{color:'#3ea175'}} onClick={this.props.closeSidebar}/></div>
          </div>
        </div>
  
        <div className="sidebar__menu">
      {Meetings}
        </div>
      </div>)
  }
}

const mapStateToProps = (state) => {
  const { SummaryListReducer = {} } = state;
  console.log(SummaryListReducer, "<-----------------SummaryListReducer");
  const {SummaryListObject, SummaryKey, clickedText} = SummaryListReducer
  return {
    SummaryListObject: SummaryListObject,
    SummaryKey: SummaryKey,
    clickedText: clickedText,

  }
};
const mapDispatchToProps = (dispatch) => ({
  updateSummaryKey: bindActionCreators(updateSummaryKey, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

