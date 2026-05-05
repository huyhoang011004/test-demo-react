import SideBar from "./SideBar";
import './Admin.scss';

import { useState } from "react";
import { Outlet } from "react-router-dom";

const Admin = (props) => {

    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar />
            </div>
            <div className="admin-content">
                <div className="admin-header">

                </div>
                <div className="admin-body">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
export default Admin;