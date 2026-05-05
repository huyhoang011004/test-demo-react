import { useState } from 'react';
import { Form, Col, Row, InputGroup, Button, Modal } from 'react-bootstrap';
import { FcPlus } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from 'axios';
function ModalCreateUser(props) {
   const { show, setShow } = props;
   const handleClose = () => {
      setShow(false);
      setEmail('');
      setPassword('');
      setUsername('');
      setRole('USER');
      setImage('');
      setPreviewImage('');
   }
   const handleShow = () => setShow(true);

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [username, setUsername] = useState('');
   const [role, setRole] = useState('USER');
   const [image, setImage] = useState('');
   const [showPassword, setShowPassword] = useState(false);
   const [previewImage, setPreviewImage] = useState('');

   const handleChangeImage = (e) => {
      if (e.target && e.target.files && e.target.files[0]) {
         setPreviewImage(URL.createObjectURL(e.target.files[0]));
         setImage(e.target.files[0]);
      }
   };

   const handleSubmitCreateUser = async () => {
      // validate
      // submit api
      // let data = {
      //    email: email,
      //    password: password,
      //    username: username,
      //    role: role,
      //    userImage: image
      // }
      // console.log(data);

      const data = new FormData();
      data.append('email', email);
      data.append('password', password);
      data.append('username', username);
      data.append('role', role);
      data.append('userImage', image);

      let res = await axios.post('http://localhost:8081/api/v1/participant', data);
      console.log(res);
   }

   return (
      <>
         <Modal show={show} onHide={handleClose} size="xl" backdrop="static" keyboard={false} className='modal-add-user'>
            <Modal.Header closeButton>
               <Modal.Title>Create New User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form>
                  <Row className="mb-3">
                     <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                     </Form.Group>

                     <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <InputGroup>
                           <Form.Control
                              type={showPassword ? "text" : "password"} // 2. Thay đổi type
                              placeholder="Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                           />

                           <InputGroup.Text
                              style={{ cursor: 'pointer' }}
                              onClick={() => setShowPassword(!showPassword)}
                           >
                              {showPassword ? <FaEye /> : <FaEyeSlash />}
                           </InputGroup.Text>
                        </InputGroup>
                     </Form.Group>
                  </Row>

                  <Row className="mb-3">
                     <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                     </Form.Group>

                     <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Role</Form.Label>
                        <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
                           <option value="USER">USER</option>
                           <option value="ADMIN">ADMIN</option>
                        </Form.Select>
                     </Form.Group>
                  </Row>

                  <Form.Label className='label-upload' htmlFor='upload-file'>
                     <FcPlus /> Upload File Image
                  </Form.Label>
                  <input type="file" id="upload-file" hidden
                     onChange={(e) => handleChangeImage(e)} />

                  <div className="mb-3 img-preview">
                     {previewImage ? <img src={previewImage} /> : <span>Preview Image</span>}
                  </div>
               </Form>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Close
               </Button>
               <Button variant="primary" onClick={handleSubmitCreateUser}>
                  Save
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
}

export default ModalCreateUser;