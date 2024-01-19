import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './component/Navbar';
import HomeContent from './component/Home';
import AboutContent from './component/About';
import ServiceContent from './component/Service';
import NoticeContent from './component/Notice';
import LoginContent from './component/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
        <Routes>
        <Route path='/' element={<HomeContent/>}/>
          <Route path='/About' element={<AboutContent/>}/>
          <Route path='/Service' element={<ServiceContent/>}/>
          <Route path='/Notice' element={<NoticeContent/>}/>
          <Route path='/Login' element={<LoginContent/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
