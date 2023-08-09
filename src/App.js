import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protected from './Components/Protected';
import { Contact } from './Components/Contact';
 
function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Protected Component={Home}/>} />
     <Route path="/contact" element={<Protected Component={Contact}/>} />
      <Route path="/login" element={<Login/>} />
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
