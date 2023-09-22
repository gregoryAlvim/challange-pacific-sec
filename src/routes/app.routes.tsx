import { Route, Routes } from 'react-router-dom'
import { UserProvider } from '../contexts/user/UserProvider'

export function AppRoutes() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<h1>form</h1>} />
        <Route path="/user-details" element={<h1>Detail data</h1>} />
      </Routes>
    </UserProvider>
  )
}
