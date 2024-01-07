import React from 'react';
import data from '../data.json';
import Tabs from './Tabs';
export default function Details() {
  return (
    <div className='w-full max-w-[23rem] p-[2.5rem] flex flex-wrap'>
        <h2 class="w-full mb-[0.2rem] font-hanken font-bold text-[1.5rem] text-neutral-dark-gray-blue">Summary</h2>
        {data.map((item, index)=>(
            <Tabs key={index} category ={item.category} score={item.score} icon={item.icon} />
        ))}
        <button className='w-full bg-neutral-dark-gray-blue font-hanken text-white text-[1.1rem] rounded-full mt-[1.5rem] py-[1rem] cursor-pointer hover:bg-gradient-to-b from-grad-slate-blue to-grad-royal-blue'>Continue</button>
    </div>
  )
}
