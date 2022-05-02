import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa"
import PropTypes from "prop-types"

function ReposItem({ repo }) {

    const {
        name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count,
    } = repo

    return (
        <div className='mb-2 rounded-lg card bg-base-200 hover:bg-base-300'>
            <div className='card-body'>
                <h3 className='mb-2 text-xl font-semibold'>
                    <a href={html_url}>
                        <FaLink className='inline mr-2' />
                        {name}
                    </a>
                </h3>
                <p className='mb-3'>{description}</p>
                <div className="flex space-x-2">
                    <div>
                        <div className='mr-2 badge badge-info badge-lg'>
                            <FaEye className='mr-2' />
                            {watchers_count}
                        </div>
                    </div>
                    <div>
                        <div className='mr-2 badge badge-success badge-lg'>
                            <FaStar className='mr-2' />
                            {stargazers_count}
                        </div>
                    </div>
                    <div>
                        <div className='mr-2 badge badge-error badge-lg'>
                            <FaInfo className='mr-2' />
                            {open_issues}
                        </div>
                    </div>
                    <div>
                        <div className='mr-2 badge badge-warning badge-lg'>
                            <FaUtensils className='mr-2' />
                            {forks}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ReposItem.prototype = {
    repo: PropTypes.object.isRequired,
}

export default ReposItem