// import React from 'react'
import styles from './Footer.module.css'
export default function Footer() {
  return (
    <footer className={`bg-(--navy-blue) text-white flex flex-row justify-around items-start px-[1%] py-[2.5%] mt-12`}>
      {/* Logo & socialMedia links */}
      <div className={`flex flex-col  md:items-start items-center justify-center gap-2.5`}>
        {/* Logo */}
        <div className={`flex flex-col items-center justify-center`}>
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
        {/* Middle Text */}
        <p className={`${styles.footer_Logo_text__p} max-w-[300px]`}>Discover artisan breads crafted with passion and master baking techniques through our expert-led courses</p>
        {/* Email-Input for screens smaaler than 767px */}
        <div className={`${styles.footer_Email2__div} flex-col items-center `}>
          <div className={`${styles.input_wrapper}`}>
          <svg className={`${styles.icon}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g data-name="Layer 2">
              <g data-name="inbox">
                <rect
                  width="24"
                  height="24"
                  transform="rotate(180 12 12)"
                  opacity="0"
                ></rect>
                <path
                  d="M20.79 11.34l-3.34-6.68A3 3 0 0 0 14.76 3H9.24a3 3 0 0 0-2.69 1.66l-3.34 6.68a2 2 0 0 0-.21.9V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5.76a2 2 0 0 0-.21-.9zM8.34 5.55a1 1 0 0 1 .9-.55h5.52a1 1 0 0 1 .9.55L18.38 11H16a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1H5.62z"
                ></path>
              </g>
            </g>
          </svg>
          <input type="email" name="text" className={`${styles.input}`} placeholder="info@gmail.com" />
          <button className={`${styles.Subscribe_btn}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="10"
              viewBox="0 0 38 15"
              className={`${styles.arrow}`}
            >
              <path
              fill="#FBEDCA"
                d="M10 7.519l-.939-.344h0l.939.344zm14.386-1.205l-.981-.192.981.192zm1.276 5.509l.537.843.148-.094.107-.139-.792-.611zm4.819-4.304l-.385-.923h0l.385.923zm7.227.707a1 1 0 0 0 0-1.414L31.343.448a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414l5.657 5.657-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM1 7.519l.554.833.029-.019.094-.061.361-.23 1.277-.77c1.054-.609 2.397-1.32 3.629-1.787.617-.234 1.17-.392 1.623-.455.477-.066.707-.008.788.034.025.013.031.021.039.034a.56.56 0 0 1 .058.235c.029.327-.047.906-.39 1.842l1.878.689c.383-1.044.571-1.949.505-2.705-.072-.815-.45-1.493-1.16-1.865-.627-.329-1.358-.332-1.993-.244-.659.092-1.367.305-2.056.566-1.381.523-2.833 1.297-3.921 1.925l-1.341.808-.385.245-.104.068-.028.018c-.011.007-.011.007.543.84zm8.061-.344c-.198.54-.328 1.038-.36 1.484-.032.441.024.94.325 1.364.319.45.786.64 1.21.697.403.054.824-.001 1.21-.09.775-.179 1.694-.566 2.633-1.014l3.023-1.554c2.115-1.122 4.107-2.168 5.476-2.524.329-.086.573-.117.742-.115s.195.038.161.014c-.15-.105.085-.139-.076.685l1.963.384c.192-.98.152-2.083-.74-2.707-.405-.283-.868-.37-1.28-.376s-.849.069-1.274.179c-1.65.43-3.888 1.621-5.909 2.693l-2.948 1.517c-.92.439-1.673.743-2.221.87-.276.064-.429.065-.492.057-.043-.006.066.003.155.127.07.099.024.131.038-.063.014-.187.078-.49.243-.94l-1.878-.689zm14.343-1.053c-.361 1.844-.474 3.185-.413 4.161.059.95.294 1.72.811 2.215.567.544 1.242.546 1.664.459a2.34 2.34 0 0 0 .502-.167l.15-.076.049-.028.018-.011c.013-.008.013-.008-.524-.852l-.536-.844.019-.012c-.038.018-.064.027-.084.032-.037.008.053-.013.125.056.021.02-.151-.135-.198-.895-.046-.734.034-1.887.38-3.652l-1.963-.384zm2.257 5.701l.791.611.024-.031.08-.101.311-.377 1.093-1.213c.922-.954 2.005-1.894 2.904-2.27l-.771-1.846c-1.31.547-2.637 1.758-3.572 2.725l-1.184 1.314-.341.414-.093.117-.025.032c-.01.013-.01.013.781.624zm5.204-3.381c.989-.413 1.791-.42 2.697-.307.871.108 2.083.385 3.437.385v-2c-1.197 0-2.041-.226-3.19-.369-1.114-.139-2.297-.146-3.715.447l.771 1.846z"
              ></path></svg> 
              SEND
          </button>
        </div>
        <p className={`max-w-[420px] text-sm text-center mt-5`}>
          Subscribe to our newsletter and unlock a world of exclusive benefits. Be the first to know about our latest products, special promotions, and exciting updates.
        </p>
        </div>
        {/* SocialMedia Links */}
        <div className={` w-4/5 flex flex-row items-center justify-around`}>
          {/* Facebook */}
          <a href="#" title="Follow us on Facebook " className={`${styles.footer_link__a} h-full   w-auto rounded-full`}  >
            <svg xmlns="http://www.w3.org/2000/svg" className={`${styles.footer_link__svg}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#050706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          {/* X */}
          <a href="#" title="Follow us on X" className={`${styles.footer_link__a} h-full   w-auto rounded-full`} >
            <svg xmlns="http://www.w3.org/2000/svg" className={`${styles.footer_link__svg}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#050706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </a>
          {/* Instagram */}
          <a href="#" title="Follow us on Instagram" className={`${styles.footer_link__a} h-full   w-auto rounded-full`} >
            <svg xmlns="http://www.w3.org/2000/svg" className={`${styles.footer_link__svg}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#050706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          {/* YouTube */}
          <a href="#" title="Follow us on YouTube" className={`${styles.footer_link__a} h-full   w-auto rounded-full`} >
            <svg xmlns="http://www.w3.org/2000/svg" className={`${styles.footer_link__svg}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#050706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
          </a>
           {/* Contact us icons for screens smaller than 950px  */}
           <a className={`${styles.footer_link__a} ${styles.footer_link2__a} h-full   w-auto rounded-full`} >
             <svg xmlns="http://www.w3.org/2000/svg" className={`${styles.footer_link__svg}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#050706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
           </a>
        </div>
      </div>
      {/* Footer Quick links */}
      <ul className={`${styles.footer_Quick_links__ul}  flex-col items-start gap-2`}>
        <li className='text-xl  border-b-2 border-b-[var(--cream)] '>Quick link</li>
        <li className='text-lg'> <a href="#">Home</a> </li>
        <li className='text-sm'> <a href="#">About</a> </li>
        <li className='text-sm'> <a href="#">Services</a> </li>

        <li className='text-sm'> <a href="#">Team</a> </li>
        <li className='text-sm'> <a href="#">Careers</a> </li>
        <li className='text-sm'> <a href="#">Contact Us</a> </li>
      </ul>
      {/* Contact */}
      <ul className={`${styles.footer_Contact__ul} flex flex-col items-start gap-2.5`}>
        <li className='text-xl w-4/5 border-b-2 border-b-[var(--cream)] '>Contact</li>
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
      <div className={`${styles.footer_Email__div}  flex-col items-start gap-2`}>
        {/* <!-- From Uiverse.io by vinodjangid07 -->  */}
        <p className={`text-xl w-4/5 border-b-2 border-b-[var(--cream)] `}>Newsletter</p>
        <div className={`${styles.input_wrapper}`}>
          <svg className={`${styles.icon}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g data-name="Layer 2">
              <g data-name="inbox">
                <rect
                  width="24"
                  height="24"
                  transform="rotate(180 12 12)"
                  opacity="0"
                ></rect>
                <path
                  d="M20.79 11.34l-3.34-6.68A3 3 0 0 0 14.76 3H9.24a3 3 0 0 0-2.69 1.66l-3.34 6.68a2 2 0 0 0-.21.9V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5.76a2 2 0 0 0-.21-.9zM8.34 5.55a1 1 0 0 1 .9-.55h5.52a1 1 0 0 1 .9.55L18.38 11H16a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1H5.62z"
                ></path>
              </g>
            </g>
          </svg>
          <input type="email" name="text" className={`${styles.input}`} placeholder="info@gmail.com" />
          <button className={`${styles.Subscribe_btn}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="10"
              viewBox="0 0 38 15"
              className={`${styles.arrow}`}
            >
              <path
              fill="#FBEDCA"
                d="M10 7.519l-.939-.344h0l.939.344zm14.386-1.205l-.981-.192.981.192zm1.276 5.509l.537.843.148-.094.107-.139-.792-.611zm4.819-4.304l-.385-.923h0l.385.923zm7.227.707a1 1 0 0 0 0-1.414L31.343.448a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414l5.657 5.657-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM1 7.519l.554.833.029-.019.094-.061.361-.23 1.277-.77c1.054-.609 2.397-1.32 3.629-1.787.617-.234 1.17-.392 1.623-.455.477-.066.707-.008.788.034.025.013.031.021.039.034a.56.56 0 0 1 .058.235c.029.327-.047.906-.39 1.842l1.878.689c.383-1.044.571-1.949.505-2.705-.072-.815-.45-1.493-1.16-1.865-.627-.329-1.358-.332-1.993-.244-.659.092-1.367.305-2.056.566-1.381.523-2.833 1.297-3.921 1.925l-1.341.808-.385.245-.104.068-.028.018c-.011.007-.011.007.543.84zm8.061-.344c-.198.54-.328 1.038-.36 1.484-.032.441.024.94.325 1.364.319.45.786.64 1.21.697.403.054.824-.001 1.21-.09.775-.179 1.694-.566 2.633-1.014l3.023-1.554c2.115-1.122 4.107-2.168 5.476-2.524.329-.086.573-.117.742-.115s.195.038.161.014c-.15-.105.085-.139-.076.685l1.963.384c.192-.98.152-2.083-.74-2.707-.405-.283-.868-.37-1.28-.376s-.849.069-1.274.179c-1.65.43-3.888 1.621-5.909 2.693l-2.948 1.517c-.92.439-1.673.743-2.221.87-.276.064-.429.065-.492.057-.043-.006.066.003.155.127.07.099.024.131.038-.063.014-.187.078-.49.243-.94l-1.878-.689zm14.343-1.053c-.361 1.844-.474 3.185-.413 4.161.059.95.294 1.72.811 2.215.567.544 1.242.546 1.664.459a2.34 2.34 0 0 0 .502-.167l.15-.076.049-.028.018-.011c.013-.008.013-.008-.524-.852l-.536-.844.019-.012c-.038.018-.064.027-.084.032-.037.008.053-.013.125.056.021.02-.151-.135-.198-.895-.046-.734.034-1.887.38-3.652l-1.963-.384zm2.257 5.701l.791.611.024-.031.08-.101.311-.377 1.093-1.213c.922-.954 2.005-1.894 2.904-2.27l-.771-1.846c-1.31.547-2.637 1.758-3.572 2.725l-1.184 1.314-.341.414-.093.117-.025.032c-.01.013-.01.013.781.624zm5.204-3.381c.989-.413 1.791-.42 2.697-.307.871.108 2.083.385 3.437.385v-2c-1.197 0-2.041-.226-3.19-.369-1.114-.139-2.297-.146-3.715.447l.771 1.846z"
              ></path></svg> 
              SEND
          </button>
        </div>
        <p className={`max-w-[420px] text-sm`}>
          Subscribe to our newsletter and unlock a world of exclusive benefits. Be the first to know about our latest products, special promotions, and exciting updates.
        </p>
       
        
      </div>
    </footer>
  )
}
