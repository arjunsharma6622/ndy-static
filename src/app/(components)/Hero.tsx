import Navbar from '@/components/Navbar'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className=" dots">
            <Navbar />

            <div className="flex items-center justify-center h-full w-full px-2 py-10 md:px-10 md:py-16">
                    <section className=" text-black text-center">
                        <h1 className={`text-3xl md:text-6xl font-bold leading-tight md:leading-tight`}>
                            Connecting the <span className="relative underline decoration-wavy decoration-gray-400 decoration-1 md:decoration-2">Sports World <img src="/images/sports.png" alt="sports icon" className='inline w-16 md:w-32'/></span> <br /> Like Never Before
                        </h1>

                        <p className="mt-2 md:mt-4 text-gray-600 font-light text-sm md:text-xl">
                            Join a network of athletes, coaches, doctors, venues, brands,
                            and more to elevate your sports career.
                        </p>

                        <div className="flex text-xs md:text-base items-center justify-center flex-row gap-2 md:gap-4 mt-4 md:mt-8">
                            <button className="bg-black text-white px-3 md:px-6 py-3 rounded-full font-bold hover:bg-gray-800 transition">
                                Join Our Network
                            </button>
                            <button className="bg-red-600 text-white px-3 md:px-6 py-3 rounded-full font-bold hover:bg-gray-800 transition">
                                Explore the App
                            </button>
                        </div>
                    </section>
            </div>

            <Image src={"/images/app/app.png"} layout="intrinsic" width={2000} height={2000} alt="Infographic" className="w-[120%] aspect-auto rounded-xl object-cover mx-auto" />
        </div>
    )
}

export default Hero