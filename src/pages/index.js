import React from 'react'
import Layout from '../components/layout'
import HeroSection from '../components/HeroSection';
import History from '../components/HistorySection'
import { SliderData } from '../data/CarouselData'
import Teams from '../components/TeamSection';
const IndexPage = () => {
  return (
    <Layout>
        <HeroSection />
        <History slides={ SliderData } />
        <Teams />
   </Layout>   
      
    
  )
}

export default IndexPage

