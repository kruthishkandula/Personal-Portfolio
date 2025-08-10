import React, { useState } from 'react'

export default function HoverButton() {
    const [style, setStyle] = useState({ display: 'none' });
    const tailwindStyles = `hover:scale-110 bg-gradient-to-b outline-none focus:outline-none from-[#00c6ff] to-[#0072ff] rounded-lg p-2 flex flex-row w-full justify-between items-center shadow-md my-3 shadow-backgroundDark`

    return (
        <div onMouseLeave={e => {
            setStyle({ display: 'none' })
        }}>
            <button className={`${tailwindStyles} focus:outline-none from-[red] to-[green]`} style={style} >Checkout</button>
            <button className={`${tailwindStyles} focus:outline-none from-[#00c6ff] to-[#0072ff]`} style={style} >Download</button>
            <button className={`${tailwindStyles} focus:outline-none from-[#00c6ff] to-[#0072ff]`} onMouseEnter={e => {
                setStyle({ display: 'block' });
            }}
            >{style.display === 'none' ? 'Resume' : 'Close'}</button>
        </div>
    )
}
