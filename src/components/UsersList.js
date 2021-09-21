import React from 'react'
import UserCard from './UserCard'

function UsersList({users}) {
    return (
        <div>
            
            {users.map((user,i)=><UserCard key={i} user={user}/>)}

        </div>
    )
}

export default UsersList
