import { Routes, Route, Navigate, useLocation } from 'react-router-dom'

import { Store } from '../pages/Store'
import { CheckOut } from '../pages/CheckOut'
import { Users } from '../pages/Users';
import { SignIn } from '../pages/SignIn';
import { Products } from '../pages/Products';
import { SignUp } from '../pages/SignUp';
import { ProductsForm } from '../pages/ProductsForm';
import { NotFound404 } from '../pages/NotFound404';
import { useContext } from 'react';
import { AuthContext } from '../contexts/Auth';

function RequireAuth({ children }: { children: JSX.Element }) {

  const { isAuth } = useContext(AuthContext)

  let location = useLocation();

  if (!isAuth) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/store" element={<RequireAuth><Store /></RequireAuth>} />
      <Route path="/checkout/cart" element={<RequireAuth><CheckOut /></RequireAuth>} />
      <Route path="/checkout/orders" element={<CheckOut />} />
      <Route path="/dashboard/users" element={<Users />} />
      <Route path="/dashboard/products" element={<Products />} />
      <Route path="/dashboard/products/create" element={<ProductsForm />} />
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
}