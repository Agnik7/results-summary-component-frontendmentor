import React, {useState, useEffect} from 'react';
export default function Tabs({category,score,icon}) {
    const [categoryClass, setCategoryClass] = useState('');
    useEffect(()=>{
        if(category === 'Reaction')
            setCategoryClass('ml-[0.8rem] font-hanken text-primary-light-red text-[1.1rem]');
        else if(category === 'Memory')
            setCategoryClass('ml-[0.8rem] font-hanken text-primary-orange-yellow text-[1.1rem]');
        else if(category === 'Verbal')
            setCategoryClass('ml-[0.8rem] font-hanken text-primary-green-teal text-[1.1rem]');
        else if(category === 'Visual')
            setCategoryClass('ml-[0.8rem] font-hanken text-primary-cobalt-blue text-[1.1rem]')
    },[categoryClass]);
  return (
    <section className='w-full h-fit p-[1rem] mt-[1.2rem] flex justify-between rounded-lg bg-neutral-light-lavender bg-opacity-[0.3]'>
        <div className='flex items-center'>
            <img src={icon} alt="Icon" />
            <p className={categoryClass}>{category}</p>
        </div>
        <div className='flex items-center'>
            <p className='font-hanken font-bold text-[1.1rem] text-neutral-dark-gray-blue'>{score} <span className='opacity-[0.4]'>/ 100</span></p>
        </div>
    </section>
  )
}
