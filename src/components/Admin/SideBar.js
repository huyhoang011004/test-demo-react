import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
const SideBar = () => {
    return (
        <div>
            <ProSidebar>
                <Menu>
                    <MenuItem>Dashboard</MenuItem>
                    <MenuItem>Profile</MenuItem>
                    <SubMenu title="Settings">
                        <MenuItem>General</MenuItem>
                        <MenuItem>Security</MenuItem>
                    </SubMenu>
                </Menu>
            </ProSidebar>
        </div>
    );
};

export default SideBar;