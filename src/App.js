import logo from './logo.svg';
import './App.css';
import AddVisitor from './components/AddVisitor';
import NavBar from './components/NavBar';
import ViewAllVisitor from './components/ViewAllVisitor';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<AddVisitor/>}/>
     <Route path='/getvisitor' element={<ViewAllVisitor/>}/>
     <Route path='/addvisitor' element={<AddVisitor/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
