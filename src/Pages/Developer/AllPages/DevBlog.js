import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useHttpService from '../../../services/http'
import EditDevBlog from './EditDevBlog'

export default function DevBlog() {
    const renderAfterCalled = useRef(false)
    const { get } = useHttpService()
    const [blogs, setBlogs] = useState([])

    const [showEdit, setShowEdit] = useState(false)
    const [selectedBlog, setSelectedBlog] = useState()

    const navigate = useNavigate()

    const fetchData = async () => {
        console.log(`========FETCH PROJECTS CALLED===================`)
        try {
            const blogsResponse = await get('/api/blogs/getBlogs')
            setBlogs(blogsResponse.data)
        } catch (error) {
            alert(error.message)
        }
    }

    const handleEdit = (item) => {
        setShowEdit(true)
        setSelectedBlog(item)
    }

    const hideEdit = () => {
        setShowEdit(false)
        setSelectedBlog()
    }

    useEffect(() => {
        if (!renderAfterCalled.current) {
            fetchData()
        }
        renderAfterCalled.current = true
    })

    const BlogItem = ({ blog, index }) => {
        return (
            <li className='list-none bg-[#aaa7cc] p-4 w-full  my-2 rounded-lg self-center flex flex-col' key={index}>
                <div className='flex flex-row items-start justify-between' >
                    <p className='text-black text-xl max-sm:text-base' >{blog.title}</p>
                    <button className='bg-gray-500 text-white font-bold rounded-md px-2' onClick={() => handleEdit(blog)} >Edit</button>
                </div>
                <hr />
                <p className='text-black text-md' >{blog.content}</p>
                <img src={blog.imageUrl} className='w-[80%] max-w-sm rounded-md bg-cover' alt={blog.title} />
                {blog.link && (
                    <a href={blog.link} target='_blank' rel='noopener noreferrer'>
                        {blog.link}
                    </a>
                )}
                {/* <a href={'google.com'} target='_blank' rel='noopener noreferrer' className='text-blue-900 underline hover:text-orange-800' >{blog.link}</a> */}
            </li>
        )

    }

    return (
        <div className='flex flex-col justify-center w-full' >
            <div className='flex flex-row justify-between' >
                <button className='focus:outline-none opacity-70' onClick={() => navigate(-1)}>
                    <p className='text-2xl' >◀</p>
                </button>
                <p className='underline text-2xl' >Blogs</p>
            </div>
            <hr />
            <ul className='flex flex-col w-[full]' >
                {
                    blogs.map((blog, index) => {
                        return <BlogItem blog={blog} key={index} />
                    })
                }
            </ul>
            {showEdit && <EditDevBlog showEdit={showEdit} selectedBlog={selectedBlog} hideEdit={hideEdit} />}
        </div>
    )
}
