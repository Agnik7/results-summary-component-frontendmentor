import React from 'react';
import './App.css';
import Result from './components/Result';
import Details from './components/Details';
function App() {

  return (
    <main className='min-h-screen grid place-items-center '>
      <section className='w-full max-w-[46rem] h-[32rem] flex rounded-[2rem] bg-white shadow-bx'>
        <Result />
        <Details/>
      </section>
    </main>
  )
}

export default App
