import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRef } from "react";

function ModalMovie(props) {


  let commentRef = useRef()
  function handleComment(e){
    e.preventDefault();
    let userComment = commentRef.current.value;
    console.log(userComment);
    // let newRecipe = { ...props.choosenCard, comment: userComment }
    let newMovie = { ...props.choosenCard, userComment };
    

    props.updateMovie(newMovie, newMovie.id);
    // console.log("result is ",props.choosenCard)

  }

  async function handleDelete(e, movie) {
    e.preventDefault();
    
    let data = {
      id:movie.id,
      title: movie.title ,
      category:movie.category ,
      overview: movie.overview,
      age:movie.age ,
      comment :  movie.comment
    };

    let url = `${process.env.REACT_APP_SERVER}/deleteMovie/${data.id}`;

    console.log("1,data", data);
    let response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      
    })

    let removedMovie = await response.json();
    console.log("2,removedMovie", removedMovie);


 

  }


    return (<>
        <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.choosenCard.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={"https://th.bing.com/th/id/R.1563d9d468121e914f65ea5d19c9c6df?rik=vu59nX2jmYxorQ&pid=ImgRaw&r=0"}
            alt="Movie"
            style={{ width: "100%" }}
          />
          <br />
          <br />
          <p>
            {props.choosenCard.comment
              ? props.choosenCard.comment
              : "No comment added"}
          </p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <p>{props.overview}</p>
              <Form.Label>Add Comment</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Comment"
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              onClick={(e) => handleComment(e)}
            >
              Update Comment
            </Button>
            <Button
              style={{margin:"1rem"}}
              variant="primary"
              type="submit"
              onClick={(e) => handleDelete(e, props.choosenCard)}
            >
              Remove from favorite
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
</>)
}
export default ModalMovie;