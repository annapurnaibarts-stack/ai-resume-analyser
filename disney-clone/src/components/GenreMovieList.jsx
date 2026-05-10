import React from 'react';
import GenresList from '../constant/GenresList';
import MovieList from './MovieList';
function GenreMovieList() {
    return (
        <div class='text-white'>
            {GenresList.genere.map((item, index) => index <= 4 && (
                <div class='p-8 px-8  md:px-16'>
                    <h2 class='text-[20px] text-white font-bold'>{item.name}</h2>
                    <MovieList genreId={item.id} index={index} />
                </div>
            ))}

        </div>
    )


}
export default GenreMovieList