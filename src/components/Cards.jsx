import Card from "./card";

export default function Cards(){
    return (
        <div className=" w-full  bg-white text-black " >
            <div className="max-w-[1240px] mx-auto  grid md:grid-cols-3 py-16 bg-white w-full gap-x-5">
            <Card/>
            <Card/>
            <Card/>
            </div>
        </div>
    )
}