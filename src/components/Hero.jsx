import React from 'react'
import styles from '../style'
import { discount } from '../assets'
import { robot } from '../assets'
import GetStarted from "./GetStarted"

const Hero = () => (

  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`} >

    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row just-between items-center w-full">

        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>The Next <br className='sm:block hidden' /> {" "}
          <span className='text-gradient'>Generation </span>{" "}
        </h1>

        <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted />
        </div>
      </div>

      <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
        Payment Method
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      "Our team of experts utilizes a methodology to identify the digital financial products most suitable for your requirements. We scrutinize blockchain technology, smart contract functionality, transaction fees, and security protocols to ensure optimal compatibility with your financial goals."
      </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={robot} className="w-[100%] h-[100%] relative z-[5]" />

      <div className='absolute z-[0] w-[40%] h-[35%] top-0 ' />
      <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 ' />
      <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 ' />

    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>

  </section>
)


export default Hero