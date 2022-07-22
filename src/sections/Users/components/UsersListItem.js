export const UsersListItem = ({users}) => {
    return(
        users.map(user => {
            return (
                <li className={(user.gender === 'female') ? 'bg-pink' : 'bg-blue'}>
                    <img src={user.picture.medium} alt={`${user.name.first} ${user.name.last}`}/>
                    <h3>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
                    <p>{`Email: ${user.email}`}</p>
                </li>
            )
        })
    )
}