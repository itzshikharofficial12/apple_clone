import video1 from './assets/video1.mp4'
import LT from './assets/LT.png'
import LB from './assets/LB.png'
import RB from './assets/RB.png'
import RT from './assets/RT.png'

function App() {
  return (
    <div className="min-h-screen bg-white">

      <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
        <div className="text-2xl font-bold">
          <img className="w-[60px]" src="https://1000logos.net/wp-content/uploads/2017/02/Apple-Logo.png" alt="" />
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-black">Store</a>
          <a href="#" className="text-gray-700 hover:text-black">Mac</a>
          <a href="#" className="text-gray-700 hover:text-black">iPhone</a>
          <a href="#" className="text-gray-700 hover:text-black">iPad</a>
          <a href="#" className="text-gray-700 hover:text-black">Watch</a>
        </div>
      </nav>


      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold mb-4">iPhone</h1>
        <p className="text-xl text-gray-600 mb-8">Say hello to the latest generation iPhone</p>
        <button className="border-[2px] border-[#0071e3] text-white p-4 rounded-full mx-5 bg-[#0071e3]">Learn More</button>
        <button className="border-[2px] border-[#0071e3] p-4 text-[#0071e3] rounded-full">Shop iPhone</button>
        <img src="https://www.pngall.com/wp-content/uploads/17/iPhone-17-Enhanced-Audio-Quality-PNG.png" alt="Phone X" className="w-[950px] mx-auto " />
      </section>

      <section>
        <video src={video1} autoPlay loop muted playsInline className="w-full" playbackRate="5.0"></video>
      </section>

      <section className='flex gap-3 p-3'>
        <div><img src={LT} alt=""/></div>
        <div><img src={RT} alt="" /></div>
      </section>
      <section className='flex gap-3 p-3'>
        <div><img src={LB} alt=""/></div>
        <div><img src={RB} alt="" /></div>
      </section>



      <footer className="bg-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Shop and Learn</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-black">Store</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Mac</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">iPhone</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">iPad</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-black">Music</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">TV</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Cloud</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-black">Newsroom</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Leadership</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-black">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Terms of Use</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Sales Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Legal</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-300 text-center text-gray-600">
            <p>Copyright © 2026 Apple Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
