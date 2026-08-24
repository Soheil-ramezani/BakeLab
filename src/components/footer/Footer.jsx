// import React from 'react'
// import styles from './Footer.module.css'
export default function Footer() {
  return (
    <footer className={`bg-(--navy-blue) text-white flex flex-row justify-around items-start px-[1%] py-[2.5%] mt-12`}>
      <div className={`flex flex-col items-start justify-center gap-2.5`}>
        <div >
          <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.58334 20.7204C2.58334 19.9441 2.75514 19.1736 3.21045 18.5452C4.54991 16.6949 8.18336 12.9167 15.5 12.9167C22.8173 12.9167 26.4501 16.6955 27.7896 18.5452C28.2449 19.1736 28.4167 19.9441 28.4167 20.7204C28.4167 22.0764 27.878 23.3769 26.9191 24.3358C25.9602 25.2947 24.6597 25.8334 23.3036 25.8334H7.69641C6.34034 25.8334 5.03981 25.2947 4.08093 24.3358C3.12204 23.3769 2.58334 22.0764 2.58334 20.7204V20.7204Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.75 5.8125V8.39583" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M9.04169 14.2084V16.7917" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M23.25 5.8125V8.39583" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M21.9583 14.2084V16.7917" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M15.5 4.52087V8.39587" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M15.5 12.9167V18.0834" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M25.8334 16.432C23.8351 14.7122 20.5427 12.9167 15.5 12.9167C10.4574 12.9167 7.1649 14.7115 5.16669 16.432" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <p className={`text-center font-bold `}>BakeLab</p>
        </div>
        <p className={`max-w-[300px]`}>The proper Footer on proper time can
          preserve you protection. We assist you
          make sureeverybody forward.</p>
        <div className={` w-4/5 flex flex-row items-center justify-around`}>
          {/* Facebook */}
          <a href="#" title="Follow us on Facebook " className={`bg-(--white) h-full  p-2 w-auto rounded-full`}  >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#050706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          {/* X */}
          <a href="#" title="Follow us on X" className={`bg-(--white) h-full  p-2 w-auto rounded-full`} >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#050706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </a>
          {/* Instagram */}
          <a href="#" title="Follow us on Instagram" className={`bg-(--white) h-full  p-2 w-auto rounded-full`} >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#050706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          {/* YouTube */}
          <a href="#" title="Follow us on YouTube" className={`bg-(--white) h-full  p-2 w-auto rounded-full`} >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#050706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
          </a>
        </div>
      </div>
      {/* Footer links */}
      <ul className={`flex flex-col items-start gap-2`}>
        <li className='text-2xl border-b-2 border-b-[var(--cream)] '>Quick link</li>
        <li className='text-lg'> <a href="#">Home</a> </li>
        <li className='text-sm'> <a href="#">About</a> </li>
        <li className='text-sm'> <a href="#">Services</a> </li>

        <li className='text-sm'> <a href="#">Team</a> </li>
        <li className='text-sm'> <a href="#">Careers</a> </li>
        <li className='text-sm'> <a href="#">Contact Us</a> </li>
      </ul>
      {/* Contact */}
      <ul className={`flex flex-col items-start gap-2.5`}>
        <li className='text-2xl border-b-2 border-b-[var(--cream)] '>Contact</li>
        <li className='text-sm flex flex-row items-center  gap-2.5'>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#FBEDCA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          Sidhartha chowk-8
        </li>
        <li className='text-sm flex flex-row items-center  gap-2.5'>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#FBEDCA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>
          Pokhara, Nepal
        </li>
        <li className='text-sm flex flex-row items-center  gap-2.5'>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#FBEDCA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          +977-[0]61-428793
        </li>
      </ul>
      {/* Email */}
      <div className={`bg-blue-500 h-full w-2/6`}>s</div>
    </footer>
  )
}
