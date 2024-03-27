
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <>
     
        <Router>

             <Routes>

                  <Route path="/" element={<LoginPage />} />
                  
                  <Route path="/dashboard" element={<Dashboard />} />
                 
            
      
            </Routes>
         
        </Router>

        
      </>
  );
}

export default App;
