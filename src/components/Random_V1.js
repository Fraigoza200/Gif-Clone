import React, {useState, useEffect} from 'react'
import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY

const Random = () => {

    const [gif, setGif] = useState('')

// in functional components. useEffect takes in two paramaters. one is a cb function and the second one is a dependency array.

// if the dependency array is left empty, the useEffect component will act as a Component Did Mount meaning it'll only be initialized on the first render. 
const fetchGif = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

    // this axios request returns a promise
   const {data} = await axios.get(url)   
   
   const imgSrc = data.data.images.downsized_large.url

   setGif(imgSrc)
}

    useEffect(() => {
        fetchGif()
    },[])

    const handleClick = () => {
        fetchGif()
    }


    return (
        <div className='container'>
    <h1> Random Gif</h1>
    <img width='500' src={gif} alt="Random Gif" />
    <button onClick={handleClick}>Click For New Gif</button>
        </div>
    )
}

export default Random