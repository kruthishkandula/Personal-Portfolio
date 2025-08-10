import React from 'react';
import { Icons } from '../../Constants/Icons';
import ResumeData from '../../Data/ResumeData';
import { BounceRight } from './Animated';

export default function CheckoutButton() {
    const onCheckout = () => {
        window.open(ResumeData.pdfUrl);
    };
    return (
        <BounceRight>
            <button className='hover:scale-110 bg-gradient-to-b outline-none focus:outline-none from-[#2E5984] to-[#1E3F66] rounded-lg p-2 sm:flex flex-row w-full justify-between items-center shadow-md shadow-backgroundDark hidden ' onClick={onCheckout}>
                <img src={Icons.Redirect} alt="Open" style={{ width: 25, height: 25 }} />
                <span className='font-sans text-white' >Resume</span>
            </button>
        </BounceRight>
    )
}
