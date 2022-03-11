import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import User from './pages/User'
import NotFound from './pages/NotFound'
import {GithubProvider} from './context/github/GithubContext'
import Alert from './components/layout/Alert'
import {AlertProvider} from './context/alert/AlertContext'


function App() {
  return (
    <GithubProvider>
    <Router>
      <div className="flex flex-col justify-between h-screen">
      <Navbar />

      <main className='container mx-auto px-3 pb-12'>
      <AlertProvider>
      <Alert />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/user/:login' element={<User />} />
        <Route path='/NotFound' element={<NotFound />} />
        <Route path='/*' element={<NotFound />} />

        
        </Routes>
      </AlertProvider>
      </main>
      <Footer />
      </div>
    </Router>
    </GithubProvider>
  );
}

export default App;
