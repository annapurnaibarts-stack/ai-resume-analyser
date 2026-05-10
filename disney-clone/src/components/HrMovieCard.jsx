import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function HrMovieCard({movie}){
    return(
        <div>
        <img src={IMAGE_BASE_URL+movie.backdrop_path}
        className="w-[100px] md:w-[200px] rounded-lg h-[300px]
        hover:border-[3px] border-gray-400 cursor-pointer 
        hover:scale-110 transition-all duration-150 ease-in" />
        <h2 className='text-white text-center text-sm'>{movie.title}</h2> 
        </div>
    )

}
export default HrMovieCard