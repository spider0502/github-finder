import React, { useContext } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'
import GithubContext from '../../context/github/GithubContext'

function UserResults() {
    const { users, loading } = useContext(GithubContext)

    if (!loading) {
        return <div className='grid grid-dash-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:gird-cols-2 sm:grid-cols-2'>
            {users.map((user) => (
                <UserItem key={user.id} user={user}></UserItem>
            ))}
        </div>
    } else {
        return <>
            <Spinner></Spinner>
        </>
    }

}

export default UserResults
