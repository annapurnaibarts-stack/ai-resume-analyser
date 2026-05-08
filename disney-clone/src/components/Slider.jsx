import React, { useEffect, useState } from "react";
import GlobalApi from '../services/GlobalApi'

function Slider(){
    const [movieList,setmovieList]=useState([]);

    useEffect(() => {
        getTrendingVideos();
    }, []);

    const getTrendingVideos = () => {

        GlobalApi.then((resp) => {
            setmovieList(resp.data.results);
        });

    };

    return(
       <div>
        {movieList.map((item,index)=>{
            <img src='' />
        })}
       </div>
    )
}

export default Slider