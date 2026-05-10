import React from "react";
import disney from "./../assets/disney.png";
import pixar from "./../assets/pixar.png";
import marvel from "./../assets/marvel.png";
import starwar from "./../assets/starwar.png";
import nationalG from "./../assets/nationalG.png";

import marvel1 from "./../assets/marvel-1.mp4";
import disney1 from "./../assets/disney-1.mp4";
import pixar1 from "./../assets/pixar-1.mp4";
import starwars1 from "./../assets/star-wars-1.mp4";
import nationalgeographic1 from "./../assets/national-geographic-1.mp4";


function ProductionHouse(){
    const ProductionHouseList=[
        {
            id:1,
            image:disney,
            video:disney1
        },
        {
            id:2,
            image:pixar,
            video:pixar1
        },
        {
            id:3,
            image:marvel,
            video:marvel1
        },
        {
            id:4,
            image:starwar,
            video:starwars1
        },
        {
            id:5,
            image:nationalG,
            video:nationalgeographic1
        }

    ]
    return(
        <div className="flex gap-2 md:gap-5 p-2 px-3 md:px-16 overflow-hidden">
            {ProductionHouseList.map((item)=>{
                return(
                <div className='border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' >
                    <img src={item.image} className="w-full z-[1]" />
                    <video src={item.video}  className="absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50" autoPlay loop playsInline />
                </div>
                )
            })}
        </div>
    );
}
export default ProductionHouse
