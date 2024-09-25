// CSS
import './index.css';

// Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Layout from './layouts/Layouts';
import Home from './pages/home/Home'; 
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
           <Route index element={<Home />} /> 
        </Route>
      </Routes>
    </Router>
  )
}

export default App
