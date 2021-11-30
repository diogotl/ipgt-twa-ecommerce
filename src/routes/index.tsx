import { Routes, Route } from 'react-router-dom'

import { Store } from '../pages/Store'
import { CheckOut } from '../pages/CheckOut'
import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';
import { Products } from '../pages/Products';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/store" element={<Store />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/create" element={<Dashboard />} />
      <Route path="/products" element={<Products />} />
    </Routes>

  );
}