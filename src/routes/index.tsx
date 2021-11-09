import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { SignIn } from '../pages/SignIn'
import { Dashboard } from '../pages/Dashboard'


export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}