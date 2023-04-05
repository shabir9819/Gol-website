import React, { useState }  from 'react';
import { FAQ__add_icon,FAQ__minus_icon } from '../../../../assets/images/images';


export default function FAQ__list({id, question,answer}) {
  const [listShow, setListShow] = useState(false);

  const FAQ__listShow_toggle = ()=>{
    setListShow((preVal)=> !preVal)
  }

  return (
    <>
    <ul className="w-full" >
                <li className="w-full p-6 my-6 flex flex-row items-center border-[1px] border-[#979C9E] rounded-[5px]">
                  <div className="flex-1 w-full">

                    <p className="text-[16px] text-[#2D2E2E] leading-[19px] font-semibold mb-[8px] ">{question}</p>
                    {(listShow) && <p className="text-[16px] text-[#5A5A5A] leading-[22px] font-normal pr-[64px]">{answer}</p>}
                  </div>
                <span onClick={FAQ__listShow_toggle} className="cursor-pointer"><img src={(listShow) ? FAQ__minus_icon : FAQ__add_icon} alt="FAQ__search_icon" className="w-[15px] h-[15px] object-contain" /></span>
                </li>
            </ul>
    </>
  )
}
