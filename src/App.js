
import './App.css';
import Content from './Content/Content'
import Sidebar from './Sidebar/Sidebar'
function App() {
  return (
    <div className="App">
      <div className="header">
      </div>
      <div className="main">
        <div className="sidebar"></div>
        <Content />
      </div>
    </div>
  );
}

export default App;
