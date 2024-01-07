import React from 'react';
import './App.css';
import Result from './components/Result';
import Details from './components/Details';
function App() {

  return (
    <main className='min-h-screen grid place-items-center '>
      <section className='w-full md:max-w-[46rem] md:h-[32rem] flex flex-col md:flex-row rounded-[2rem] bg-white shadow-bx'>
        <Result />
        <Details/>
      </section>
    </main>
  )
}

export default App
