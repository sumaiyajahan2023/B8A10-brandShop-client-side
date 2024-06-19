import { Outlet } from 'react-router-dom'
import Header from './layout/Header'
import Footer from './layout/Footer'

function App() {

  return (
    <div className='min-h-screen'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
