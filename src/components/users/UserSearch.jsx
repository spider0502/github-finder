import { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'
import { searchUsers } from '../../context/github/GithubActions'

function UserSearch() {
    const [text, setText] = useState('')

    const { users, dispatch, clearUsers } = useContext(GithubContext)
    const { setAlert } = useContext(AlertContext)

    const handleChange = (e) => setText(e.target.value)
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(text)
        if (text === '') {
            setAlert('Please enter something.', 'error')
        } else {
            dispatch({
                type: 'SET_LOADING',
            })
            const users = await searchUsers(text)
            dispatch({
                type: 'GET_USERS',
                payload: users,
            })

            setText('')
        }
    }
    const handleClear = () => dispatch({ type: 'CLEAR_USERS' })

    return <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="relative">
                        <input type="text" placeholder='Search'
                            className="w-full pr-40 bg-gray-200 input input-lg text-black"
                            value={text}
                            onChange={handleChange}
                        />
                        <button className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">GO</button>
                    </div>
                </div>
            </form>
        </div>

        <div>
            {users.length > 0 && (
                <button className="btn btn-ghost btn-lg" onClick={handleClear}>
                    Clear
                </button>
            )}
        </div>
    </div>
}

export default UserSearch
