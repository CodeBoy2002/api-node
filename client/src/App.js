import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Add from './pages/Add';
import Employee from './pages/Employee';
import Update from './pages/Update';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/add' element={<Add/>} />  
          <Route path='/show' element={<Employee/>} />  
          <Route path='/update/:id' element={<Update/>} />  
        </Routes>  
      </Router>  
    </div>
  );
}

export default App;
