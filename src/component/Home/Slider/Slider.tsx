import React from 'react'
import Slider from "react-slick";
import styles from './Slider.module.scss'
import Link from 'next/link';

const SliderWRapper = ({sliderArr}:any) => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
        draggable: true,
        slidesToShow: 4.25,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow:3,
             
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 1008,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                infinite: true,
              },
            },
          ],
      };
  return (
    <div className={styles["slider-wrapper"]} >
    <div className={styles['slider-title']}>
    <p className='section-heading'>Event </p>
    <Link href="/event" className='theme-tag'>View All </Link>
    </div>
    <div >
            <Slider {...settings}>

              {sliderArr?.map((item:any)=>{


                return  <Link href={`/event-details/${item?._id}`} ><img src={item?.images[0]} className={styles['slider-img']}/></Link>
})}

    </Slider>

    </div>
    </div>
  )
}

export default SliderWRapper