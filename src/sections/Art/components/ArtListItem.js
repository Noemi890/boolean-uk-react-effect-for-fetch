import { useEffect, useState } from "react"
import { SubjectList } from "./SubjectList"
export const ArtListItem = ({art}) => {

  return (
    <>
    {
      art.map((item, index) => {
        return (
          <li key={index}>
            <div className="frame">
              <img src={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}/>
            </div>
            <h3>{item.title}</h3>
            <p>{`Artist: ${item.artist_title}`}</p>
            <h4>Artistic Subjects:</h4>
            <ul>
              <SubjectList artist={item}/>
            </ul>
          </li>
        )
      })
    }
    </>
  )
}