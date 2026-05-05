import 'react-pro-sidebar/dist/css/styles.css';
import { useState } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent, } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart, FaBars } from 'react-icons/fa';
import { DiReact } from 'react-icons/di';
import { MdDashboard } from 'react-icons/md';
import sidebarBg from '../../assets/bg2.jpg';

const SideBar = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const { image, toggled, handleToggleSidebar } = props;
    return (
        <>
            <ProSidebar
                image={sidebarBg}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: collapsed ? 'center' : 'flex-start', // Căn giữa icon khi thu gọn
                            cursor: 'pointer'
                        }}
                        onClick={() => setCollapsed(!collapsed)} // Click vào cả vùng header để đóng/mở
                    >
                        {collapsed ? (
                            // Khi thu gọn: Chỉ hiện icon Menu (FaBars)
                            <FaBars size={"2em"} />
                        ) : (
                            // Khi mở rộng: Hiện Logo React + Tên
                            <>
                                <DiReact size={"2em"} color={'00bfff'} />
                                <span style={{ marginLeft: 10 }}>Hoi Dan IT</span>
                            </>
                        )}
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem
                            icon={<MdDashboard />}
                        >
                            Dashboard
                            <Link to="/admins" />
                        </MenuItem>

                    </Menu>
                    <Menu iconShape="circle">
                        <SubMenu
                            icon={<FaGem />}
                            title="Quản Lý"
                        >
                            <MenuItem >
                                Quản lý User
                                <Link to="/admins/manage-users" />
                            </MenuItem>
                            <MenuItem >
                                Quản lý Bài Quiz
                                <Link to="/admins/manage-quiz" />
                            </MenuItem>
                            <MenuItem >
                                Quản lý Câu Hỏi
                                <Link to="/admins/manage-questions" />
                            </MenuItem>
                        </SubMenu>

                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 24px',
                        }}
                    >
                        <a
                            href="https://github.com/azouaoui-med/react-pro-sidebar"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: collapsed ? 'center' : 'flex-start' // Căn giữa khi thu gọn
                            }}
                        >
                            <FaGithub size={"1.5em"} />

                            {/* Nếu NOT collapsed thì mới hiện chữ */}
                            {!collapsed && (
                                <span style={{
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    overflow: 'hidden',
                                    marginLeft: '10px' // Tạo khoảng cách với icon
                                }}>
                                    Fork me on GitHub
                                </span>
                            )}
                        </a>
                    </div>
                </SidebarFooter>
            </ProSidebar>
        </>
    )
}

export default SideBar;