
import './App.css';
import Content from './Content/Content.jsx'
import Sidebar from './Sidebar/Sidebar.jsx'
function App() {
  return (
    <div className="App">
      <div className="header">
      </div>
      <div className="main">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default App;
