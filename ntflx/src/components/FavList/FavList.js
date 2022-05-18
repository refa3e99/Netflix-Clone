import { useEffect, useState } from "react";
import CardMovie from "../Card2";
function FavList(props) {
    const [movies , setMovies] = useState([]);

    async function getMovies() {
           let url = process.env.REACT_APP_SERVER;
           let response = await fetch(`${url}/getMovies`);
           let moviesData = await response.json();
           setMovies(moviesData);
    }
    useEffect(()=>{
       getMovies();
    },[])
    console.log(movies);
    return (<>
        {
        movies.map((movie)=>{
            return(<>
                <CardMovie key={movie.id}
                movie={movie}
                
                />
            </>
            )
        })
    }

</>)
}
export default FavList;