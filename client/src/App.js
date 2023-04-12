import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Add from './pages/Add';
import Employee from './pages/Employee';
import Update from './pages/Update';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/add' element={<Add/>} />  
          <Route path='/show' element={<Employee/>} />  
          <Route path='/update/:id' element={<Update/>} />  
        </Routes>  
      </Router>  
    </div>
  );
}

export default App;
