
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/LoginForm';
import Dashboard from './components/DashBoard';
import ProtectedRoute from './RotaProtegida/ProtectedRoute';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;