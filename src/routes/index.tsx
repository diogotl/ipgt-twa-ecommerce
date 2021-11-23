import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { SignIn } from '../pages/SignIn'
import { Store } from '../pages/Store'
import { Initial } from '../pages/Initial';
import { CheckOut } from '../pages/CheckOut'
import { Dashboard } from '../pages/Dashboard';


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/store" element={<Store />} />
      <Route path="/sign" element={<Initial />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>

  );
}