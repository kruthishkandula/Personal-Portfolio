import React from 'react'

function BlogPost ({ title, content, imageUrl }) {
  return (
    <article className='w-full bg-pink-300' className='blogpost'>
      <h2 className='blogpost__title'>{title}</h2>
      <div className='blogpost__content'>{content}</div>
    </article>
  )
}

export default BlogPost
