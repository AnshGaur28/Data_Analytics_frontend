import { useState } from "react"

export default function Navbar(){
    const [mobileNav , setMobileNav] = useState(false);

    return <div className="flex flex-row flex-wrap  justify-between mx-auto pt-5 px-4 max-w-[1240px] ">
        <h1 className="text-green-300 font-extrabold lg:text-3xl  text-2xl  ">React</h1>
        <ul className="flex flex-row space-x-5  max-sm:hidden">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Resources</li>
            <li>Company</li>
        </ul>
        <button className="hidden max-sm:block" onClick={()=> setMobileNav(!mobileNav)}>|||</button>

        <div className={!mobileNav? "hidden fixed top-0 left-[-100%] h-full w-[60%] bg-[#000300] max-sm:block" : " hidden fixed top-0 left-0 ease-in-out duration-500 h-full w-[60%] bg-[#000300] max-sm:block"}>
        <h1 className="text-green-300 font-extrabold lg:text-3xl  text-2xl px-4 pt-5 ">React</h1>
        <ul className=" space-x-5    uppercase pt-24  h-full">
            <li className="p-4 border-b border-gray-600 ml-5">Home</li>
            <li className="p-4 border-b border-gray-600">About</li>
            <li className="p-4 border-b border-gray-600">Contact</li>
            <li className="p-4 border-b border-gray-600">Resources</li>
            <li className="p-4 border-b border-gray-600">Company</li>
        </ul>
        </div>

        </div>
}