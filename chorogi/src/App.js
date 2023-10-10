import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Nav from './component/Nav';
import HomePage from './component/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
        <HomePage/>
      </div>
    </BrowserRouter>
  );
}

export default App;
