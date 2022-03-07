import React, { useState, createContext, useEffect } from "react";
import axios from "axios"
import Cookies from 'js-cookie'

export const GameContext = createContext();

const Headers = () => {
    const token = Cookies.get('token')
    
    return {headers: {"Authorization": "Bearer " + token}}    
}

export const GameProvider = props => {
    const [games, setGame] = useState([])
    const [currentId, setCurrentId] =  useState(null)
    const [inputName, setInputName] = useState("")
    const [inputGenre, setInputGenre] = useState("")
    const [inputSinglePlayer, setInputSinglePlayer] = useState(false)
    const [inputMultiplayer, setInputMultiplayer] = useState(false)
    const [inputPlatform, setInputPlatform] = useState("")
    const [inputRelease, setInputRelease] = useState("")
    const [inputImg, setInputImg] = useState("")

    useEffect( () => {
        const fetchData = async () => {
        const result = await axios.get(`https://backendexample.sanbersy.com/api/data-game`)

        let number = 0;
        setGame(result.data.map(x=>{ 
            number++

            return {
                id: x.id,
                index: number,
                name: x.name,
                genre: x.genre,
                singlePlayer: x.singlePlayer,
                multiplayer: x.multiplayer,
                platform: x.platform,
                release: x.release,
                image_url: x.image_url
            } 
        }) 
    )}

    fetchData()
    }, [])

    const gameSubmit = (event) => {
        event.preventDefault()

        if (currentId === null){
          // untuk create data baru
          axios.post(`https://backendexample.sanbersy.com/api/data-game`, {
                name: inputName,
                genre: inputGenre,
                singlePlayer: inputSinglePlayer,
                multiplayer: inputMultiplayer,
                platform: inputPlatform,
                release: inputRelease,
                image_url: inputImg
          }, Headers())
          .then(res => {
            let data = res.data
            let number = games.length + 1

            setGame([...games, {
                id: data.id,
                index: number,
                name: data.name,
                genre: data.genre,
                singlePlayer: data.singlePlayer,
                multiplayer: data.multiplayer,
                platform: data.platform,
                release: data.release,
                image_url: data.image_url
            }])
          })
        }else{
            axios.put(`https://backendexample.sanbersy.com/api/data-game/${currentId}`, {
                name: inputName,
                genre: inputGenre,
                singlePlayer: inputSinglePlayer,
                multiplayer: inputMultiplayer,
                platform: inputPlatform,
                release: inputRelease,
                image_url: inputImg
            }, Headers())
            .then(() => {
                let singleData = games.find(el=> el.id === currentId)
                singleData.name = inputName
                singleData.genre = inputGenre
                singleData.singlePlayer = inputSinglePlayer
                singleData.multiplayer = inputMultiplayer
                singleData.platform = inputPlatform
                singleData.release = inputRelease
                singleData.image_url = inputImg

                setGame([...games])
            })      
        }
        
        setInputName("")
        setInputGenre("")
        setInputSinglePlayer("")
        setInputMultiplayer("")
        setInputPlatform("")
        setInputRelease("")
        setInputImg("")
    }

    const gameEdit = (id) =>{
        axios.get(`https://backendexample.sanbersy.com/api/data-game/${id}`)
        .then(res => {
            let data = res.data

            console.log(data);
            
            setInputName(data.name)
            setInputGenre(data.genre)
            setInputSinglePlayer(data.singlePlayer)
            setInputMultiplayer(data.multiplayer)
            setInputPlatform(data.platform)
            setInputRelease(data.release)
            setInputImg(data.image_url)
            setCurrentId(data.id)
        })
    }
    
    const gameDelete = (event) => {
        let idGame = parseInt(event.target.value)
        axios.delete(`https://backendexample.sanbersy.com/api/data-game/${idGame}`, Headers())
        .then(() => {
            let newGame = games.filter(el=> {return el.id !== idGame})
            setGame(newGame)
        })
    }


    return (
        <GameContext.Provider value={{
            gameSubmit,
            gameEdit,
            gameDelete,
            currentId,
            games,
            inputName,
            inputGenre,
            inputSinglePlayer,
            inputMultiplayer,
            inputPlatform,
            inputRelease,
            inputImg,
            setGame,
            setInputName,
            setInputGenre,
            setInputSinglePlayer,
            setInputMultiplayer,
            setInputPlatform,
            setInputRelease,
            setInputImg
        }}>
        {props.children}
        </GameContext.Provider>
    );
}