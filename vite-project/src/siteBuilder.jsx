import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './header/header'
import SectionOne from './sectionOne/sectionOne'
import SectionTwo from './sectionTwo/sectionTwo'
import SectionThree from './sectionThree/sectionThree'
import SectionFour from './sectionFour/sectionFour'
import SectionFive from './sectionFive/sectionFive'
import SectionSix from './sectionSix/sectionSix'
import Footer from './footer/footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <SectionOne/>
    <SectionTwo/>
    <SectionThree/>
    <SectionFour/>
    <SectionFive/>
    <SectionSix/>
    <Footer/>
  </StrictMode>,
)
