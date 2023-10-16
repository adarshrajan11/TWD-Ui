import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'
import '../Style.css'

export default function Banner() {
  return (
    <div className='Banner'>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        dynamicHeight
        showIndicators={false}
      >
        {/* <div>
          <img src={banner2} alt='Banner 1' />
        </div> */}
        <div>
          <img src={banner1} alt='Banner 2' />
        </div>
        <div>
          <img src={banner3} alt='Banner 3' />
        </div>
      </Carousel>
    </div>
  )
}
