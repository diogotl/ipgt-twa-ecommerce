import { Routes, Route } from 'react-router-dom'

import { Store } from '../pages/Store'
import { CheckOut } from '../pages/CheckOut'
import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';
import { Products } from '../pages/Products';
import { SignUp } from '../pages/SignUp';
import { ProductsForm } from '../pages/ProductsForm';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/store" element={<Store />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/products" element={<Products />} />
      <Route path="/create" element={<ProductsForm />} />
    </Routes>

  );
}