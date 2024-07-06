import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import DefaultLayout from './Layouts/DefaultLayout'
import 'src/Style/Index.css'
import Profile from './Pages/Profile'
import { AppProvider } from './Context/ApiContext'
import AddingLinks from './Pages/AddingLinks'

function App() {

  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DefaultLayout />} >
            <Route path='/links' element={<AddingLinks />} />
            <Route path='/profile' element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
