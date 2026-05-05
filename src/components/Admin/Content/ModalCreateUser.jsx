import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function ModalCreateUser() {
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   return (
      <>
         <Button variant="primary" onClick={handleShow}>
            Add User
         </Button>

         <Modal show={show} onHide={handleClose} size="xl" backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
               <Modal.Title>Create New User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form>
                  <Row className="mb-3">
                     <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                     </Form.Group>

                     <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                     </Form.Group>
                  </Row>

                  <Row className="mb-3">
                     <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="Username" />
                     </Form.Group>

                     <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Role</Form.Label>
                        <Form.Select defaultValue="Choose...">
                           <option value="USER">USER</option>
                           <option value="ADMIN">ADMIN</option>
                        </Form.Select>
                     </Form.Group>
                  </Row>

                  <Row className="md-12">
                     <Form.Label>Image</Form.Label>
                     <input type="file" />
                  </Row>
               </Form>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Close
               </Button>
               <Button variant="primary" onClick={handleClose}>
                  Save
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
}

export default ModalCreateUser;