
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import Dashboard from './screens/dashboard/Dashboard';

function App() {
  return (
    <Router>

      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route exact path='/login' element={<LoginScreen />} />
        <Route exact path='/register' element={<RegisterScreen />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
