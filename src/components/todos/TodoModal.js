import React, { useState } from 'react'
import { Modal ,Button,Form} from 'react-bootstrap';
function TodoModal({todo}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const  [text,setText] = useState("")
    const handleText  = (e)  => {
        setText(e.target.value)
    }
    return (
        <div>

        <Button variant="primary" onClick={handleShow}>
        edit
      </Button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>edit task for todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>description</Form.Label>
    <Form.Control 
       onChange ={handleText}
            value={todo.description}
    type="text" placeholder="Enter description" />
 
  </Form.Group>

 
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

</Form>
        
        
        
        
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            update
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default TodoModal
