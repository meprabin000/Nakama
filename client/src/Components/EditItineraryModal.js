import { Form, Modal } from "react-bootstrap";

const EditItineraryModal = (props) => {
    return ( <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Itinerary
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
                <Form.Label>Name of the itinerary:</Form.Label>
                <Form.Control
                    type="text"
                    id = "itinerary_name" 
                />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal> );
}
 
export default EditItineraryModal;