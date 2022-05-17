import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import  Modal from "react-bootstrap/Modal";
import { useState } from "react";
import ModalMovie from "./ModalMovie/ModalMovie";
export default function CardMovie(props){
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
<Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`} />
  <Card.Body>
    <Card.Title>{props.movie.title}</Card.Title>
    <Card.Text>
      {props.movie.overview}
    </Card.Text>
    <Button variant="primary"
    onClick={() => {
      handleShow(props.movie);
    }}
    >Add to favorites</Button>
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
    />
  )
}
        </>
    )
}