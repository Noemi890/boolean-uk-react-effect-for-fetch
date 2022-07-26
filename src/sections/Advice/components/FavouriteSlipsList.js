const FavouriteSlipsList = ({preferredAdvice}) => {
  console.log('inside favouriteslipslist',preferredAdvice)
  return (
    <>
    <h3>Favourite Advice Slips</h3>
    {(preferredAdvice) && (
    <ul>
      {
        preferredAdvice.map(adv => {
          return (
            <li key={adv.id}>{adv.advice}</li>
          )
        })
      }
    </ul>)}
    </>
  )
}

export default FavouriteSlipsList