import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRef } from "react";

function ModalMovie(props) {
    return (<>
        <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
            alt="recipe"
            style={{ width: "100%" }}
          />
          <br />
          
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Add Comment</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Comment"
              />
              <Form.Text className="text-muted">add your own comment</Form.Text>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
            >
              Submit comment
            </Button>
            <Button
              variant="primary"
              type="submit"
            >
              Add to favorite
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