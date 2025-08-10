/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import headerTabsData from '../Data/headerTabsData'
import './Header.css'
import { Icons } from '../Constants/Icons'

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 700px)')
    mediaQuery.addListener(handleMediaQueryChange)
    handleMediaQueryChange(mediaQuery)

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange)
    }
  }, [])

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true)
    } else {
      setIsSmallScreen(false)
    }
  }

  const toggleNav = () => {
    setNavVisibility(!isNavVisible)
  }

  return (
    <header style={{
      position: 'sticky',
      top: '0px',
      maxHeight: '70px',
      width: '100vw',
      display: 'grid',
      gridTemplateAreas: "logo nav",
      alignItems: 'center',
      /* Cosmetics */
      boxShadow: '0 4px 8px 0 rgb(107 142 239 / 70 %)',
      zIndex: 999,
    }} className='bg-[#9D50BB] Header bg-gradient-to-tr from-[#606c88] to-[#3f4c6b]' >
      <a exact href='/'>
        <img src={require('../assets/Images/logo.png')} className='Logo' alt='logo' />
      </a>
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={500}
        classNames='NavAnimation'
        unmountOnExit
      >
        <nav className='Nav'>
          {
            headerTabsData.map((item, index) => {
              return (<NavLink key={`tab-${index}`} exact={index === 0 ? true : false} className={'text-white focus:outline-none outline-none'} activeClassName='active' to={item.route} onClick={toggleNav} >
                {item.tabName}
              </NavLink>)
            })
          }

          {/* <button>Logout</button> */}
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className='Burger right-[3%] absolute flex justify-end m-0 p-2'>
        {!isNavVisible ?
          <img src={Icons.Hamburger} w={'24px'} h={'24px'} alt='menu' className='self-end' />
          :
          // <img source={Close} width={30} height={30} style={{ zIndex: 200 }} /> 
          <p className='font-medium text-sm text-text-base bg-backgroundRedColor rounded-sm p-2 ' >Close</p>
        }
      </button>
    </header >
  )
}

// import React, { useState } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import '../Styles/header.css';
// import { Fragment } from 'react/cjs/react.production.min';
// import { Disclosure } from '@headlessui/react';
// import { MenuIcon, XIcon } from '@heroicons/react/outline';

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

// function Header() {
//   const location = useLocation();
//   const [activatedRoute, setActivated] = useState(location.pathname);

//   return (
//     <Disclosure as="nav" className="bg-gray-800">
//       {({ open }) => (
//         <>
//           <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
//             <div className="relative flex items-center justify-between h-16">
//               <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                 <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                   <span className="sr-only">Open main menu</span>
//                   {open ? (
//                     <XIcon className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <MenuIcon className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>
//               </div>
//               <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
//                 <div className="flex-shrink-0 flex items-center">
//                   <img
//                     className="block lg:hidden h-8 w-auto"
//                     src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
//                     alt="Workflow"
//                   />
//                   <img
//                     className="hidden lg:block h-8 w-auto"
//                     src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
//                     alt="Workflow"
//                   />
//                 </div>
//                 <div className="hidden sm:block sm:ml-6">
//                   <div className="flex space-x-4">
//                     <NavLink
//                       to="/"
//                       className={classNames(
//                         activatedRoute === '/' && 'bg-gray-900 text-white',
//                         'px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
//                       )}
//                       onClick={() => setActivated('/')}
//                     >
//                       Home
//                     </NavLink>
//                     <NavLink
//                       to="/myServices"
//                       className={classNames(
//                         activatedRoute === '/myServices' &&
//                           'bg-gray-900 text-white',
//                         'px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
//                       )}
//                       onClick={() => setActivated('/myServices')}
//                     >
//                       My Services
//                     </NavLink>
//                     <NavLink
//                       to="/myWorks"
//                       className={classNames(
//                         activatedRoute === '/myWorks' && 'bg-gray-900 text-white',
//                         'px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
//                       )}
//                       onClick={() => setActivated('/myWorks')}
//                     >
//                       My Works
//                     </NavLink>
//                     <NavLink
//                       to="/blog"
//                       className={classNames(
//                         activatedRoute === '/blog' && 'bg-gray-900 text-white',
//                         'px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
//                       )}
//                       onClick={() => setActivated('/blog')}
//                     >
//                       Blog
//                     </NavLink>
//                     <NavLink
//                       to="/about"
//                       className={classNames(
//                         activatedRoute === '/about' && 'bg-gray-900 text-white',
//                         'px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
//                       )}
//                       onClick={() => setActivated('/about')}
//                     >
//                       About Me
//                     </NavLink>
//                     <NavLink
//                       to="/contact"
//                       className={classNames(
//                         activatedRoute === '/contact' && 'bg-gray-900 text-white',
//                         'px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
//                       )}
//                       onClick={() => setActivated('/contact')}
//                     >
//                       Contact
//                     </NavLink>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <Disclosure.Panel className="sm:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               <NavLink
//                 to="/"
// className={classNames(
//                   activatedRoute === '/' && 'bg-gray-900 text-white',
//                   'block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
//                 )}
//                 onClick={() => setActivated('/')}
//               >
//                 Home
//               </NavLink>
//               <NavLink
//                 to="/myServices"
//                 className={classNames(
//                   activatedRoute === '/myServices' && 'bg-gray-900 text-white',
//                   'block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
//                 )}
//                 onClick={() => setActivated('/myServices')}
//               >
//                 My Services
//               </NavLink>
//               <NavLink
//                 to="/myWorks"
//                 className={classNames(
//                   activatedRoute === '/myWorks' && 'bg-gray-900 text-white',
//                   'block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
//                 )}
//                 onClick={() => setActivated('/myWorks')}
//               >
//                 My Works
//               </NavLink>
//               <NavLink
//                 to="/blog"
//                 className={classNames(
//                   activatedRoute === '/blog' && 'bg-gray-900 text-white',
//                   'block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
//                 )}
//                 onClick={() => setActivated('/blog')}
//               >
//                 Blog
//               </NavLink>
//               <NavLink
//                 to="/about"
//                 className={classNames(
//                   activatedRoute === '/about' && 'bg-gray-900 text-white',
//                   'block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
//                 )}
//                 onClick={() => setActivated('/about')}
//               >
//                 About Me
//               </NavLink>
//               <NavLink
//                 to="/contact"
//                 className={classNames(
//                   activatedRoute === '/contact' && 'bg-gray-900 text-white',
//                   'block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
//                 )}
//                 onClick={() => setActivated('/contact')}
//               >
//                 Contact
//               </NavLink>
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// }

// export default Header;
