import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

import styles from './testimonials.component.module.css';
import Title from '../title/title.component';
import Paragraph from '../paragraph/paragraph.component';
import testimonialsInfo from './testimonials-info';

export default function Testimonials() {
  return (
    <section className={styles.testimonialsSection} id="testimonials">
      <div className={styles.sectionTitle}>
        <Title>Testimonial</Title>
        <Paragraph>My coworkers saying</Paragraph>
      </div>
      <Swiper
        className={styles.testimonials}
        loop={true}
        grabCursor={true}
        spaceBetween={25}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          799: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
        }}
        modules={[Pagination]}
      >
        {testimonialsInfo.map(({ title, image, description }, index) => {
          return (
            <SwiperSlide className={styles.testimonialBox} key={index}>
              <img
                src={image}
                alt="testimonial"
                className={styles.testimonialImg}
              />
              <h2 className={styles.testimonialTitle}>{title}</h2>

              <Paragraph className={styles.testimonialP}>
                {description}
              </Paragraph>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
