import "./SummaryList.css";
import { Component } from "react";
import Summaries from "../../../Constants/dummySummaries";
import Transcripts from "../../../Constants/dummyTranscript";
import LCS from "../../../Utilities/LCS";
class SummaryList extends Component {
  createList = () => {
    return Summaries.map((sum, sumIndex) => {
      let htmlArray = sum.summary.split("\n").map((text, index) => {
        
        return <p key={`p-${index}`}>{createHighlightedHTML(text)}</p>;
      });
      return <div className={'CellLine'} key={`sumIndex-${sumIndex}`}>{htmlArray}</div>;
    });
  };
  render() {
    const SummaryHTML = this.createList();
    return <div className="summaryList">{SummaryHTML}</div>;
  }
}
const createHighlightedHTML = (SummaryText) => {
  const SummarySplit = SummaryText.split(":");
  const dialog = SummarySplit[1];
  const htmlArray = [];
  if (dialog) {
    const existIndex = Transcripts.toLowerCase()
      .trim()
      .indexOf(dialog.toLowerCase().trim());
    if (existIndex > -1) {
      // console.log(SummaryText, "<-----------------SummaryText");
      // console.log(dialog, "<-----------------dialog");
      const startIndex = SummaryText.toLowerCase()
        .trim()
        .indexOf(dialog.toLowerCase().trim());
        // console.log(startIndex,'<-----------------startIndex',SummaryText.substring(0, startIndex))
      const length = dialog.toLowerCase().trim().length;
      const endIndex = startIndex + length;
      
      // console.log(endIndex,'<-----------------endIndex',SummaryText.substring(startIndex, endIndex))
      // console.log(length,'<-----------------length',SummaryText.substring(endIndex, SummaryText.length))
      htmlArray.push(SummaryText.substring(0, startIndex).trim());
      htmlArray.push(
        <a href="#" className="clickMe">{SummaryText.substring(startIndex, endIndex).trim()}</a>
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

const CellLine = ({ SummaryText }) => {
  return 
};

export default SummaryList;
