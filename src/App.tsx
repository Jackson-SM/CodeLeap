import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import { Home } from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
