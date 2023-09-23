import { UserForm } from '../pages/UserForm'
import { Route, Routes } from 'react-router-dom'
import { UserProvider } from '../contexts/user/UserProvider'

export function AppRoutes() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/user-details" element={<h1>Detail data</h1>} />
      </Routes>
    </UserProvider>
  )
}
