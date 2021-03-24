import "./SummaryList.css";
import { Component } from "react";
import Summaries from "../../../Constants/dummySummaries";
import Transcripts from "../../../Constants/dummyTranscript";
// import LCS from "../../../Utilities/LCS";
import { Animated } from 'react-animated-css'
class SummaryList extends Component {
  createList = () => {
    return Summaries.map((sum, sumIndex) => {
      let htmlArray = sum.summary.split("\n").map((text, index) => {
        console.log(text)
        return <p key={`p-${index}`}>{this.createHighlightedHTML(text,sum.summary)}</p>;
      });
      return <div className={'CellLine'} key={`sumIndex-${sumIndex}`}>{htmlArray}</div>;
    });
  };
  showEditSummary = (Summary, Transcripts) => {
    this.props.changeContent('editSummary',{Summary, Transcripts, titleText: 'EDIT SUMMARY'})
  }
  createHighlightedHTML = (SummaryText, FullSummary) => {
    const SummarySplit = SummaryText.split(":");
    const dialog = SummarySplit[1];
    const htmlArray = [];
    if (dialog) {
      const existIndex = Transcripts.toLowerCase()
        .trim()
        .indexOf(dialog.toLowerCase().trim());
      if (existIndex > -1) {
        console.log(SummaryText, "<-----------------SummaryText");
        // console.log(dialog, "<-----------------dialog");
        const startIndex = SummaryText.toLowerCase()
          .trim()
          .indexOf(dialog.toLowerCase().trim());
          // console.log(startIndex,'<-----------------startIndex',SummaryText.substring(0, startIndex))
        const length = dialog.toLowerCase().trim().length;
        const endIndex = startIndex + length;
        const showEditSummary = () => this.showEditSummary(FullSummary, Transcripts)
        // console.log(endIndex,'<-----------------endIndex',SummaryText.substring(startIndex, endIndex))
        // console.log(length,'<-----------------length',SummaryText.substring(endIndex, SummaryText.length))
        htmlArray.push(SummaryText.substring(0, startIndex).trim());
        htmlArray.push(
          <div className="clickMe" onClick={showEditSummary}>{SummaryText.substring(startIndex, endIndex).trim()}</div>
        );
        htmlArray.push(
          SummaryText.substring(endIndex, SummaryText.length).trim()      );
      }else{
        return (<div>{SummaryText}</div>)
      }
      // console.log(LCS(dialog.toLowerCase().trim(), Transcripts.toLowerCase().trim()))
    }
    return (<p>{htmlArray}</p>);
  };
  render() {
    const SummaryHTML = this.createList();
    return <Animated className={'summaryList'} animationIn="bounceInLeft" animationOut="bounceOutLeft" isVisible={this.props.isVisible}><div >{SummaryHTML}</div></Animated>;
  }
}



// const CellLine = ({ SummaryText }) => {
//   return 
// };

export default SummaryList;
