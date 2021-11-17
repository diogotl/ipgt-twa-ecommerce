import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { SignIn } from '../pages/SignIn'
import { Store } from '../pages/Store'
import { Initial } from '../pages/Initial';
import { CheckOut } from '../pages/CheckOut'


export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/store" element={<Store />} />
        <Route path="/sign" element={<Initial />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </BrowserRouter>
  );
}