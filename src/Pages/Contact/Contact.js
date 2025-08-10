import React from 'react'
import { BounceLeft } from '../../Components/Button/Animated'

function Contact() {
  return (
    <BounceLeft
      style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}
      className=' min-h-full my-20 shadow-md rounded-xl bg-gradient-to-b from-blue-500 to-purple-500 flex flex-col justify-center self-center py-8 px-4 lg:px-16'
    >
      <div className=' w-full backdrop:blur-md bg-light shadow-md rounded-lg overflow-hidden mx-auto  ease-in-out'>
        <div className='px-6 py-4'>
          <p className='text-[32px] font-bold underline mb-8'></p>
          <form>
            <div className='mb-4'>
              <label
                htmlFor='name'
                className='block text-gray-700 font-bold mb-2'
              >
                Name
              </label>
              <input
                id='name'
                type='text'
                className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                '
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='email'
                className='block text-gray-700 font-bold mb-2 '
              >
                Email
              </label>
              <input
                id='email'
                type='email'
                className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='message'
                className='block text-gray-700 font-bold mb-2'
              >
                Message
              </label>
              <textarea
                id='message'
                className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                rows='4'
              ></textarea>
            </div>
            <div className='flex justify-end'>
              <button
                type='submit'
                className='bg-gradient-to-tr from-primaryColor to-primary hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline animate__animated animate__bounce'
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </BounceLeft>
  )
}

export default Contact
