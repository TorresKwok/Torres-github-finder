import { Link } from 'react-router-dom'
import {FaHome} from "react-icons/fa";

function AboutPage() {
    return (
        <div className='hero'>
            <div className='text-center hero-content'>
                <div className='max-w-lg' align='left'>
                    <h1 className='text-6xl font-bold mb-8'>
                        About this project
                    </h1>
                    <p className="text-2xl mb-8">This is a React app to leave feedback for a product or service</p>
                    <p className="text-2xl mb-8">Author: Torres Kwok</p>
                    <p className="text-2xl mb-8">Version: 1.0.0</p>
                    <Link to="/" className='btn btn-primary btn-lg'>
                        <FaHome className='mr-2' />
                        Back To Home
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AboutPage