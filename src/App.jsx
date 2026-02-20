import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Banner from './components/Banner'
import Categories from './components/Categories'
import Footer from './components/Footer'


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <Hero/>
      <Banner/>
      <Categories/>
      <Footer/>
    </div>
  )
}

export default App
