import React from 'react';
import HeroSec from './Pages/Herosec/page';
import Header from './Common/Header/page';
import SelectedProjects from './Pages/SelectedProjects/page';
import AboutUs from './Pages/Aboutme/page';
import Footer from './Common/Footer/page';

function HomePage() {
  return (
    <>
      <div className="bg-white md:rounded-b-[68px] rounded-b-[40px] relative z-1">
        <div className="mx-width underlay px-4 sm:px-6 lg:px-8">
          <div className="grid:2 g-wrapper grid">
            <div className="grid:2 grid">
              <div></div>
              <div className='lg:block hidden'></div>
            </div>
            <div className="grid:2 grid">
              <div></div>
              <div className='lg:block hidden'></div>
            </div>
          </div>
        </div>
        <HeroSec />
        <SelectedProjects />
        <AboutUs />
        <Header />
      </div>
      <Footer />
    </>
  )
}

export default HomePage;