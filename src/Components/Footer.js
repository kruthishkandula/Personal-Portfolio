import React from 'react';
import { Linkedin, Mailto } from './Button/UtilityButton';
import profileData from '../Data/profileData';
import { Icons } from '../Constants/Icons';

function Footer() {
  return (
    <footer className="footer shadow-md">
      <p>&copy; {new Date().getFullYear()} Kruthish Kandula</p>
      <div className='flex flex-row w-[30%] max-w-[150px] justify-between mt-10 '>
        <Mailto email={profileData.mailUrl} subject="Greetings..." body="Hello, Nice to meet you">
          <img src={Icons.Gmail} alt='mail' className='drop-shadow-sm hover:scale-110 shadow-white backdrop:blur-sm w-[30px] sm:w-[40px] md:w-[35px] xl:w-[35px] lg:w-[35px]
          ' />
        </Mailto>
        <Linkedin link={profileData.linkedinUrl} >
          <img src={Icons.Linkedin} alt='linkedin' className='drop-shadow-sm hover:scale-110 shadow-white backdrop:blur-sm w-[30px] sm:w-[40px] md:w-[35px] xl:w-[35px] lg:w-[35px]
          ' />
        </Linkedin>
      </div>
    </footer>
  );
}

export default Footer;