import  Card  from "react-bootstrap/Card";
import CardMovie from "../Card";
function Movie(props) {
    return (<>
    {
        props.movies.map((movie)=>{
            return(<>
                <CardMovie movie={movie}/>
            </>
            )
        })
    }
</>)
}
export default Movie;