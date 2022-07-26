export const AdviceSlip = ({advices}) => {
  return (
    <>
      <h3>Some Advice</h3>
      { advices.map(advice => {
        return (
          <p key={advice.id}>{advice.advice}</p>
        )
      })
      }
    </>
  )
}