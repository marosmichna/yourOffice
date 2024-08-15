import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import HomePage from './pages/HomePage';
import CommunitiesPage from './pages/CommunitiesPage';
import BuildingsPage from './pages/BuildingsPage';
import GeneralSettingsPage from './pages/GeneralSettingsPage';
import PrivacyPage from './pages/PrivacyPage';
import LogOutPage from './pages/LogOutPage';
import ProfilePages from './pages/ProfilePages';
import ProtectedRoutesPage from './pages/ProtectedRoutesPage';
import NotFoundPage from './pages/NotFoundPage';


const App = () => {
  return (
    <BrowserRouter>
      <div className='flex items-start justify-between'>
        <Sidebar />
        <div className='w-full h-full'>
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route element={<ProtectedRoutesPage />}>
              <Route path='/profile' element={<ProfilePages />} />
              <Route path='/communities' element={<CommunitiesPage />} />
              <Route path='/buildings' element={<BuildingsPage />} />
              <Route path='/general-settings' element={<GeneralSettingsPage />} />
              <Route path='/privacy' element={<PrivacyPage />} />
              <Route path='/logout' element={<LogOutPage />} />
            </Route>
            <Route path='/*' element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
