import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from "./components/layout/Navbar";
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/p/:id' element={<PostDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
