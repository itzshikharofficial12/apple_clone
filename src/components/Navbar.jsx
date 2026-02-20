import React from 'react'

function Navbar() {
    return (
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

    )
}

export default Navbar