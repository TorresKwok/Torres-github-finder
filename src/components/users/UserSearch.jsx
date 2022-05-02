import { useState, useContext } from "react"
import GithubContext from "../../context/github/GithubContext"
import AlertContext from "../../context/alert/AlertContext"

function UserSearch() {
    const [text, setText] = useState('')

    const { users, searchUsers, clearUsers } = useContext(GithubContext)

    const { setAlert } = useContext(AlertContext)

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (text === '') {
            setAlert('Please enter something!', 'error')
        } else {
            searchUsers(text)

            setText('')
        }
    }

    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='form-control'>
                        <div className='relative'>
                            <input type='text'
                                   className='w-full pr-40 bg-gray-200 input input-bordered input-lg text-black input-primary'
                                   // className='input input-bordered input-primary w-full max-w-xs'
                                   placeholder='Search'
                                   value={text}
                                   onChange={handleChange}
                            />
                            <button type='submit' className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'>
                                Go
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {/* Only users.length > 0 will show the clear button */}
            {users.length > 0 && (
                <div>
                    <div onClick={clearUsers} className='btn btn-ghost btn-lg'>
                        Clear
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserSearch