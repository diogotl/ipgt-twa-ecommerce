import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { SignIn } from '../pages/SignIn'
import { Dashboard } from '../pages/Dashboard'
import { Initial } from '../pages/Initial';


export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/sign" element={<Initial/>} />
      </Routes>
    </BrowserRouter>
  );
}