import logo from './logo.svg';
import './App.css';
import BaseRouter from './routes'
import {BrowserRouter as Router} from 'react-router-dom'
import 'antd/dist/antd.css'
import CustomLayout from './containers/Layout';
import Article from './components/Article';

function App() {
  return (
    <div className="App">
      <Router>
      <CustomLayout>
          <BaseRouter/>
      </CustomLayout>
      </Router>
    </div>
  );
}

export default App;
