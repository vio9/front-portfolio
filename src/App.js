import './App.css';
import BasicInfo from './components/BasicInfo';
import Socials from './components/Socials';
import Formation from './components/Formation'
import Intro from './components/Intro';

function App() {
  return (
    <div className="App">
      <Intro/>
      <BasicInfo />
      <Socials />
     <Formation />
    </div>
  );
}

export default App;
