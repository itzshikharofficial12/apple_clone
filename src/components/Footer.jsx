import React from 'react'

function Footer() {
    return (
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
    )
}

export default Footer