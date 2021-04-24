import style from './EditSummary.css';
import Title from '../Title/Title.jsx'
import TranscriptContainer from './TranscriptContainer.jsx'
import { Animated } from 'react-animated-css'
import {Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SummaryListActions from '../SummaryList/SummaryListActions'
import RichEditorContainer from '../RichEditor/RichEditorContainer'
import {ANIMATION_DURATION} from '../../Constants/configConstants'
class EditSummary extends Component{
  constructor(props){
    super(props)
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
  navigateTo = async() => {
    const {changeContent, summaryId, updateSummaryList, updateActionItems} = this.props;
    console.log(this.props,'<-----------------this.props.changeContent')
    if(summaryId !== 'actionItems'){
      updateSummaryList({
        summaryId: summaryId,
        newSummaryText: this.state.textValue
      })
    }else{
      updateActionItems(this.state.textValue)
    }
    await changeContent('summaryList',{})
  }
    render(){
      console.log("here")
    //  const {editorState} = this.state;
    console.log(this.props.isVisible,'<-----------------this.props.isVisible, navigateTo')
      return (<Animated className={style['editSummary']} animationIn="bounceInLeft" animationOut="bounceOutLeft" isVisible={this.props.isVisible}>
            <Title titleText={this.props.titleText} navigateTo={this.navigateTo}/>
          <TranscriptContainer Transcripts={this.props.Transcripts} summary={this.state.textValue} clickedText={this.props.clickedText}/>
          {/* <textarea className={style['textAreaCss']} value={this.state.textValue} rows={15} onChange={(event) => this.setTextValue(event)}/> */}
          {/* <RichEditor SummaryText={this.props.SummaryText} editorState={editorState} summaryId={this.props.summaryId} onChange={(e)=>{console.log(e)}} /> */}
          <RichEditorContainer SummaryText={this.props.SummaryText}/>
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
    updateActionItems: bindActionCreators(SummaryListActions.updateActionItems, dispatch),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditSummary);
