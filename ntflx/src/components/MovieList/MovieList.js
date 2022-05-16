import Movie from '../Movie/Movie';
function MovieList(props) {
let movies = props.movies;
    return (<>
        <Movie movies={movies}/>
</>)
}
export default MovieList;