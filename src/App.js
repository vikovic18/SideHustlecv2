import './index.css';
import PersonalDetails from './components/PersonalDetails'
import Education from './components/Education'
import Experiences from './components/Experiences'

function App() {
  return (
    <div className="App">
      <PersonalDetails/>
      <Education/>
      <Experiences/>
    </div>
  );
}

export default App;
