import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Analytics from './components/Analytics'
import Newsletter from './components/newsletter'
import Cards from './components/Cards'

function App() {

  return (
    <div className='text-white'>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Newsletter/>
      <Cards/>
    </div>
  )
}

export default App
