
import './Content.css';
import Title from './Components/Title/Title';
import SummaryList from './Components/SummaryList/SummaryList.jsx';

function Content() {
  return (
    <div className="content">
        <Title titleText={'Summaries'}/>
    <SummaryList />
    </div>
  );
}

export default Content;
