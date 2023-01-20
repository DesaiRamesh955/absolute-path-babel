import { Button, Layout, Menu, Table, Tag } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
// import  "./App.css";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineUserAdd,
  AiOutlineDelete,
} from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiEdit } from "react-icons/ci";
import { useState } from "react";
import ButtonGroup from "antd/es/button/button-group";

const Dashboard = () => {
  const [collapsed,setCollapsed] = useState(false)

  
  const items = [
    {
      label: "Home",
      key: "home",
      icon: <AiOutlineHome />,
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
        },
        {
          label: "View Users",
          key: "view_users",
          icon: <FiUsers />,
        },
      ],
    },
  ];

  const columns = [
    {
      title:"Name",
      dataIndex:"name",
      key:"name"
    },
    {
      title:"Age",
      dataIndex:"age",
      key:"age"
    },
    {
      title:"Tags",
      dataIndex:"tags",
      key:"tags",
      render:(tags)=>(
        <>
        {
          tags.map((tag)=> (
            <Tag color={tag.length > 5 ? 'green' : 'blue'} key={tag}>{tag}</Tag>
          ))
        }
        </>
      )
    }
    ,
    {
      title:"Action",
      dataIndex:"action",
      key:"action",
      render:(item)=>(
        <ButtonGroup>
          <Button className="warningButton"><CiEdit /></Button>
          <Button danger><AiOutlineDelete /></Button>
        </ButtonGroup>
      )
    }

  ]
  const tableData = [
    {
      key:'1',
      name:"Khushi",
      age:29,
      tags: ['javascript', 'HTML'],
    },
    {
      key:'2',
      name:"Ramesh",
      age:25,
      tags: ['MongoDB', 'Reactjs',"PHP"],

    },

  ]

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
          <Table dataSource={tableData} columns={columns} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
