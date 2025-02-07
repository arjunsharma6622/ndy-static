import { ArrowUpRight, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className=" dots">
            <div className="flex items-center justify-center h-full w-full px-4 pb-10 pt-20 md:px-10 md:pt-24 md:pb-10">
                    <section className=" text-black text-center flex flex-col items-center">

                        <h1 className={`text-4xl md:text-6xl font-black max-w-2xl mx-auto relative text-center`}>
                            Building the LinkedIn for <span className="underline decoration-wavy decoration-gray-400 decoration-1 md:decoration-2 underline-offset-4">Sports 
                                <img src="/images/sports.svg" alt="sports icon" className='grayscale w-12 h-12 md:w-24 md:h-24 inline mb-2 ml-1 md:mb-4 md:ml-2'/>
                            </span>

                        </h1>

                        <div className="mt-4 flex text-xs md:text-base items-center justify-center flex-row gap-2 md:gap-4">
                            <Link href="https://chat.whatsapp.com/B7weei5shYhHdlH3nopdN9" className="bg-black text-white px-3 md:px-6 py-3 rounded-full font-bold hover:bg-gray-800 transition">
                                Join Our Network
                            </Link>
                            <Link href={"https://notdoneyet.vercel.app/signup"} className="bg-red-600 text-white px-4 md:px-6 py-3 rounded-full font-bold hover:bg-gray-800 transition">
                                Sign Up
                            </Link>
                        </div>

                    </section>
            </div>

            <Image src={"/images/app/app.png"} layout="intrinsic" width={2000} height={2000} alt="Infographic" className="w-[120%] scale-150 md:scale-100 aspect-auto rounded-xl overflow-hidden object-cover mx-auto my-8" />
        </div>
    )
}

export default Hero