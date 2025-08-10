import React from 'react';
import { Icons } from '../../Constants/Icons';
import ResumeData from '../../Data/ResumeData';
import { BounceLeft } from './Animated';

const DownloadButton = ({ title = "My Resume" }) => {
    const handleDownload = () => {
        const downloadLink = document.createElement('a');
        downloadLink.href = ResumeData.pdfUrl; // Replace with your PDF file's path
        downloadLink.target = '_blank';
        downloadLink.download = ResumeData.fileName; // Set the desired file name
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    return (
        <BounceLeft>
            <button className='hover:scale-110 bg-gradient-to-b outline-none focus:outline-none from-[#00c6ff] to-[#0072ff] rounded-lg p-2 flex flex-row w-full justify-between items-center shadow-md shadow-backgroundDark' onClick={handleDownload}>
                <img src={Icons.FileDownload} alt="download" style={{ width: 30, height: 30 }} />
                <span className='font-sans text-light' >My Resume</span>
            </button>
        </BounceLeft>
    );
};

export default DownloadButton;
