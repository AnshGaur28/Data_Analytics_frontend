export default function Newsletter() {
  return (
    <div className="w-full mx-auto max-w-[1240px]  text-white py-16">
      <div className=" grid grid-cols-3 mx-10 max-lg:grid-cols-1">
        <div className="lg:col-span-2 ">
          <h1 className="font-bold text-lg md:text-xl lg:text-2xl">
            Want tips and tricks to optimize your flow ?
          </h1>
          <p className="text-xs">
            Sign up to our newsletter and stay up to date.
          </p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
              Notify Me
            </button>
          </div>
          <p>
            We care bout the protection of your data. Read our{" "}
            <span className="text-[#00df9a]">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
