import { useEffect, useState } from "react"
import { AdviceSlip } from "./components/AdviceSlip"
import FavouriteSlipsList from './components/FavouriteSlipsList'

const API = 'https://api.adviceslip.com/advice'


function AdviceSection() {

  const [advices, setAdvices] = useState([])
  const [preferredAdvice, setPreferredAdvice] = useState([])
  const [handleClick, setHandleClick] = useState(false)

  const handleFavouritesClick = () => {
    const myCopy = preferredAdvice.slice()
    const find = myCopy.find(item => item.id === advices[0].id)
    if(find === undefined) myCopy.push(...advices)
    else return
    setPreferredAdvice(myCopy)
  }

  useEffect(() => {
    fetch(API)
      .then(resp => resp.json())
      .then(resp => {
        setAdvices([resp.slip])
      })
  },[handleClick])

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <AdviceSlip advices={advices}/>
        <button onClick={() => setHandleClick(!handleClick)}>Get More Advice</button>
        <button onClick={handleFavouritesClick}>Save to Favourites</button>
      </section>
      <section className="favourtite-slips-list">
        <FavouriteSlipsList preferredAdvice={preferredAdvice}/>
      </section>
    </section>
  )
}

export default AdviceSection
