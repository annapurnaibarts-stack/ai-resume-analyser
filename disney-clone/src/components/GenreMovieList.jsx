import React from 'react';
import GenresList from '../constant/GenresList';
import MovieList from './MovieList';
function GenreMovieList() {
    return (
        <div className='text-white'>
            {GenresList.genere.map((item, index) => index <= 4 && (
                <div className='p-4 md:p-8 md:px-16 overflow-hidden'>
                    <h2 className='text-[20px] text-white font-bold'>{item.name}</h2>
                    <MovieList genreId={item.id} index={index} />
                </div>
            ))}

        </div>
    )


}
export default GenreMovieList