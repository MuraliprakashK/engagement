import logo from './logo.svg';
import eng from './img/eng1.png';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <img src={eng} alt="logo" /> */}
      <header className="App-header">
      
      <div className='row'>
        <img src={eng} alt="logo" style={{width: '99%', border: "1px solid wheat"}}/>
      </div>
        
      </header>
    </div>
  );
}

export default App;
