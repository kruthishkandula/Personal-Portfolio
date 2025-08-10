import React from 'react'
import Banner1 from '../../Components/Banner/Banner1'
import { Linkedin, Mailto, OpenUrl } from '../../Components/Button/UtilityButton'
import { Icons } from '../../Constants/Icons'
import profileData from '../../Data/profileData'
import '../../Styles/main.scss'
import Blog from '../Blog/Blog'
import MyWorks from '../MyWorks/MyWorks'
import { BounceDown, BounceLeft } from '../../Components/Button/Animated'

function Home() {
  return (
    <div className=''>
      <div className='mt-20'>
        <Banner1 name={profileData.Name} skills={profileData.Skills} profileImageUrl={profileData.imageUrl} designation={profileData.Designation} backgroundImage={profileData.backgroundImageUrl} />
        {/* <Carousel data={bannerData} /> */}
      </div>
      <div className='flex-1 my-6'>
        <h1
          style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)' }}
          className='py-2 text-center font-extrabold text-3xl backdrop-blur-lg bg-blend-color-dodge bg-green-400 text-white rounded-md  '
        >
          Projects
        </h1>
        <hr />
        <MyWorks />
      </div>
      <div className='flex-1 my-6'>
        <h1
          style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)' }}
          className='py-2 text-center font-extrabold text-3xl backdrop-blur-lg bg-blend-color-dodge text-white rounded-md  '
        >
          Blogs
        </h1>
        <hr />
        <Blog />
      </div>
      <div className='fixed bottom-16 right-[5%] flex flex-col justify-between z-40 '>
        <BounceDown>
          <Mailto email={profileData.mailUrl} subject="Greetings..." body="Hello, Nice to meet you">
            <img src={Icons.Gmail} alt='mail' className='drop-shadow-sm hover:scale-110 shadow-white backdrop:blur-sm w-[30px] sm:w-[40px] md:w-[50px] xl:w-[50px] lg:w-[50px]
          ' />
          </Mailto>
        </BounceDown>
        <BounceDown>
          <OpenUrl link={profileData.githubUrl}>
            <img src={Icons.Github} alt='github' className='drop-shadow-sm hover:scale-110 shadow-white backdrop:blur-sm w-[30px] sm:w-[40px] md:w-[50px] xl:w-[50px] lg:w-[50px]
          ' />
          </OpenUrl>
        </BounceDown>
        <BounceLeft>
          <Linkedin link={profileData.linkedinUrl} >
            <img src={Icons.Linkedin} alt='linkedin' className='drop-shadow-sm hover:scale-110 shadow-white backdrop:blur-sm w-[30px] sm:w-[40px] md:w-[50px] xl:w-[50px] lg:w-[50px]
          ' />
          </Linkedin>
        </BounceLeft>
      </div>
    </div>
  )
}

export default Home
