import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './app.scss';

import HomePage from '../pages/HomePage';
import RocketPage from '../pages/RocketPage';
import Header from '../header';
import CabinetPage from '../pages/CabinetPage';
import RegisterPage from '../pages/RegisterPage';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/cabinet' element={<CabinetPage/>}/>
        <Route path='/auth' element={<RegisterPage/>}/>
        <Route path='/rocket/:id' element={<RocketPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
