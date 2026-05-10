import React from 'react';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
function MovieCard({movie}){
    return(
        <div className="overflow-hidden rounded-xl">
            <img 
                className="w-full h-[300px] object-cover
                hover:border-[3px] border-gray-400 cursor-pointer "
                src={IMAGE_BASE_URL + movie.poster_path}
                alt={movie.title || movie.name || 'movie poster'}
            />
           <h2 class='text-white text-center '>{movie.title}</h2> 

        </div>
    )
}
export default MovieCard