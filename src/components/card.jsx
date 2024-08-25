export default function Card(){
    return (
        <div className="text-center  p-6 my-5 shadow-lg hover:bg-gray-100 rounded  hover:-translate-y-3 duration-300">
            <h1 className="font-bold text-xl p-2">Single User</h1>
            <p className="font-bold text-3xl p-2 ">$149</p>
            <p className="border-b border-gray-300 font-semibold my-2">500GB storage</p>
            <p className="border-b border-gray-300 font-semibold my-2">1 user allowed</p>
            <p className="border-b border-gray-300 font-semibold my-2">Send up to 2GB </p>
            <button className="bg-green-400 text-black  rounded p-2 font-semibold px-10 hover:text-green-400 hover:bg-black my-6">Start Here</button>
        </div>
    )
}