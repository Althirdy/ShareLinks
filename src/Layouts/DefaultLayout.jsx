import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import LinksMobileView from 'src/Components/LinksMobileView';
import Navbar from 'src/Components/Navbar'
import wave from 'src/Assets/wave.svg'

export default function DefaultLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/links', { replace: true });
    }
  }, [location, navigate]);

  return (
    <div className='mx-auto max-w-screen-xl font-[Roboto]'>
      <section className='min-h-screen p-4 flex flex-col gap-8'>
        <header>
          <Navbar />
        </header>
        <main className='flex-grow flex justify-between flex-col bg-gray-100 rounded-md'>
          <div className='grid grid-cols-1 p-4 lg:grid-cols-2 flex-grow gap-4'>
            <div className=' bg-white rounded-md relative'>
              <img src={wave} alt="" className='absolute  top-0 w-full lef-0 rounded-t-md' />
              <LinksMobileView />
            </div>
            <div className='p-8 bg-white rounded-md flex flex-col gap-8'>
              <Outlet />
            </div>
          </div>
        </main>
      </section>
    </div>
  )
}
