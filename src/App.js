
import './App.css';

import Sidebar from './components/Sidebar';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';
import Homepage from './pages/Homepage';
import {BrowserRouter , Routes,Route} from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
    <Sidebar /> 
   <Routes>
    <Route path="/dashboard" element={<Homepage />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/about" element={<AboutPage />}/>
  
    </Routes>
  
    


 
    </BrowserRouter>
    
  
     
     </>
  );
}

export default App;
