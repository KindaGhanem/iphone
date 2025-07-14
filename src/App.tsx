import './App.css'
import Hero from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'
import herovideo1 from './assets/videos/hero.mp4';
import herovideo2 from './assets/videos/smallHero.mp4';
import SectionHighlight from './components/SectionHighlight/SectionHighlight';
import { FaRegCirclePlay } from 'react-icons/fa6';
import { FaChevronRight } from 'react-icons/fa';

import SectionCloserLook from './components/SectionCloserLook/SectionCloserLook';

import SectionExplore from './components/SectionExplore/SectionExplore';
import SectionWinGaming from './components/SectionWinGaming/SectionWinGaming';

import imgA17 from "./../src/assets/images/chip.jpeg"
import imgframe from "./../src/assets/images/frame.png"
import videoframe from "./../src/assets/videos/frame.mp4"
import Footer from './components/Footer/Footer';
import { footerLinks, models, navItems, sizes } from './Data/Data';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {




useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);


  navItems
  models
  sizes
  footerLinks


  return (
    <>
      <NavBar items={navItems} />

      <Hero mainTitle={'iPhone 15 Pro'} herovideo1={herovideo1} herovideo2={herovideo2} herobtn={'Buy'} texthero = 'From $199/month or $999' />

      <SectionHighlight mainTitle={"Get the highlights."} link1={'Watch the film'} link2={'Watch the event'} iconlink1= {<FaRegCirclePlay />} iconlink2 = {<FaChevronRight />} />
      
      <SectionCloserLook mainTitle={'Take a closer look.'} closerlooktext={'iPhone 15 Pro in Natural Titanium'} models={models} sizes={sizes}  />

      <SectionExplore 
      mainTitle={'Explore the full story.'} 
      par1={'iPhone.'} 
      par2={'Forged in titanium.'}
      p1={'iPhone 15 Pro is,'} p2={' using the same alloy that spacecrafts use for missions to Mars.'} 
      p3={'Titanium has one of the best strength-to-weight ratios of any metal, making these our .'} 
      p4={' Youll notice the difference the moment you pick one up'} 
      span1={'the first iPhone to feature an aerospace-grade titanium design'} span2={'lightest Pro models ever.'} />

      <SectionWinGaming 
      imgA17={imgA17}
      pargraph1={'A17 Pro chip.'}
      pargraph2={' A monster win for gaming.'}
      pargraph3={'Its here. The biggest redesign in the history of Apple GPUs.'} imgframe={imgframe} videoframe={videoframe} 
      bottomtext={'Honkai: Star Rail'} 
      p1={'A17 Pro is an entirely new class of iPhone chip that delivers our'} p2={', with incredibly detailed environments and characters. '} p3={'New'} p4={'with 6 cores'} 
      span1={'best graphic performance by far Mobile games will look and feel so immersive'} 
      span2={'Pro-class GPU'} />

    <Footer parfooter1={'More ways to shop: '} spanfooter1={'Find an Apple Store or  other retailer '} parfooter2={'near you.'} parfooter3={'Or call 000800-040-1966'} copyrightfooter={'Copright @ 2024 Apple Inc. All rights reserved.'} footerLinks={footerLinks} />
    </>
  )
}

export default App
