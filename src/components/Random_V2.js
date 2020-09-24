import React from 'react'
import useGif from '../components/useGif'

const Tag = () => {
    const [gif, fetchGif] = useGif()

    return (
            <div className='container'>
        <h1> Random Gif</h1>
        <img width='500' src={gif} alt="Random Tag" />
    
        <button onClick={fetchGif()}>Click For New Tag</button>
            </div>
    )
}

export default Tag