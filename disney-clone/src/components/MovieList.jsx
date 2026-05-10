import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import GlobalApi from '../services/GlobalApi';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import HrMovieCard from './HrMovieCard';

function MovieList({ genreId, index_ }) {

    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        getMovieByGenreId();
    }, [genreId]);

    const getMovieByGenreId = () => {

        GlobalApi.getMovieByGenreId(genreId).then((resp) => {

            console.log(resp.data.results);
            setMovieList(resp.data.results);

        });

    };

    const sliderRight = (element) => {
        if (element) {
            element.scrollLeft += 500;
        }
    };

    const sliderLeft = (element) => {
        if (element) {
            element.scrollLeft -= 500;
        }
    };

    return (

        <div className='relative group overflow-hidden'>

            {/* Left Arrow */}
            <HiChevronLeft
                className='hidden group-hover:block text-white text-[30px] absolute left-2 top-[40%] z-10 cursor-pointer'
                onClick={() =>
                    sliderLeft(document.getElementById('slider_' + genreId))
                }
            />

            {/* Right Arrow */}
            <HiChevronRight
                className='hidden group-hover:block text-white text-[30px] absolute right-2 top-[40%] z-10 cursor-pointer'
                onClick={() =>
                    sliderRight(document.getElementById('slider_' + genreId))
                }
            />

            {/* Movie List */}
            <div
                id={'slider_' + genreId}
                className='flex gap-5 overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth pt-5 px-3 pb-5'
            >

                {movieList.map((item, index) => (

                    <div
                        key={index}
                        className='flex-none w-[220px] md:w-[240px] hover:scale-110 transition-all duration-300 ease-in-out'
                    >
                        {(index + 1) % 3 === 0
                            ? <HrMovieCard movie={item} />
                            : <MovieCard movie={item} />
                        }

                    </div>

                ))}

            </div>

        </div>

    );

}

export default MovieList;