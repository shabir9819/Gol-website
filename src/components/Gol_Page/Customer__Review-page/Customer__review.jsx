import React from 'react'
import { customer1_img__oval, customer__group_img } from '../../../assets/images/images'
import { customer_images } from '../../../constants/constants'

export default function Customer__review() {
  return (
    <>
    <section className='w-full mb-[88px] '>
      <div className='bg-[#F6FDFF] w-[90%] mr-[70px] py-[61px] pl-[30px] md:pl-[175px] pr-[10px] md:pr-[104px]  '>
        <div className='mb-[8px] '>
            <h4 className='text-[32px] text-[#3A3A3A] leading-[44px] tracking-tight font-bold mb-[16px]'>What customer’s are saying?</h4>
            <p className='text-[16px] text-[#5A5A5A] leading-[22px] tracking-tight font-normal max-w-[523px]'>Take a look at what our customer’s are saying. At Nature we not only provide you with services but also we provide you with valuable experiences for your valuable time.</p>
        </div>

        <div className='flex flex-row flex-wrap relative h-auto lg:h-[110vh] w-full'>
         <div>

          {/* {customer_images.map((customer, index)=>{
            return  <img src={customer.img_src} alt={customer.id} key={customer.id} className={`max-w-[219px] max-h-[323px] rounded-[10px] mr-[41px] absolute top-[${35 - (index * 10)}%] left-[${index * 25}%]`} />
          })} */}

          <img src={customer__group_img} alt="customer__group_img" />
          </div>
          <div className='customer__comment absolute bottom-[1px] lg:bottom-[5%] right-[10%]  w-[512px] h-[110px] p-6 rounded-[16px] bg-[#F6FDFF] flex flex-row border-b-[10px] border-b-[#3282AD]'>
              <img src={customer1_img__oval} alt="customer__oval" className='w-[65px] h-[65px] object-contain mr-6' />
              <p className='text-[20px] text-[#000000] leading-[27px] font-light'>“ Great place to spend your vacation while exploring different experiences. “</p>
            
          </div>
        </div>
        </div>
    </section>
    </>
  )
}
