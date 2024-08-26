import React, {useState} from 'react'

const Choose = () => {
    // State to keep track of which accordion item is open
    const [openIndex, setOpenIndex] = useState(null);

    // Function to toggle accordion
    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (

        <div className='bg-[#f8f2ec] p-10'>
            <section className="relative flex flex-wrap lg:h-screen lg:items-center">
                <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                        className="absolute inset-0 rounded-2xl h-full w-full object-cover"
                    />
                </div>

                <div className="space-y-9 w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                    <div className="mx-auto max-w-lg text-center flex flex-col">

                        <span className='text-[30px] text-[#916c06] font-bold flex flex-col'>Our Services</span>
                        <span className='font-semibold'>We are dedicated to providing compassionate and personalized care to each of our clients.</span>

                    </div>

                    {/* Accordion Items */}
                <div className="space-y-9">
                    {/* Accordion Item 1 */}
                    <div className="border rounded-lg overflow-hidden">
                        <button 
                            className="w-full text-left px-4 py-2 text-lg font-medium bg-white text-gray-800 flex justify-between items-center"
                            onClick={() => toggleAccordion(1)}
                        >
                            <span className='text-[#916c06] font-semibold'>1. Experienced Aides</span>
                            <svg className={`w-5 h-5 text-gray-500 transition-transform transform ${openIndex === 1 ? 'rotate-180' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path fillRule="evenodd" d="M12 13.5l6.364-6.364a1 1 0 011.415 1.414L12 16.328l-7.778-7.778a1 1 0 111.415-1.414L12 13.5z" clipRule="evenodd" />
                            </svg>
                        </button>
                        {openIndex === 1 && (
                            <div className="bg-white px-4 py-2 text-gray-600">
                                Experienced aides ensure the best care is provided...
                            </div>
                        )}
                    </div>

                    {/* Accordion Item 2 */}
                    <div className="border rounded-lg overflow-hidden">
                        <button 
                            className="w-full text-left px-4 py-2 text-lg font-medium bg-white text-gray-800 flex justify-between items-center"
                            onClick={() => toggleAccordion(2)}
                        >
                            <span className='text-[#916c06] font-semibold'>2. Punctuality</span>
                            <svg className={`w-5 h-5 text-gray-500 transition-transform transform ${openIndex === 2 ? 'rotate-180' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path fillRule="evenodd" d="M12 13.5l6.364-6.364a1 1 0 011.415 1.414L12 16.328l-7.778-7.778a1 1 0 111.415-1.414L12 13.5z" clipRule="evenodd" />
                            </svg>
                        </button>
                        {openIndex === 2 && (
                            <div className="bg-white px-4 py-2 text-gray-600">
                                We value your time and ensure timely services...
                            </div>
                        )}
                    </div>

                    {/* Accordion Item 3 */}
                    <div className="border rounded-lg overflow-hidden">
                        <button 
                            className="w-full text-left px-4 py-2 text-lg font-medium bg-white text-gray-800 flex justify-between items-center"
                            onClick={() => toggleAccordion(3)}
                        >
                            <span className='text-[#916c06] font-semibold'>3. Person-centred care</span>
                            <svg className={`w-5 h-5 text-gray-500 transition-transform transform ${openIndex === 3 ? 'rotate-180' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path fillRule="evenodd" d="M12 13.5l6.364-6.364a1 1 0 011.415 1.414L12 16.328l-7.778-7.778a1 1 0 111.415-1.414L12 13.5z" clipRule="evenodd" />
                            </svg>
                        </button>
                        {openIndex === 3 && (
                            <div className="bg-white px-4 py-2 text-gray-600">
                                The caregiving approach we employ places the individual at the centre of the care experience...
                            </div>
                        )}
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Choose