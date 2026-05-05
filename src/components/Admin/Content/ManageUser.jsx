import React, { useState } from 'react';
import './ManageUser.scss';
import TableUser from './TableUser';
import Button from 'react-bootstrap/Button';
import ModalCreateUser from './ModalCreateUser';
import { FcPlus } from 'react-icons/fc';
const ManageUser = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="manage-user-container">
            <div className="title">
                <h4>Manage User</h4></div>
            <div className="users-content">
                <div>
                    <Button className="btn-add-user" variant="primary" onClick={() => setShowModal(true)}>
                        <FcPlus /> Add New User
                    </Button>
                </div>

                <div className="users-table">
                    <TableUser />
                </div>
            </div>
            <ModalCreateUser show={showModal} setShow={setShowModal} />
        </div>
    );
}
export default ManageUser;