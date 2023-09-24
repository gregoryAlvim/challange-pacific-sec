import { UserForm } from '../pages/UserForm'
import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../layout/DefaultLayout'
import { UserProvider } from '../contexts/user/UserProvider'
import { NotFound } from '../pages/NotFound/intex'
import { UserDetails } from '../pages/UserDetails'

export function AppRoutes() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<UserForm />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/user-details" element={<UserDetails />} />
        </Route>
      </Routes>
    </UserProvider>
  )
}
