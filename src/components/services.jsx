import React from 'react'
import { companionship } from '../assets'
import { personalCare } from '../assets'
import { medication } from '../assets'

const Services = () => {
    return (
        <div className='space-y-7 p-[70px]'>
            <div className='flex flex-col text-center'>
                <span className='text-[30px] text-[#916c06] font-bold flex flex-col'>Our Services</span>
                <span className='font-semibold'>We are dedicated to providing compassionate and personalized care to each of our clients.</span>
            </div>
            <div className='space-y-7 lg:space-y-0 lg:flex lg:gap-8'>
                <article className="overflow-hidden rounded-lg shadow-2xl transition hover:shadow-lg">
                    <img
                        alt="Personal care image"
                        src={personalCare}
                        className="h-56 w-full object-cover"
                    />

                    <div className="bg-[#f8f2ec] p-4 sm:p-6">

                        <a href="#">
                            <h3 className="mt-0.5 text-lg text-[#916c06] font-bold">Personal Care</h3>
                        </a>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                            pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                            mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                            dignissimos. Molestias explicabo corporis voluptatem?
                        </p>
                    </div>
                </article>
                <article className="overflow-hidden rounded-lg shadow-2xl transition hover:shadow-lg">
                    <img
                        alt=""
                        src={companionship}
                        className="h-56 w-full object-cover"
                    />

                    <div className="bg-[#f8f2ec] p-4 sm:p-6">
                        <a href="#">
                            <h3 className="mt-0.5 text-lg text-[#916c06] font-bold">Companionship</h3>
                        </a>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                            pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                            mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                            dignissimos. Molestias explicabo corporis voluptatem?
                        </p>
                    </div>
                </article>
                <article className="overflow-hidden rounded-lg shadow-2xl transition hover:shadow-lg">
                    <img
                        alt=""
                        src={medication}
                        className="h-56 w-full object-cover"
                    />

                    <div className="bg-[#f8f2ec] p-4 sm:p-6">
                        <a href="#">
                            <h3 className="mt-0.5 text-lg text-[#916c06] font-bold">Medication</h3>
                        </a>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                            pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                            mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                            dignissimos. Molestias explicabo corporis voluptatem?
                        </p>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default Services