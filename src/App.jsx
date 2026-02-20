function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
        <div className="text-2xl font-bold">Apple</div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-black">Store</a>
          <a href="#" className="text-gray-700 hover:text-black">Mac</a>
          <a href="#" className="text-gray-700 hover:text-black">iPhone</a>
          <a href="#" className="text-gray-700 hover:text-black">iPad</a>
          <a href="#" className="text-gray-700 hover:text-black">Watch</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold mb-4">iPhone</h1>
        <p className="text-xl text-gray-600 mb-8">Say hello to the latest generation iPhone</p>
        <button className="border-[2px] border-[#0071e3] text-white p-4 rounded-full mx-5 bg-[#0071e3]">Learn More</button>
        <button className="border-[2px] border-[#0071e3] p-4 text-[#0071e3] rounded-full">Shop iPhone</button>
        <img src="https://www.pngall.com/wp-content/uploads/17/iPhone-17-Enhanced-Audio-Quality-PNG.png" alt="Phone X" className="w-[950px] mx-auto " />
      </section>

      {/* Product Section 1 */}
      {/* <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Laptop Pro</h2>
          <p className="text-lg text-gray-600 text-center mb-8">Powerful performance meets stunning design</p>
          <img src="https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/mbp14-m4-2024.png" alt="Laptop Pro" className="mx-auto w-[950px]" />
        </div>
      </section> */}

      {/* Product Section 2 */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Smart Watch</h2>
          <p className="text-lg text-gray-600 text-center mb-8">Your health and fitness companion</p>
          <img src="https://via.placeholder.com/600x400" alt="Smart Watch" className="mx-auto rounded-lg shadow-lg" />
          
        </div>
      </section>

      {/* Product Section 3 */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Tablet Air</h2>
          <p className="text-lg text-gray-600 text-center mb-8">Thin, light, and powerful</p>
          <img src="https://via.placeholder.com/700x400" alt="Tablet Air" className="mx-auto rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Footer */}
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
