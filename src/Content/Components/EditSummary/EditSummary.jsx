import {Component} from 'react';
import RichEditor from '../RichEditor/RichEditor'
import './EditSummary.css';
import Title from '../Title/Title.jsx'


import { Animated } from 'react-animated-css'
class EditSummary extends Component{
    render(){
      console.log("here")
      return (<Animated className={'editSummary'} animationIn="bounceInLeft" animationOut="bounceOutLeft" isVisible={this.props.isVisible}>
            <Title titleText={'EDIT SUMMARY'} navigateTo={this.navigateTo}/>
          <div className={'transcripDiv'} >{this.props.Transcripts}</div>
          <RichEditor SummaryText={this.props.SummaryText} summaryId={this.props.summaryId} />
      </Animated>);
    }
  }
export default EditSummary