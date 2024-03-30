import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Router from './routes';
import Layout from './Components/Layout/Layout';
import Sidebar from './Components/Layout/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
      {/* <Layout/> */}
    </div>
  );
}

export default App;
