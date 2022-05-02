import PropTypes from 'prop-types'
import ReposItem from "./ReposItem"

function ReposList({ repos }) {
    return (
        <div className='rounded-lg card bg-base-100'>
            <div className='card-body'>
                <h2 className='text-3xl my-4 font-bold card-title'>
                    Top Repositories
                </h2>
                {repos.map((repo) => (
                    <ReposItem key={repo.id} repo={repo}></ReposItem>
                ))}
            </div>
        </div>
    )
}

ReposList.prototype = {
    repos: PropTypes.array.isRequired,
}

export default ReposList