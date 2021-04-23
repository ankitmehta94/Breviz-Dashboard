import style from "./Content.css";
import { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import SummaryList from "../Components/SummaryList/SummaryList.jsx";
import EditSummary from "../Components/EditSummary/EditSummary.jsx";
import { bindActionCreators } from "redux";
import SummaryListActions from '../Components/SummaryList/SummaryListActions'
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
  componentDidMount(){
    this.getSummaryObject()
  
  }
  getSummaryObject = async() => {
    const { location, getSummaryObject } = this.props
    const {pathname} = location;
    await getSummaryObject(pathname);
  }
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
      <main className={style['mainDiv']}>
        <div className={style["main_container"]}>
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

const mapStateToProps = (state) => {
 return {}
};
const mapDispatchToProps = (dispatch) => {
  return {
    getSummaryObject: bindActionCreators(SummaryListActions.getSummaryObject, dispatch),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Content));
