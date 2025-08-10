import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { BounceLeft } from '../../Components/Button/Animated'
import blogsData from '../../Data/blogsData'
import useHttpService from '../../services/http'

function Blog() {
  const [blogs, setBlogs] = useState([])
  const { get } = useHttpService()
  const renderAfterCalled = useRef(false)
  const { ref, inView } = useInView({
    triggerOnce: false,
    fallbackInView: true,
  });

  const BlogItem = ({
    blog_id: id,
    title,
    content: description,
    imageUrl: imageSrc,
    link
  }) => {
    return (
      <div
        className='bg-white shadow-lg rounded-xl overflow-hidden mb-4 mt-20'
        target={link}
      >
        <img src={imageSrc} alt='Blog' className='h-auto w-full object-cover' loading={'lazy'} />
        <div className='p-4'>
          <h2 className='text-xl font-bold mb-2'>{title}</h2>
          <p className='text-gray-700 text-base'>{description.slice(0, 50)}</p>
        </div>
        <div className='flex justify-between p-4'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Share
          </button>
          <div className='flex'>
            <button className='mr-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5 15l7-7 7 7'
                />
              </svg>
            </button>
            <button className='mr-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </button>
            <button>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 19l-3-3m0 0l-3 3m3-3v-8m0 0a5 5 0 0110 0v3a2 2 0 002 2v3a2 2 0 01-2 2h-6'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    )
  }

  const fetchBlogs = async () => {
    try {
      const blogResponse = await get('/api/blogs/getBlogs')
      console.log(blogResponse)
      setBlogs(blogResponse.data)
    } catch (error) {
      // alert(error.message)
      setBlogs(blogsData)
    }
  }

  useEffect(() => {
    if (!renderAfterCalled.current) {
      fetchBlogs()
    }
    renderAfterCalled.current = true
  })

  return (
    <div ref={ref}>
      {inView ?
        <div className=' w-full p-2 my-4 container'>
          <div className='row'>
            {blogs.map(blog => (
              <div
                key={blog.blog_id}
                className='col-lg-4 col-md-6 col-xs-12 col-sm-6 col-12'
              >
                <BounceLeft style={{ animationDuration: '0.8s' }} >
                  {BlogItem(blog)}
                </BounceLeft>
              </div>
            ))}
          </div>
        </div>
        : null
      }
    </div>
  )
}

export default Blog
