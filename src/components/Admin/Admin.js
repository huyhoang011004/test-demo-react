import SideBar from "./SideBar";
import './Admin.scss';
import { FaBars } from 'react-icons/fa';
import { useState } from "react";

const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed} />
            </div>
            <div className="admin-content">
                <div className="admin-header">
                    <FaBars size={"2em"} onClick={() => setCollapsed(!collapsed)} />
                </div>
                <div className="admin-main">
                    <h1>Admin Page</h1>
                </div>
            </div>
        </div>
    )
}
export default Admin;