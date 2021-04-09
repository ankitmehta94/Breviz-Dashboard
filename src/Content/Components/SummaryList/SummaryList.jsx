import "./SummaryList.css";
import { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import Title from "../Title/Title.jsx";
import { connect } from "react-redux";
import SummaryListActions from "./SummaryListActions";
import { Animated } from "react-animated-css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faEdit } from "@fortawesome/free-solid-svg-icons";

class Agenda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editAgenda: false,
      textValue: this.props.Agenda,
    };
  }
  showAgendaEdit = () => {
    this.setState({
      editAgenda: true,
    });
  };
  setTextValue = (event) => {
    this.setState({
      textValue: event.target.value,
    });
  };
  saveAgenda = () => {
    this.setState({
      editAgenda: false,
    });
    this.props.updateAgenda(this.state.textValue);
  };
  agendaView = (agendaDiv) => {
    if (this.state.editAgenda) {
      return (
        <Fragment>
          <div className={"iconDiv"} onClick={this.saveAgenda}>
            <FontAwesomeIcon icon={faSave} onClick={this.saveAgenda} /> Save
          </div>
          <textarea
            className={"textAreaCss"}
            value={this.state.textValue}
            rows={10}
            onChange={(event) => this.setTextValue(event)}
          />
        </Fragment>
      );
    } else {
      return agendaDiv;
    }
  };
  getAgendaDiv = () => {
    return this.state.textValue ? (
      <div className={"cellList"}>
        <div className={"iconDiv"}>
           <div  onClick={this.showAgendaEdit}> <FontAwesomeIcon icon={faEdit} /> Edit</div> 
          </div>
        <div className={"CellLine"}>{this.state.textValue}</div>
      </div>
    ) : (
      <div className={"noAgendaDiv"} onClick={this.showAgendaEdit}>
        No Agenda Found. Click Here to add Agenda
      </div>
    );
  }
  render() {
    const agendaDiv = this.getAgendaDiv()
    const view = this.agendaView(agendaDiv);
    return (
      <Fragment>
        <Title titleText={"AGENDA"} />
        {view}
      </Fragment>
    );
  }
}
class ActionItems extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  getActionItems = () => {
    const { SummaryListObject, SummaryKey } = this.props;
    if(SummaryListObject[SummaryKey].actionItems){
      return SummaryListObject[SummaryKey].actionItems.split('\n').map((line, index) => {
        return <div>{line}</div>
      })
    }
    return null;
  };
  showActionsItemEdit = () => {
    const { SummaryListObject, SummaryKey, changeContent, updateClickedText } = this.props;
    changeContent("editSummary", {
      SummaryText: SummaryListObject[SummaryKey].actionItems || 'Nope',
      Transcripts: SummaryListObject[SummaryKey].transcript,
      summaryId: 'actionItems',
      titleText: "EDIT ACTION ITEMS",
    });
    updateClickedText('EDIT ACTION ITEMS');
  };
  render(){
    const actionItems = this.getActionItems()
    if(actionItems){
      return (
        <Fragment>
            <Title titleText={"ACTION ITEMS"} />
            <div className={"cellList"}>
          <div className={"iconDiv"}>
              <FontAwesomeIcon icon={faEdit} onClick={this.showActionsItemEdit} />Edit
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Send To Jira
            </div>
          <div className={"CellLine"}>{actionItems}</div>
        </div>
        </Fragment>
      )
    }
    return null
  }
}
class SummaryList extends Component {
  createList = () => {
    const { SummaryListObject, SummaryKey } = this.props;
    // console.log(SummaryListObject);
    const SumObj = SummaryListObject[SummaryKey].summaries;
    // console.log(SumObj, "<-----------------SumObj");
    return Object.keys(SumObj).map((sumKey, sumIndex) => {
      const sum = SumObj[sumKey];
      // console.log(sum, "<-----------------sumKey");
      let htmlArray = sum.summary.split("\n").map((text, index) => {
        // console.log(text);
        return (
          <p key={`p-${index}`}>
            {this.createHighlightedHTML(text, sum.summary, sumKey)}
          </p>
        );
      });
      return (
        <div className={"CellLine"} key={`sumIndex-${sumIndex}`}>
          {htmlArray}
        </div>
      );
    });
  };
  showEditSummary = (SummaryText, Transcripts, summaryId, middleText) => {
    this.props.changeContent("editSummary", {
      SummaryText,
      Transcripts,
      summaryId,
      titleText: "EDIT SUMMARY",
    });
    this.props.updateClickedText(middleText);
  };
  createHighlightedHTML = (SummaryText, FullSummary, summaryId) => {
    const { SummaryListObject, SummaryKey } = this.props;
    const SummarySplit = SummaryText.split(":");
    const dialog = SummarySplit[1]?SummarySplit[1]:SummaryText;
    const personName = SummarySplit[1]?SummarySplit[0]:'';
    const htmlArray = [];
    const Transcripts = SummaryListObject[SummaryKey].transcript;
    // if (dialog) {
      const existIndex = Transcripts.toLowerCase()
        .trim()
        .indexOf(dialog.toLowerCase().trim());
      if (existIndex > -1) {
        console.log(SummaryText, "<-----------------SummaryText");
        // console.log(dialog, "<-----------------dialog");
        const startIndex = SummaryText.toLowerCase()
          .trim()
          .indexOf(dialog.toLowerCase().trim())//+personName.length;
        console.log(startIndex,'<-----------------startIndex',SummaryText.trim().substring(0, startIndex))
        const length = dialog.toLowerCase().trim().length;
        const endIndex = startIndex + length;

        // console.log(endIndex,'<-----------------endIndex',SummaryText.substring(startIndex, endIndex))
        // console.log(length,'<-----------------length',SummaryText.substring(endIndex, SummaryText.length))
        // htmlArray.push(SummaryText.substring(0, startIndex).trim());
        const middleText = SummaryText.trim().substring(startIndex, endIndex)
        const showEditSummary = () =>
          this.showEditSummary(FullSummary, Transcripts, summaryId, middleText);
        // htmlArray.push(
        //   <div className="clickMe" onClick={showEditSummary}>
        //     {middleText}
        //   </div>
        // );
        // htmlArray.push(
        //   SummaryText.substring(endIndex, SummaryText.length).trim()
        // );

        if(middleText){
          return (
            <div className={"oneLine"}>
              {/* {personName?personName+': ':''} */}
              {SummaryText.trim().substring(0, startIndex)}
              <div className="clickMe" onClick={showEditSummary}>
                {SummaryText.trim().substring(startIndex, endIndex)}
              </div>
              {SummaryText.trim().substring(endIndex, SummaryText.length)}
            </div>
          );
        }
      } else {
        return <div>{SummaryText}</div>;
      }
      // console.log(LCS(dialog.toLowerCase().trim(), Transcripts.toLowerCase().trim()))
    // }
  };
  getAgenda = () => {
    const { SummaryListObject, SummaryKey } = this.props;
    return SummaryListObject[SummaryKey].agenda;
  };
  render() {
    const SummaryHTML = this.createList();
    const agenda = this.getAgenda();
    const { SummaryListObject, SummaryKey, changeContent,updateClickedText } = this.props;
    return (
      <Animated
        className={"summaryList"}
        animationIn="bounceInLeft"
        animationOut="bounceOutLeft"
        isVisible={this.props.isVisible}
      >
        <Agenda Agenda={agenda} updateAgenda={this.props.updateAgenda} />
        <Title titleText={"SUMMARIES"} />
        <div className={"cellList"}>{SummaryHTML}</div>
        <ActionItems changeContent={changeContent} SummaryListObject={SummaryListObject} SummaryKey={SummaryKey} updateClickedText={updateClickedText}/>
      </Animated>
    );
  }
}

const mapStateToProps = (state) => {
  const { SummaryListReducer = {} } = state;
  // console.log(SummaryListReducer, "<-----------------SummaryListReducer");
  const { SummaryListObject, SummaryKey } = SummaryListReducer;
  return {
    SummaryListObject: SummaryListObject,
    SummaryKey: SummaryKey,
  };
};
const mapDispatchToProps = (dispatch) => {
  console.log(SummaryListActions, "<-----------------SummaryListActions");
  return {
    updateClickedText: bindActionCreators(
      SummaryListActions.updateClickedText,
      dispatch
    ),
    updateAgenda: bindActionCreators(SummaryListActions.updateAgenda, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SummaryList);
