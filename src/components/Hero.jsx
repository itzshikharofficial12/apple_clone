import React from 'react'

function Hero() {
    return (
        <section className="text-center py-20 px-6">
            <h1 className="text-5xl font-bold mb-4">iPhone</h1>
            <p className="text-xl text-gray-600 mb-8">Say hello to the latest generation iPhone</p>
            <button className="border-[2px] border-[#0071e3] text-white p-4 rounded-full mx-5 bg-[#0071e3]">Learn More</button>
            <button className="border-[2px] border-[#0071e3] p-4 text-[#0071e3] rounded-full">Shop iPhone</button>
            <img src="https://www.pngall.com/wp-content/uploads/17/iPhone-17-Enhanced-Audio-Quality-PNG.png" alt="Phone X" className="w-[950px] mx-auto " />
        </section>
    )
}

export default Hero