import React from 'react'
import { FadeIn } from '../Button/Animated'
import Typewriter from '../Text/TypeWriter'

const Banner1 = ({ name, skills = [], profileImage, designation, backgroundImage }) => {


  return (
    <FadeIn>
      <div className='flex items-center bg-gray-200  w-full flex-row overflow-hidden max-h-[280px] sm:max-h-[350px] md:max-h-[700px] bg-blackTranparent p-4 ' style={{
        // backgroundImage: `url(${backgroundImage})`,
        // filter: `blur(6px)`,
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
      }}>
        <div className='w-2/5 transform overflow-hidden z-20 order-2 '>
          <img
            src={require('../../assets/Images/profileImage.jpg')}
            // src='http://steel-lemon-9flr-master-xgxsiekuhq-as.a.run.app/image/kruthish_profile_pic'
            alt='Kruthish Kandula'
            className='opacity-100 '
            style={{
              minWidth: 127,
              minHeight: 196,
              width: '100%',
              height: '100%',
              maxHeight: 500,
              objectFit: 'scale-down',
              borderRadius: '10%'
              // overflow: 'hidden',
            }}
          />
        </div>
        <div
          className='w-3/5 px-8 py-0 order-0 flex-col justify-evenly h-full'
        >
          <div className='mb-3' >
            <div className='text-[14px] xs:text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-light '>
              I am{' '}
              <br />
              <span style={{ fontFamily: 'Chilanka Fill,cursive' }} className='font-bold bg-light px-2 font-helvica font-serif text-[14px] xs:text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px]'>
                {name}
              </span>
            </div>
            <Typewriter data={designation} delay={150} />
          </div>
          <div>
            {
              skills.map((item) => {
                return (
                  <li key={item} className='font-semibold text-[10px] xs:text-[12px] sm:text-[16px] md:text-[18px] lg:text-[24px] list-none text-white flex-row flex items-center' >
                    <img src={item.icon} alt="React Logo" style={{ width: 30, height: 30 }} />
                    <span className='ml-2' >{item.name}</span>
                  </li>
                )
              })
            }
          </div>
        </div>

      </div>
    </FadeIn>
  )
}

export default Banner1
