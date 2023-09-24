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
        <Route path="/challange-pacific-sec" element={<DefaultLayout />}>
          <Route path="/challange-pacific-sec" element={<UserForm />} />
          <Route
            path="/challange-pacific-sec/user-details"
            element={<UserDetails />}
          />
          <Route path="/challange-pacific-sec/*" element={<NotFound />} />
        </Route>
      </Routes>
    </UserProvider>
  )
}
