import React, { useState, useEffect } from "react";

const TypeWriter = ({ data, delay = 100, infinite = true }) => {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const currentTextLength = currentText.length;
        const targetText = data[currentIndex];
        const targetTextLength = targetText.length;

        if (currentTextLength < targetTextLength) {
            const timeout = setTimeout(() => {
                setCurrentText(targetText.slice(0, currentTextLength + 1));
            }, delay);

            return () => clearTimeout(timeout);
        } else if (currentIndex === data.length - 1 && !infinite) {
            return;
        } else {
            const timeout = setTimeout(() => {
                setCurrentText("");
                setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [currentText, currentIndex, delay, infinite, data]);

    return <span className='font-sans font-semibold div-white text-[10px] xs:text-[12px] sm:text-[10px] md:text-[12px] lg:text-[16px]' >- <span className="underline" >{currentText}</span></span>;
};

export default TypeWriter;



// import { useState, useEffect } from 'react';

// const Typewriter = ({ text, delay = 100, infinite = true }) => {
//     const [currentText, setCurrentText] = useState('');
//     const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(() => {
//         let timeout;

//         if (currentIndex <= text.length) {
//             timeout = setTimeout(() => {
//                 setCurrentText(prevText => prevText + text[currentIndex]);
//                 setCurrentIndex(prevIndex => prevIndex + 1);
//             }, delay);

//         } else if (infinite) { // ADD THIS CHECK
//             setCurrentIndex(0);
//             setCurrentText('');
//         }

//         return () => clearTimeout(timeout);
//     }, [currentIndex, delay, infinite, text]);

//     return <span className='font-sans font-medium div-white text-[10px] xs:text-[12px] sm:text-[10px] md:text-[12px] lg:text-[14px]' ><span>- </span>{currentText}</span>;
// };

// export default Typewriter;