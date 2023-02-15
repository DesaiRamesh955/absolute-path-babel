import { Layout, Menu } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
// import  "./App.css";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import {  Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [collapsed,setCollapsed] = useState(false)
  const navigate = useNavigate();
  
  const items = [
    {
      label: "Home",
      key: "home",
      icon: <AiOutlineHome />,
      onClick: () => navigate("/dashboard"),
    },
    {
      label: "Users",
      key: "users",
      icon: <AiOutlineUser />,
      children: [
        {
          label: "Add User",
          key: "add_user",
          icon: <AiOutlineUserAdd />,
          onClick: () => navigate("/dashboard/adduser"),
        },
        {
          label: "View Users",
          key: "view_users",
          icon: <FiUsers />,
        },
      ],
    },
  ];

 

  return (
    <Layout style={{height:"100vh",width:"100vw"}}>
      <Header className="header" style={{backgroundColor: "white"}}>
       <div className="hamburgerContainer">
       <GiHamburgerMenu style={{cursor:"pointer"}} size={24} onClick={() => setCollapsed(!collapsed)} />
       </div>
      </Header>
      <Layout>
        <Sider collapsed={collapsed} theme="light">
          <Menu mode="inline" items={items} />
        </Sider>
        <Content style={{margin:"25px",backgroundColor: "white"}}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
