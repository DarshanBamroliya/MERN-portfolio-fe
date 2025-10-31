import React from 'react';
import HeroSec from './Pages/Herosec/page';
import Header from './Common/Header/page';
import SelectedProjects from './Pages/SelectedProjects/page';
import AboutUs from './Pages/Aboutme/page';
import Footer from './Common/Footer/page';

function HomePage() {
  return (
    <>
      <HeroSec />
      <SelectedProjects />
      <AboutUs />
      <Header />
      <Footer />
    </>
  )
}

export default HomePage;