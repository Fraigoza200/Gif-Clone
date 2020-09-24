import React, {useState, useEffect} from 'react'
import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY

const Random = () => {

    const [gif, setGif] = useState('')
    const [tag, setTag] = useState('dogs')


const fetchGif = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`

    // this axios request returns a promise
   const {data} = await axios.get(url)   
   
   const imgSrc = data.data.images.downsized_large.url

   setGif(imgSrc)
}

    useEffect(() => {
        fetchGif(tag)
    },[])

    const handleClick = () => {
        fetchGif(tag)
    }


    return (
        <div className='container'>
    <h1> Random {tag} Gif</h1>
    <img width='500' src={gif} alt="Random Tag" />
    <input value={tag} onChange={(e) => setTag(e.target.value)} />
    <button onClick={handleClick}>Click For New Tag</button>
        </div>
    )
}

export default Random