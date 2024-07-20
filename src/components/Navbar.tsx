// "use client";

// import Image from 'next/image';
// import { useEffect, useState } from 'react';

// const Navbar = () => {
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 60) {
//         setIsVisible(false);
//       } else {
//         setIsVisible(true);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <header className="h-10 w-full z-[999]">
//       <div className={`w-full ${!isVisible ? 'bg-white fixed top-0 shadow' : 'bg-transparent'} py-4 flex px-10 justify-between items-center transition-all duration-500 z-[999]`}>
//           <Image src="/logo_long.svg" alt="Logo" width={200} height={700} />
//         <nav>
//           <ul className="flex items-center gap-10 text-lg">
//             <li><a href="#about" className="text-black">About</a></li>
//             <li><a href="#projects" className="text-black">Projects</a></li>
//             <li><a href="#contact" className="text-black">Contact</a></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Navbar;


"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Navbar() {

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className={`fixed flex items-center justify-center w-full z-[40] -top-2`}>
      <Link href="#" className={`flex w-[80%] md:w-1/4 items-center justify-center gap-2 transition-all duration-200 mx-auto py-4  md:px-10 px-6 rounded-b-[2rem] ${!isVisible ? 'bg-white backdrop-blur-sm top-0 shadow-xl' : 'bg-transparent'}`} prefetch={false}>
        <Image
          src="/logo_long.svg"
          alt="Logo"
          width={200}
          height={700}
          className="w-32 md:w-44 mt-1"
        />
      </Link>
      {/* <div className="hidden md:flex gap-10">
        {menuItems.map((item) => (
          <Link key={item.name} href={item.href} className="text-lg font-normal hover:underline" prefetch={false}>
            {item.name}
          </Link>
        ))}
      </div> */}
      {/* <Sheet>
        <SheetTrigger asChild>
          <Menu className={`h-6 w-6 cursor-pointer md:hidden`} />
        </SheetTrigger>
        <SheetContent side="right">
          <div className="grid w-[200px] p-4">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-lg font-light hover:underline underline-offset-4" prefetch={false}>
                {item.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet> */}
    </div>
  )
}