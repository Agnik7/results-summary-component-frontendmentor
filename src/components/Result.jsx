import React from 'react';
import Total from './Total';
export default function Result() {
  return (
    <section className='w-full max-w-[23rem] h-full bg-gradient-to-b from-grad-slate-blue to-grad-royal-blue p-[2.5rem] flex flex-wrap justify-center text-center rounded-[2rem]'>
        <h1 className='font-hanken font-medium text-neutral-light-lavender text-[1.5rem]'>Your Result</h1>
        <Total />
        <div className='my-[1rem] p-[1rem]'>
            <h2 className='font-hanken text-[2rem] font-medium text-white'>Great</h2>
            <p className='font-hanken text-[1.1rem] text-neutral-light-lavender mt-[0.8rem]'>You scored higher than 65% of the people who have taken these tests.</p>
        </div>
    </section>
  )
}
