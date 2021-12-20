import { Routes, Route } from 'react-router-dom'

import { Store } from '../pages/Store'
import { CheckOut } from '../pages/CheckOut'
import { Users } from '../pages/Users';
import { Login } from '../pages/Login';
import { Products } from '../pages/Products';
import { SignUp } from '../pages/SignUp';
import { ProductsForm } from '../pages/ProductsForm';
import { NotFound404 } from '../pages/NotFound404';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/store" element={<Store />} />
      <Route path="/checkout/cart" element={<CheckOut />} />
      <Route path="/checkout/orders" element={<CheckOut />} />
      <Route path="/dashboard/users" element={<Users />} />
      <Route path="/dashboard/products" element={<Products />} />
      <Route path="/dashboard/products/create" element={<ProductsForm />} />
      <Route path="*" element={<NotFound404 />} />
    </Routes>

  );
}