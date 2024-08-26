import React from 'react'
import { heroImage } from '../assets'

const Hero = () => {
    return (
        <div
            className="relative hero min-h-screen bg-cover"
            style={{
                backgroundImage: `url(${heroImage})`
            }}>
            <div className="absolute inset-0 bg-orange-200 bg-opacity-20"></div>
            <div className="relative hero-content text-white text-center flex flex-col items-center justify-center min-h-screen">
                <div className="max-w-4xl px-4 space-y-8">
                    <p className="mb-5 font-bold text-xl">
                        Welcome to <br />
                        The Golden Hearts @ Bettods LLC
                    </p>
                    <div>
                        <h1 className='text-3xl font-bold'>We specialize in providing care and assistance <br />
                        to people especially the aged <br />
                        and underprivileged in our communities</h1>
                    </div>

                    <button className="text-[#916c06] bg-white px-5 py-2 rounded-full font-bold">CALL NOW</button>
                </div>
            </div>
        </div>
    )
}

export default Hero