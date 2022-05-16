import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
export default function CardMovie(props){
  let imgUrl = "https://image.tmdb.org/t/p/original";
    return (
        <>
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`} />
  <Card.Body>
    <Card.Title>{props.movie.title}</Card.Title>
    <Card.Text>
      {props.movie.overview}
    </Card.Text>
    <Button variant="primary">Add to favorites</Button>
  </Card.Body>
</Card>
        </>
    )
}