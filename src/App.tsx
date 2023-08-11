import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/Signup';

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
