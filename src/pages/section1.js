import React from 'react'
import History from '../components/HistorySection'
import Layout from '../components/layout'

import { SliderData } from '../data/CarouselData'
const section1 = () => {
    return (
        <Layout>
          <History slides={ SliderData }  />         
        </Layout>
    )
}

export default section1
