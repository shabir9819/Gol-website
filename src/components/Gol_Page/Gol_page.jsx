import React from 'react'
import Certificate from './Certificate_section/Certificate'
import Customer__review from './Customer__Review-page/Customer__review'
import Hero_page2 from './Hero_page2/Hero_page2'
import Team_section from './Team_section/Team_section'

export default function Gol_page() {
  return (
    <>
    
    <div className='w-full'>
        <Hero_page2/>
        <Team_section/>
        <Customer__review/>
        <Certificate/>
    </div>
    </>
  )
}
