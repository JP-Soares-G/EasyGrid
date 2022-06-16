import './App.css';
import Dashboard from './pages/Dashboard/Index';
import Login from './pages/Login/Index'
import Signup from './pages/Signup/Index';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Signup />
      <Login />
    </div>
  );
}

export default App;
