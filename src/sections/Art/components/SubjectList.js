export const SubjectList = ({artist}) => {
  return (
    <>
      {
        artist.subject_titles.map((item, index) => {
          return (
            <li key={index}>{item}</li>
          )
        })
      }
    </>
  )
}