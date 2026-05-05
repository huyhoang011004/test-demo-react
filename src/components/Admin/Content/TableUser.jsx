import { use, useEffect, useState } from 'react';
import { getAllUsers } from '../../../services/apiService';
import Table from 'react-bootstrap/Table';

const TableUser = (props) => {

    const [listUsers, setListUsers] = useState([]);

    useEffect(() => {
        fetchAllUsers();
    }, []);

    const fetchAllUsers = async () => {
        let res = await getAllUsers();
        if (res && res.EC === 0) {
            setListUsers(res.DT);
        }
    };

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>No</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {listUsers && listUsers.length > 0 &&
                    listUsers.map((item, index) => {
                        return (
                            <tr key={`table-user-${index + 1}`}>
                                <td>{index + 1}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.role}</td>
                                <td>
                                    <button className='btn btn-secondary'>View</button>
                                    <button className='btn btn-warning mx-3'>Edit</button>
                                    <button className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
                {(!listUsers || listUsers.length === 0) &&
                    <tr>
                        <td colSpan={4} style={{ textAlign: 'center' }}>No data</td>
                    </tr>
                }
            </tbody>
        </Table>
    );
}


export default TableUser;