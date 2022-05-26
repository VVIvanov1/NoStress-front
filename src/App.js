import './App.css';
import './Header.css'
import Header from './components/Header/Header';
import WorkArea from './components/Header/WorkArea';

function App() {
  return (
    <div className="container">
      <Header/>
      <WorkArea/>
    </div>
  );
}

export default App;
