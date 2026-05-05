import React, { useState } from 'react';
import ModalCreateUser from './ModalCreateUser';

const ManageUser = () => {
    return (
        <div className="manage-user-container">
            <div className="title">Manage User</div>
            <div className="content">
                <div>
                    <ModalCreateUser />
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John Doe</td>
                            <td>Admin</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default ManageUser;