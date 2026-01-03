import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { PrivateRoute } from './components/PrivateRoute';
import { UserList } from './pages/Users/UserList';
import { UserCreate } from './pages/Users/UserCreate';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>} />
        <Route path='/users' element={<UserList />} />
        <Route path='/users/create' element={<UserCreate />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}
