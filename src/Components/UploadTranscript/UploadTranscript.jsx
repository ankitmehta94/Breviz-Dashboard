import './UploadTranscript.css';
import Title from '../Title/Title.jsx'
import { Animated } from 'react-animated-css'
import {Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import UploadActions from './UploadActions'
import PreprocessingUtils from './PreprocessingUtils.js'
console.log(UploadActions,'<-----------------UploadActions')

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




class UploadTranscript extends Component{
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
  uploadFile = async () => {
    const {sendAndSetTranscriptJSON} = this.props;
    // const array = await PreprocessingUtils.getJSON()
    // console.log(array,'<-----------------array')
    // console.log(sendAndSetTranscriptJSON,'<-----------------sendAndSetTranscriptJSON')
    await sendAndSetTranscriptJSON([])
  }
  navigateTo = () => {
    const {changeContent, summaryId, updateSummaryList, updateActionItems} = this.props;
    console.log(this.props,'<-----------------this.props.changeContent')
    changeContent('summaryList',{})
    if(summaryId !== 'actionItems'){
      updateSummaryList({
        summaryId: summaryId,
        newSummaryText: this.state.textValue
      })
    }else{
      updateActionItems(this.state.textValue)
    }
  }
    render(){
      console.log("here")
      return (<Animated className={'editSummary'} animationIn="bounceInLeft" animationOut="bounceOutLeft" isVisible={this.props.isVisible}>
  <div>
    <label for="input-file">Upload a file</label>
    <input type="file" id="input-file"/>
  </div>
  <div>
    <label for="allInOne">Check this to have a single object</label>
    <input type="checkbox" id="allInOne"/>
  </div>
  <div>
    <label for="maxValue">Seperate out everything</label>
    <input type="checkbox" id="maxValue"/>
  </div>
  <div>
    <label for="batchValue">Seperate Conversation in Batches of</label>
    <input type="text" id="batchValue"/>
  </div>
  <div>
    <label for="fileName">Enter Name without extention</label>
    <input type="text" id="fileName"/>
  </div>
  <button id="downloadButton" onClick={this.uploadFile}>Upload</button>        
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
    sendAndSetTranscriptJSON: bindActionCreators(UploadActions.sendAndSetTranscriptJSON, dispatch),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(UploadTranscript);
