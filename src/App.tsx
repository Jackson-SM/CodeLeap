import { Routes, Route } from 'react-router-dom';
import { GlobalCss } from './styles/globalCss';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { persistLogin } from './actions/userActions/actionCreators';
import { LoadingScreen } from './components/LoadingScreen';
import { useAppSelector } from './redux/hooks';

function App() {
  const user = useAppSelector((state) => state.user);

  const dispatch = useDispatch();

  GlobalCss();

  useEffect(() => {
    dispatch(persistLogin());
  }, [dispatch]);

  if (user.isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={user.isLoggedIn ? <Home /> : <Navigate to="signup" />}
        />
        <Route
          path="/signup"
          element={user.isLoggedIn ? <Navigate to="/" /> : <SignUp />}
        />
      </Route>
    </Routes>
  );
}

export default App;
