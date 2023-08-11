import { Routes, Route } from 'react-router-dom';
import { GlobalCss } from './styles/globalCss';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

function App() {
  GlobalCss();
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
