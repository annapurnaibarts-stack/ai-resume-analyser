import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function Slider() {

  const [movieList, setmovieList] = useState([]);

  const elementRef = useRef(null);

  useEffect(() => {
    getTrendingVideos();
  }, []);

  const getTrendingVideos = () => {

    GlobalApi.getTrendingVideos.then((resp) => {
      setmovieList(resp.data.results);
    });
  };

  const sliderRight = () => {

    elementRef.current.scrollBy({
      left: 1350,
      behavior: "smooth"
    });

  };

  const sliderLeft = () => {

    elementRef.current.scrollBy({
      left: -1350,
      behavior: "smooth"
    });

  };

  return (

    <div className="relative overflow-hidden">

      {/* Left Arrow */}
      <HiChevronLeft
        className="hidden md:block text-white text-[40px] absolute left-4 top-[50%] cursor-pointer z-10"
        onClick={sliderLeft}
      />

      {/* Right Arrow */}
      <HiChevronRight
        className="hidden md:block text-white text-[40px] absolute right-4 top-[50%] cursor-pointer z-10"
        onClick={sliderRight}
      />

      {/* Slider */}
      <div
        ref={elementRef}
        className="flex overflow-x-auto w-full px-4 md:px-16 py-4 gap-5 scroll-smooth scrollbar-hide"
      >

        {movieList.map((item, index) => (

          <img
            key={index}
            src={IMAGE_BASE_URL + item.backdrop_path}
            className="min-w-full md:h-[510px] object-cover object-left-top rounded-md"
          />

        ))}

      </div>

    </div>
  );
}

export default Slider;