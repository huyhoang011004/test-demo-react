import React, { useState } from 'react';
import './ManageUser.scss';
import Button from 'react-bootstrap/Button';
import ModalCreateUser from './ModalCreateUser';
import { FcPlus } from 'react-icons/fc';
const ManageUser = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User</div>
            <div className="users-content">
                <div>
                    <Button variant="primary" onClick={() => setShowModal(true)}>
                        <FcPlus /> Add User
                    </Button>
                </div>

                <div className="users-table">
                    table users
                    <table>
                        <thead>
                            <tr>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <ModalCreateUser show={showModal} setShow={setShowModal} />
        </div>
    );
}
export default ManageUser;