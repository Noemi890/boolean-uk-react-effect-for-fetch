import { useEffect, useState } from "react"
import { ArtListItem } from "./ArtListItem"
const URL = 'https://api.artic.edu/api/v1/artworks'

export const ArtList = () => {
    const [art, setArt] = useState([])
    const [imgId, setImgId] = useState('')

    useEffect(() => {
        fetch(URL)
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp.data)
            setArt(resp.data)
        })
        
    },[])

    return (
        <ul className="art-list">
            <ArtListItem art={art}/>
        </ul>
    )
}