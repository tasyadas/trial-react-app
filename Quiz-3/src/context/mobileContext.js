import React, { useState, createContext, useEffect } from "react";
import axios from "axios"

export const MobileContext = createContext();

export const MobileProvider = props => {
    const [mobile, setMobile] = useState([])
    const [currentId, setCurrentId] =  useState(null)
    const [inputName, setInputName] = useState("")
    const [inputCategory, setInputCategory] = useState("")
    const [inputDesc, setInputDesc] = useState("")
    const [inputRelease, setInputRelease] = useState("")
    const [inputSize, setInputSize] = useState("")
    const [inputPrice, setInputPrice] = useState("")
    const [inputRating, setInputRating] = useState("")
    const [inputImg, setInputImg] = useState("")
    const [inputIsAndroidApp, setInputIsAndroidApp] = useState(true)
    const [inputIsIOSApp, setInputIsIOSApp] = useState(true)

    useEffect( () => {
        const fetchData = async () => {
        const result = await axios.get(`http://backendexample.sanbercloud.com/api/mobile-apps`)

        let number = 0;
        setMobile(result.data.map(x=>{ 
            number++

            let platform = []

            if (x.is_android_app) {
                platform.push("Android")
            }

            if (x.is_ios_app) {
                platform.push("IOS")
            }

            return {
                id: x.id,
                index: number,
                name: x.name,
                description: x.description,
                category: x.category,
                size: x.size,
                price: x.price,
                rating: x.rating,
                image_url: x.image_url,
                release_year: x.release_year,
                platform: platform
            } 
        }) 
    )}

    fetchData()
    }, [])


    const handleSubmit = (event) => {
        event.preventDefault()

        if (currentId === null){
          // untuk create data baru
          axios.post(`http://backendexample.sanbercloud.com/api/mobile-apps`, {
                name: inputName,
                description: inputDesc,
                category: inputCategory,
                size: inputSize,
                price: inputPrice,
                rating: inputRating,
                image_url: inputImg,
                release_year: inputRelease,
                is_android_app: inputIsAndroidApp,
                is_ios_app: inputIsIOSApp
          })
          .then(res => {
            let data = res.data
            let number = mobile.length + 1
            let platform = []

            if (res.is_android_app) {
                platform.push("Android")
            }

            if (res.is_ios_app) {
                platform.push("IOS")
            }

            setMobile([...mobile, {
                id: data.id,
                index: number,
                name: data.name,
                description: data.description,
                category: data.category,
                size: data.size,
                price: data.price,
                rating: data.rating,
                image_url: data.image_url,
                release_year: data.release_year,
                platform: platform
            }])
          })
        }else{
            axios.put(`http://backendexample.sanbercloud.com/api/mobile-apps/${currentId}`, {
                name: inputName,
                description: inputDesc,
                category: inputCategory,
                size: inputSize,
                price: inputPrice,
                rating: inputRating,
                image_url: inputImg,
                release_year: inputRelease,
                is_android_app: inputIsAndroidApp,
                is_ios_app: inputIsIOSApp
            })
            .then(() => {
                let singleData = mobile.find(el=> el.id === currentId)
                singleData.name = inputName
                singleData.description = inputDesc
                singleData.category = inputCategory
                singleData.size = inputSize
                singleData.price = inputPrice
                singleData.rating = inputRating
                singleData.image_url = inputImg
                singleData.release_year = inputRelease
                singleData.is_android_app = inputIsAndroidApp
                singleData.is_ios_app = inputIsIOSApp

                setMobile([...mobile])
            })      
        }
        
        setInputName("")
        setInputCategory("")
        setInputDesc("")
        setInputRelease("")
        setInputSize("")
        setInputPrice("")
        setInputRating("")
        setInputImg("")
        setInputIsAndroidApp(true)
        setInputIsIOSApp(true)
    }

    const handleEdit = (id) =>{
        axios.get(`http://backendexample.sanbercloud.com/api/mobile-apps/${id}`)
        .then(res => {
            let data = res.data
            
            setInputName(data.name)
            setInputCategory(data.category)
            setInputDesc(data.description)
            setInputRelease(data.release_year)
            setInputSize(data.size)
            setInputPrice(data.price)
            setInputRating(data.rating)
            setInputImg(data.image_url)
            setInputIsAndroidApp(data.is_android_app)
            setInputIsIOSApp(data.is_ios_app)
            setCurrentId(data.id)
        })
    }
    
    const handleDelete = (event) => {
        let idMobile = parseInt(event.target.value)
        axios.delete(`http://backendexample.sanbercloud.com/api/mobile-apps/${idMobile}`)
        .then(() => {
            let newMobile = mobile.filter(el=> {return el.id !== idMobile})
            setMobile(newMobile)
        })
    }


    return (
        <MobileContext.Provider value={{
            handleSubmit,
            handleEdit,
            handleDelete,
            currentId,
            mobile,
            currentId,
            inputName,
            inputCategory,
            inputDesc,
            inputRelease,
            inputSize,
            inputPrice,
            inputRating,
            inputImg,
            inputIsAndroidApp,
            inputIsIOSApp,
            setMobile,
            setInputName,
            setInputCategory,
            setInputDesc,
            setInputRelease,
            setInputSize,
            setInputPrice,
            setInputRating,
            setInputImg,
            setInputIsAndroidApp,
            setInputIsIOSApp
        }}>
        {props.children}
        </MobileContext.Provider>
    );
}