import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import LinksMobileView from 'src/Components/LinksMobileView';
import Navbar from 'src/Components/Navbar'

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
            <div className='p-8 bg-white rounded-md'>
              <LinksMobileView />
            </div>
            <div className='p-8 bg-white rounded-md flex flex-col gap-8'>
              {/* <div>
                    <h1 className='font-bold text-2xl tracking-tight'>Customize your Links</h1>
                    <p className='text-gray-700 text-sm'>Add / Edit / Remove links below and then share all your profiles with the world</p>
                </div>
                <div className='space-y-2'>
                    {linkCards.map((item, idx) => (
                        <div key={idx}>
                            <LinkCard
                                id={item.id}
                                removeCard={removeLinkCard}
                                cardData={item}
                                setIsValid={setIsValid}
                                setSelectedPlatform={(selectedOption) => handlePlatformChange(item.id, selectedOption)}
                                handleInputChange={(e) => handleInputChange(item.id, e)}
                            />
                        </div>
                    ))}
                </div>
                {isValid ? <motion.button
                    onClick={addLinkCard}
                    whileHover={{ scale: 1.02 }}
                    className='border flex items-center justify-center py-2 gap-2 text-blue-700 font-bold border-blue-700 rounded-md'>
                    <FaPlus className='mt-[-2px]' />
                    Add new link
                </motion.button> : <span className='text-red-600 text-center text-sm'>Provide a valid link before adding new link</span>} */}
              <Outlet />
            </div>
          </div>
        </main>
      </section>
    </div>
  )
}
