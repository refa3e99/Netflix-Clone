import { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";
import NavBar from "../NavBar/NavBar";

function Home(props) {
 const [movies , setMovies] = useState([]);

 async function getMovies() {
        let url = process.env.REACT_APP_SERVER;
        let response = await fetch(`${url}/trending`);
        let moviesData = await response.json();
        setMovies(moviesData);
 }
 useEffect(()=>{
    getMovies();
 },[])
    

    return (<>
    <NavBar/>
    <MovieList movies={movies}/>
    
</>)
}
export default Home;

