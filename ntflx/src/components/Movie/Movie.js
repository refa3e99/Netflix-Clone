import  Card  from "react-bootstrap/Card";
import CardMovie from "../Card";
import ModalMovie from "../ModalMovie/ModalMovie"
function Movie(props) {
    return (<>
    {
        props.movies.map((movie)=>{
            return(<>
                <CardMovie key={movie.id}
                movie={movie}
                
                />
                <ModalMovie />
            </>
            )
        })
    }
</>)
}
export default Movie;