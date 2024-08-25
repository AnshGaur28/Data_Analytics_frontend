import { ReactTyped } from "react-typed";
export default function Hero(){
    return (
        <div className="w-full h-screen max-w-[800px] mx-auto font-bold text-white text-center pt-40">
            <p className="uppercase text-green-300  text-lg sm:text-xl md:text-3xl lg:text-4xl p-2">Growing With Data Analytics</p>
            <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl  p-2">Grow with data.</h2>
            <div className="text-lg sm:text-xl md:text-3xl lg:text-4xl  ">Fast, flexible financing for  <ReactTyped strings={["BTB" , "BTC" , "SAAS"]} typeSpeed={140} loop /></div>
            <p className="font-semibold md:text-xl  text-gray-600 text-md p-2">Monitor your BTB , BTC & SAAS to improve buisness analytics</p>
            <button className="bg-green-400 p-2 rounded text-black mx-5">Get Started</button>
        </div>
    )
}