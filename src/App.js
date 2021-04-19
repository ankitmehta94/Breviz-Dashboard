
import './App.css';
import { Provider } from 'react-redux';
import { useState } from "react";
import configureStore from './Store/configureStore';
import { combineReducers } from "redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Content from './Content/Content.jsx'
import UploadTranscript from './Components/UploadTranscript/UploadTranscript.jsx'
import Sidebar from './Sidebar/Sidebar.jsx'
import NavBar from './NavBar/NavBar.jsx'
import Summaries from './Constants/dummySummaries';
const store = configureStore({
  SummaryListObject: Summaries,
  SummaryKey:Object.keys(Summaries)[0]
});
function Container() {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    <Provider store={store}>
   <div className="container">
      <NavBar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Content />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
    </Provider>
  );
}

function App(){
  return (
    <Router>
    <Provider store={store}>
    <Switch>
     <Route path="/id:*">
            <Container />
      </Route>
      <Route path="/">
            <UploadTranscript />
      </Route>
    </Switch>
    </Provider>
    </Router>
  );
}

export default App;
