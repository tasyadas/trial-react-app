import React, { useState, useContext, useEffect } from "react"
import { Table, Space, Divider, Button, Collapse } from 'antd';
import { MovieContext } from "../context/MovieContext"
import { Link, useHistory } from "react-router-dom";
import axios from "axios"


const { Panel } = Collapse;

const handleText = (params) => {
    if (params === undefined || params === null) {
        return ''
    } else {
        return params.slice(0, 10) + '...'
    }
}

const MovieList = () => {

  const history = useHistory()
  const {movies, setMovie, movieEdit, movieDelete} = useContext(MovieContext)
  const [search, setSearch] = useState("");
  const [fetchStatus, setFetchStatus] = useState(true);
  const [filter, setFilter] = useState({
      rating: "",
      year: "",
      duration: ""
  });

  useEffect(() => {
    let fetchData = async () => {
        let {data} = await axios.get(`https://backendexample.sanbersy.com/api/data-movie`)

        setMovie([...data])
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
        let {data} = await axios.get(`https://backendexample.sanbersy.com/api/data-movie`)
        let searchOnData = data.filter( res => {
            return Object.values(res).join(' ').toLowerCase().includes(search.toLowerCase())
        })

        setMovie([...searchOnData])
    }

    searchData()
    setSearch("")
  }

  const handleFilter = (event) => {
    event.preventDefault();

    let { rating, year, duration } = filter
    let filterData = async () => {
        let { data } = await axios.get(`https://backendexample.sanbersy.com/api/data-movie`)
        let filterOnData = data.filter( res => {
            return res.rating === parseInt(rating) || res.year === parseInt(year) || res.duration === parseInt(duration)
        })

        setMovie([...filterOnData])
    }

    filterData()
    setFilter({
        rating: "",
        year: "",
        duration: ""
    })
  }

  const columns = [
    {
        title: 'Image',
        dataIndex: 'image_url',
        render: res => <img width={50} height={50} style={{objectFit:"cover"}} src={res} />
    },
    {
        title: 'Title',
        dataIndex: 'title',
        sorter: (a, b) => a.title.length - b.title.length,
        sortDirections: ['descend']
    },
    {
        title: 'Description',
        dataIndex: 'description',
        render: text => <p>{handleText(text)}</p>
    },
    {
        title: 'Year',
        dataIndex: 'year',
        key: 'year',
    },
    {
        title: 'Duration',
        dataIndex: 'duration',
        key: 'duration',
    },
    {
        title: 'Genre',
        dataIndex: 'genre',
        key: 'genre',
    },
    {
        title: 'Rating',
        dataIndex: 'rating',
        key: 'rating',
    },
    {
        title: 'Review',
        dataIndex: 'review',
        render: text => <p>{handleText(text)}</p>
    },
    {
        title: 'Action',
        key: 'id',
        dataIndex: 'id',
        render: (id) => (
            <Space size="middle">
            <button onClick={() => { 
                movieEdit(id) 
                history.push(`/movie/edit/${id}`);
            }} value={id}>Edit</button>
            <button onClick={movieDelete} value={id}>Delete</button>
            </Space>
        ),
    }
  ];

    return (
        <>
            <Divider orientation="left">Search & Filter Movie</Divider>
            <Collapse>
                <Panel header="Search Movie" key="1">
                    <form onSubmit={handleSearch}>
                        <input onChange={onChangeSearch} type={'text'} name="search" /> 

                        <input type={'submit'} value={"search"} />
                    </form>
                </Panel>
                <Panel header="Filter Movie" key="2">
                    <form onSubmit={handleFilter}>
                        <input onChange={onChangeFilter} value={filter.rating} type={'text'} name="rating" placeholder={'Rating'} /> 
                        <input onChange={onChangeFilter} value={filter.year} type={'text'} name="rear" placeholder={'Year'} /> 
                        <input onChange={onChangeFilter} value={filter.duration} type={'text'} name="duration" placeholder={'Duration'} /> 

                        <input type={'submit'} value={"filter"} />
                    </form>
                </Panel>
            </Collapse>
            <br />
            <button onClick={ () => setFetchStatus(true) }>Reset Filter</button> 
            <Divider orientation="left">Data Movie</Divider>
            <Button type="primary"><Link to="/movie/create">Buat Data Movie Baru</Link></Button>
            <Table dataSource={movies} columns={columns} />
        </>
    )

}

export default MovieList