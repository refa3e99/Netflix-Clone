import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import  Modal from "react-bootstrap/Modal";
import { useState,useEffect } from "react";
import ModalMovie from "./ModalMovie2";

export default function CardMovie(props){


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
  


  function updateMovie(newMovie, id) {
    console.log("newMovie", newMovie, id);
    let updatedRecipe = movies.map(movie => {
      if (movie.id === id) {
        movie.comment = newMovie.userComment;
        return movie;
      } else {
        return movie;
      }
    })
    setMovies(updatedRecipe);
   }

  useEffect(() => {
    getMovies();
  }, []);





  const [show,setShow] = useState(false);
  const [choosenCard,setChoosenCard] = useState();

  const handleShow = (movie) => {
    setShow(true);
    setChoosenCard(movie);
  }
  const handleClose = () => setShow(false);
  
    return (
        <>
<Card style={{ width: "18rem",
            textAlign: "center",
            marginTop: "3rem",
            boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",}}>
<Card.Img variant="top" src={"https://th.bing.com/th/id/R.1563d9d468121e914f65ea5d19c9c6df?rik=vu59nX2jmYxorQ&pid=ImgRaw&r=0"} />
  <Card.Body>
    <Card.Title>{props.movie.title}</Card.Title>
    <Button variant="primary"
    onClick={() => {
      handleShow(props.movie);
    }}
    >details</Button>
  </Card.Body>
</Card>
{
  choosenCard && (
    <ModalMovie
      show={show}
      handleClose={handleClose}
      choosenCard={choosenCard}
      poster_path={props.movie.poster_path}
      title={props.movie.title}
      overview={props.movie.overview}
      movies={movies}
      updateMovie={updateMovie}
    />
  )
}
        </>
    )
}