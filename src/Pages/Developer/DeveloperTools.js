import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function DeveloperTools({ navigation }) {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col w-[full] max-w-sm ' >
            <h2>Pages</h2>
            <hr />
            <button className='bg-gray-500  h-32 px-4 py-2 rounded-lg my-2 text-white' onClick={() => navigate('/developertools/blogs')}>
                Blogs
            </button>
            <button className='bg-gray-500 h-32 px-4 py-2 rounded-lg my-2 text-white' onClick={() => navigate('/developertools/projects')}>
                Projects
            </button>
            <button className='bg-gray-500 h-32 px-4 py-2 rounded-lg my-2 text-white' onClick={() => navigate('/developertools/journeys')}>
                Journey
            </button>
        </div>
    )
}
