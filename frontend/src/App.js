import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Samose from './pages/Samose';

function App() {
  return (
    <div className="App">
    <Navbar/>
 
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/samose' element={<Samose/>}/>
        <Route path='/signup' element={<Signup/>}/>
     </Routes>
    </div>
  );
}

export default App;
