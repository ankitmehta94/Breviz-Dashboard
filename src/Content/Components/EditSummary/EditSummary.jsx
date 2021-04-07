import './EditSummary.css';
import Title from '../Title/Title.jsx'
import TranscriptContainer from './TranscriptContainer.jsx'
import { Animated } from 'react-animated-css'
import {Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SummaryListActions from '../SummaryList/SummaryListActions'
console.log(SummaryListActions,'<-----------------SummaryListActions')

// import RichEditor from '../RichEditor/RichEditor'
// import {
//   ContentState,
//   EditorState,
//   // convertFromHTML as convertFromHTMLClassic,
//   // convertToRaw,
//   // convertFromRaw,
// } from 'draft-js';
// import convertFromHTMLModern from 'draft-js/lib/convertFromHTMLToContentBlocks';
// import gkx from 'draft-js/lib/gkx';
// import {convertToHTML} from 'draft-convert';
// const fromHTML = gkx('draft_refactored_html_importer')
//   ? convertFromHTMLModern
//   : convertFromHTMLClassic;




class EditSummary extends Component{
  constructor(props){
    super(props)
    // const editorState = EditorState.createWithContent(ContentState.createFromText(props.SummaryText))
    // console.log(editorState,'<-----------------editorState')
    this.state = {
      // mode: 'rawContent',
      // editorState: editorState,
      textValue: this.props.SummaryText,
    };
  }
  setTextValue = (event) => {
    this.setState({
      textValue:event.target.value
    })
  }
  navigateTo = () => {
    console.log(this.props,'<-----------------this.props.changeContent')
    this.props.changeContent('summaryList',{})
    this.props.updateSummaryList({
      summaryId: this.props.summaryId,
      newSummaryText: this.state.textValue
    })
  }
    render(){
      console.log("here")
      return (<Animated className={'editSummary'} animationIn="bounceInLeft" animationOut="bounceOutLeft" isVisible={this.props.isVisible}>
            <Title titleText={'EDIT SUMMARY'} navigateTo={this.navigateTo}/>
          <TranscriptContainer Transcripts={this.props.Transcripts} summary={this.state.textValue} clickedText={this.props.clickedText}/>
          <textarea className={'textAreaCss'} value={this.state.textValue} rows={20} onChange={(event) => this.setTextValue(event)}/>
          {/* <RichEditor SummaryText={this.props.SummaryText} summaryId={this.props.summaryId} onChange={(e)=>{console.log(e)}} /> */}
      </Animated>);
    }
  }

  const mapStateToProps = (state) => {
    const { SummaryListReducer = {} } = state;
    // console.log(SummaryListReducer, "<-----------------SummaryListReducer");
    const {clickedText} = SummaryListReducer
    return {
      clickedText
    }
  };
  const mapDispatchToProps = (dispatch) => ({
    updateSummaryList: bindActionCreators(SummaryListActions.updateSummaryList, dispatch),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditSummary);
