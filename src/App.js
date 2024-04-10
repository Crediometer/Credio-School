import './App.css';
import {Provider} from 'react-redux';
import store from './Redux/Store';
import { BrowserRouter } from 'react-router-dom'
import Router from './routes';
import Layout from './Components/Layout/Layout';
import Sidebar from './Components/Layout/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </Provider>
      {/* <Layout/> */}
    </div>
  );
}

export default App;
