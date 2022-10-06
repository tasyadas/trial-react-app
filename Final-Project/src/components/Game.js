import React, {useState, useContext, useEffect} from "react";
import { Table, Space, Divider, Button, Collapse } from 'antd';
import { GameContext } from "../context/GameContext";
import { Link, useHistory } from "react-router-dom";
import axios from "axios"


const { Panel } = Collapse;

const GameList = () => {

  const history = useHistory()
  const {games, setGame, gameEdit, gameDelete} = useContext(GameContext)
  const [search, setSearch] = useState("");
  const [fetchStatus, setFetchStatus] = useState(true);
  const [filter, setFilter] = useState({
      genre: "",
      platform: "",
      release: ""
  });

  useEffect(() => {
    let fetchData = async () => {
        let {data} = await axios.get(`https://backendexample.sanbersy.com/api/data-game`)

        setGame([...data])
    }
      
    if (fetchStatus) {
        fetchData()
        setFetchStatus(false)
    }
      
  }, [fetchStatus, setFetchStatus]);

  const onChangeSearch = (event) => {
    let value = event.target.value

    setSearch(value)
  }

  const onChangeFilter = (event) => {
    let { name, value }= event.target

    setFilter({...filter, [name] : value})
  }

  const handleSearch = (event) => {
    event.preventDefault();

    let searchData = async () => {
        let {data} = await axios.get(`https://backendexample.sanbersy.com/api/data-game`)
        let searchOnData = data.filter( res => {
            return Object.values(res).join(' ').toLowerCase().includes(search.toLowerCase())
        })

        setGame([...searchOnData])
    }

    searchData()
    setSearch("")
  }

  const handleFilter = (event) => {
    event.preventDefault();

    let { genre, platform, release } = filter
    let filterData = async () => {
        let { data } = await axios.get(`https://backendexample.sanbersy.com/api/data-game`)
        let filterOnData = data.filter( res => {
            return res.genre.toLowerCase() === genre.toLowerCase() || res.platform.toLowerCase() == platform.toLowerCase() || res.release == release
        })

        setGame([...filterOnData])
    }

    filterData()
    setFilter({
        genre: "",
        platform: "",
        release: ""
    })
  }

  const columns = [
    {
        title: 'Image',
        dataIndex: 'image_url',
        render: res => <img width={50} height={50} style={{objectFit:"cover"}} src={res} />
    },
    {
        title: 'Name',
        dataIndex: 'name',
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ['descend']
    },
    {
        title: 'Genre',
        dataIndex: 'genre',
        key: 'genre',
    },
    {
        title: 'Single Player',
        dataIndex: 'singlePlayer',
        key: 'singlePlayer'
    },
    {
        title: 'Multi Player',
        dataIndex: 'multiplayer',
        key: 'multiplayer'
    },
    {
        title: 'Platform',
        dataIndex: 'platform',
        key: 'platform'
    },
    {
        title: 'Release',
        dataIndex: 'release',
        key: 'release'
    },
    {
        title: 'Action',
        key: 'id',
        dataIndex: 'id',
        render: (id) => (
            <Space size="middle">
            <button onClick={() => { 
                gameEdit(id) 
                history.push(`/game/edit/${id}`);
            }} value={id}>Edit</button>
            <button onClick={gameDelete} value={id}>Delete</button>
            </Space>
        ),
    }
  ];

    return (
        <>
            <Divider orientation="left">Search Game</Divider>
            <Collapse>
                <Panel header="Search Movie" key="1">
                    <form onSubmit={handleSearch}>
                        <input onChange={onChangeSearch} type={'text'} name="search" /> 

                        <input type={'submit'} value={"search"} />
                    </form>
                </Panel>
                <Panel header="Filter Movie" key="2">
                    <form onSubmit={handleFilter}>
                        <input onChange={onChangeFilter} value={filter.genre} type={'text'} name="genre" placeholder={'Genre'} /> 
                        <input onChange={onChangeFilter} value={filter.platform} type={'text'} name="platform" placeholder={'Platform'} /> 
                        <input onChange={onChangeFilter} value={filter.release} type={'text'} name="release" placeholder={'Release'} /> 

                        <input type={'submit'} value={"filter"} />
                    </form>
                </Panel>
            </Collapse>
            <br />
            <button onClick={ () => setFetchStatus(true) }>Reset Filter</button> 
            <Divider orientation="left">Data Game</Divider>
            <Button type="primary"><Link to="/game/create">Buat Data Movie Baru</Link></Button>
            <Table dataSource={games} columns={columns} />
        </>
    )

}

export default GameList