import React, {useContext} from "react"
import { Button, Table, Tag, Space } from 'antd';
import { useHistory } from "react-router-dom";
import { MhsContext } from "../Tugas-13/MhsContext"
import '../Tugas-13/App.css';



function FormMhsButton() {
    let history = useHistory();
  
    function handleClick() {
      history.push("/tugas-14-form");
    }
  
    return (
      <Button className="createStudent" type="primary" onClick={handleClick}>Buat Data Nilai Mahasiswa Baru</Button>
    );
}

const MhsList1 = () =>{
  const {mahasiswa, handleEdit, handleDelete} = useContext(MhsContext)

  const columns = [
    {
        title: 'Nama',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Mata Kuliah',
        dataIndex: 'course',
        key: 'course',
    },
    {
        title: 'Nilai',
        dataIndex: 'score',
        key: 'score',
    },
    {
        title: 'Indeks Nilai',
        dataIndex: 'index',
        key: 'index',
    },
    {
        title: 'Action',
        key: 'action',
        dataIndex: 'id',
        render: (id) => (
            <Space size="middle">
            <button onClick={handleEdit} value={id}>Edit</button>
            <button onClick={handleDelete} value={id}>Delete</button>
            </Space>
        ),
    }
  ];

    return(
        <>
            <h1>Daftar Mahasiswa</h1>
            <FormMhsButton />
            <Table dataSource={mahasiswa} columns={columns} />;
        </>
    )

}

export default MhsList1