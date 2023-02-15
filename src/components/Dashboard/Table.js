import React from 'react'
import ButtonGroup from "antd/es/button/button-group";
import { Button,Table, Tag } from "antd";
import { CiEdit } from "react-icons/ci";

import {
    AiOutlineDelete,
  } from "react-icons/ai";
const TableData = () => {

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
    <Table dataSource={tableData} columns={columns} />
  )
}

export default TableData