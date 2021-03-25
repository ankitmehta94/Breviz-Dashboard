
import './App.css';
import { Provider } from 'react-redux';
import configureStore from './Store/configureStore';
import { combineReducers } from "redux";
import Content from './Content/Content.jsx'
import Sidebar from './Sidebar/Sidebar.jsx'
import dummySummaries from './Constants/dummySummaries';
const store = configureStore({SummaryListReducer:dummySummaries});
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <div className="header">
      </div>
      <div className="main">
        <Sidebar />
        <Content />
      </div>
    </div>
    </Provider>
  );
}

export default App;
