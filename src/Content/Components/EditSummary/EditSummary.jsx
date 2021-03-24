import {Component} from 'react';
import RichEditor from '../RichEditor/RichEditor'
import './EditSummary.css';



import { Animated } from 'react-animated-css'
class EditSummary extends Component{
    render(){
      console.log("here")
      return (<Animated className={'editSummary'} animationIn="bounceInLeft" animationOut="bounceOutLeft" isVisible={this.props.isVisible}>
          <div className={'transcripDiv'} >{this.props.Transcripts}</div>
          <RichEditor Summary={this.props.Summary}/>
      </Animated>);
    }
  }
export default EditSummary