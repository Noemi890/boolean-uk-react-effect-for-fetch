import { UsersListItem } from "./UsersListItem"
import { useEffect, useState } from "react"

export const UsersList = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=10')
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp.results)
            setUsers(resp.results)})
    },[])

    return (
        <ul className="users-list">
            <UsersListItem users={users}/>
        </ul>
    )
}