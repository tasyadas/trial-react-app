import React, { useState, createContext, useEffect } from "react";
import axios from "axios"
import Cookies from 'js-cookie'

export const MovieContext = createContext();

const Headers = () => {
    const token = Cookies.get('token')
    
    return {headers: {"Authorization": "Bearer " + token}}    
}

export const MovieProvider = props => {
    const [movies, setMovie] = useState([])
    const [currentId, setCurrentId] =  useState(null)
    const [inputTitle, setInputTitle] = useState("")
    const [inputDesc, setInputDesc] = useState("")
    const [inputYear, setInputYear] = useState("")
    const [inputDuration, setInputDuration] = useState("")
    const [inputGenre, setInputGenre] = useState("")
    const [inputRating, setInputRating] = useState("")
    const [inputReview, setInputReview] = useState("")
    const [inputImg, setInputImg] = useState("")
    const [token, setToken] = useState(Cookies.get('token') !== undefined)

    useEffect( () => {
        const fetchData = async () => {
        const result = await axios.get(`https://backendexample.sanbersy.com/api/data-movie`)

        let number = 0;
        setMovie(result.data.map(x=>{ 
            number++

            return {
                id: x.id,
                index: number,
                title: x.title,
                description: x.description,
                year: x.year,
                duration: x.duration,
                genre: x.genre,
                rating: x.rating,
                review: x.review,
                image_url: x.image_url
            } 
        }) 
    )}

    fetchData()
    }, [])

    const movieSubmit = (event) => {
        event.preventDefault()

        if (currentId === null){
          // untuk create data baru
          axios.post(`https://backendexample.sanbersy.com/api/data-movie`, {
                title: inputTitle,
                description: inputDesc,
                year: inputYear,
                duration: inputDuration,
                genre: inputGenre,
                rating: inputRating,
                review: inputReview,
                image_url: inputImg
          }, Headers())
          .then(res => {
            let data = res.data
            let number = movies.length + 1

            setMovie([...movies, {
                id: data.id,
                index: number,
                title: data.title,
                description: data.description,
                year: data.year,
                duration: data.duration,
                genre: data.genre,
                rating: data.rating,
                review: data.review,
                image_url: data.image_url
            }])
          })
        }else{
            axios.put(`https://backendexample.sanbersy.com/api/data-movie/${currentId}`, {
                title: inputTitle,
                description: inputDesc,
                year: inputYear,
                duration: inputDuration,
                genre: inputGenre,
                rating: inputRating,
                review: inputReview,
                image_url: inputImg
            }, Headers())
            .then(() => {
                let singleData = movies.find(el=> el.id === currentId)
                singleData.title = inputTitle
                singleData.description = inputDesc
                singleData.year = inputYear
                singleData.duration = inputDuration
                singleData.genre = inputGenre
                singleData.rating = inputRating
                singleData.review = inputReview
                singleData.image_url = inputImg

                setMovie([...movies])
            })      
        }
        
        setInputTitle("")
        setInputDesc("")
        setInputYear("")
        setInputDuration("")
        setInputGenre("")
        setInputRating("")
        setInputReview("")
        setInputImg("")
    }

    const movieEdit = (id) => {
        axios.get(`https://backendexample.sanbersy.com/api/data-movie/${id}`)
        .then(res => {
            let data = res.data

            console.log(Headers());
            
            setInputTitle(data.title)
            setInputDesc(data.description)
            setInputYear(data.year)
            setInputDuration(data.duration)
            setInputGenre(data.genre)
            setInputRating(data.rating)
            setInputReview(data.review)
            setInputImg(data.image_url)
            setCurrentId(data.id)
        })
    }
    
    const movieDelete = (event) => {
        let idmovie = parseInt(event.target.value)
        axios.delete(`https://backendexample.sanbersy.com/api/data-movie/${idmovie}`, Headers())
        .then(() => {
            let newmovie = movies.filter(el=> {return el.id !== idmovie})
            setMovie(newmovie)
        })
    }


    return (
        <MovieContext.Provider value={{
            movieSubmit,
            movieEdit,
            movieDelete,
            token,
            currentId,
            movies,
            inputTitle,
            inputDesc,
            inputYear,
            inputDuration,
            inputGenre,
            inputRating,
            inputReview,
            inputImg,
            setToken,
            setMovie,
            setInputTitle,
            setInputDesc,
            setInputYear,
            setInputDuration,
            setInputGenre,
            setInputRating,
            setInputReview,
            setInputImg
        }}>
        {props.children}
        </MovieContext.Provider>
    );
}