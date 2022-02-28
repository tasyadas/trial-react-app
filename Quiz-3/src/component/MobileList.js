import React, {useContext} from "react"
import { Table, Space } from 'antd';
import { MobileContext } from "../context/mobileContext"
import { Link, useHistory } from "react-router-dom";
import "antd/dist/antd.css";


const MobileList1 = () =>{
  const {mobile, handleEdit, handleDelete} = useContext(MobileContext)
  const history = useHistory()
  const columns = [
    {
        title: 'No',
        dataIndex: 'index',
        key: 'index',
    },
    {
        title: 'Nama',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Release Year',
        dataIndex: 'release_year',
        key: 'release_year',
    },
    {
        title: 'Size',
        dataIndex: 'size',
        key: 'size',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Rating',
        dataIndex: 'rating',
        key: 'rating',
    },
    {
        title: 'Platform',
        dataIndex: 'platform',
        key: 'platform',
    },
    {
        title: 'Action',
        key: 'id',
        dataIndex: 'id',
        render: (id) => (
            <Space size="middle">
            <button onClick={() => { 
                handleEdit(id) 
                history.push(`/mobile-form/edit/${id}`);
            }} value={id}>Edit</button>
            <button onClick={handleDelete} value={id}>Delete</button>
            </Space>
        ),
    }
  ];

    return(
        <>
            <h1 style={{textAlign: "center"}}>Mobile Apps List</h1>
            <Link to="/mobile-form">Buat Data Mobile Baru</Link>
            <Table dataSource={mobile} columns={columns} />
        </>
    )

}

export default MobileList1