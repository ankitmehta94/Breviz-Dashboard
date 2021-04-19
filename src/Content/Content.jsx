import "./Content.css";
import { Component } from "react";

import SummaryList from "../Components/SummaryList/SummaryList.jsx";
import EditSummary from "../Components/EditSummary/EditSummary.jsx";

const setContent = (MainComponent, props) => {
  class Main extends Component {
    render() {
      console.log("here",props);
      return <MainComponent {...props} />;
    }
  }
  return Main;
};

const contentDictionary = {
  summaryList: SummaryList,
  editSummary: EditSummary,
};
class Content extends Component {
  state = {
    incomingComponent: () => null,
    mainContent: SummaryList,
    titleText: "SUMMARIES",
    contentProps: {},
    mainVisible: true,
    incomingVisible: false,
  };
  changeMainContent = (contentId, contentProps) => {
    console.log(contentId, contentProps);
    const mainContent = setContent(contentDictionary[contentId], {...contentProps,changeContent:this.changeMainContent, isVisible:this.state.mainVisible });
    // const incomingComponent = setContent(incomingComponent,{})
    console.log(mainContent, "<-----------------mainContent");
    this.setState({
      titleText: contentProps.titleText,
      mainVisible: false,
      incomingVisible: false,
    },() => {
      this.setState({
        mainContent: mainContent,
        // incomingComponent: incomingComponent,
        mainVisible: true,
        incomingVisible: false,
      });
    });
  };
  navigateTo = () => {};
  render() {
    const ContentComponent = this.state.mainContent;
    // const IncomingComponent = this.state.incomingComponent;
    // console.log(IncomingComponent)
    return (
      <main>
        <div className="main_container">
          {/* <IncomingComponent isVisible={this.state.incomingVisible} /> */}
          <ContentComponent
            changeContent={this.changeMainContent}
            isVisible={this.state.mainVisible}
          />
        </div>
      </main>
    );
  }
}

export default Content;
