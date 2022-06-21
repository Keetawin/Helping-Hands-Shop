import './style/App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './component/Home';
import About from './component/About';
import Service from './component/Service';
import Shop from './component/Shop';
import News from './component/News';
import Donate from './component/Donate';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NotFound from './component/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/donate' element={<Donate/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
