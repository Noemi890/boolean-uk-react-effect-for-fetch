import { useEffect, useState } from "react"
import { AdviceSlip } from "./components/AdviceSlip"
import FavouriteSlipsList from './components/FavouriteSlipsList'

const API = 'https://api.adviceslip.com/advice'


function AdviceSection() {

  const [advice, setAdvice] = useState()
  const [preferredAdvice, setPreferredAdvice] = useState([])
  // const [handleClick, setHandleClick] = useState(false)

  const handleFavouritesClick = () => {
    const myCopy = preferredAdvice.slice()
    const find = myCopy.find(item => item.id === advice.id)
    if(find === undefined) myCopy.push(advice)
    else return
    setPreferredAdvice(myCopy)
  }

  const getAdvice = async () => {
      const resp = await fetch(API)
      const data = await resp.json()
      setAdvice(data.slip)
  }

  useEffect(() => {
    getAdvice()
  },[])

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <AdviceSlip advice={advice}/>
        <button onClick={getAdvice}>Get More Advice</button>
        <button onClick={handleFavouritesClick}>Save to Favourites</button>
      </section>
      <section className="favourtite-slips-list">
        <FavouriteSlipsList preferredAdvice={preferredAdvice}/>
      </section>
    </section>
  )
}

export default AdviceSection
