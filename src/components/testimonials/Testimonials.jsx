import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
	{
		avatar: AVTR1,
		name: '— Azamat Sakenuly, Multidisciplinary designer.',
		review: 'I’ve been working with Roman for last 10 months. It’s not that much, but I can firmly say — he’s one of the most qualified persons who I used to work with. He’s loyal to the job he does, also he’s open to negotiate about lots of things (not only about job moments). Roman has all the qualities to over-perform, he also has enough talent to develop his skills 24/7. I was happy to work with him.'
	},
	{
		avatar: AVTR2,
		name: '— Nurtas Rakhmetullayev, Backend developer',
		review: 'I have been working with Roman for half a year and in this short time he has shown only the good side.  High professionalism, responsibility and in general a good guy) I am glad that I work with such a specialist.'
	},
	{
		avatar: AVTR3,
		name: '— Arnur Nurov, 21Tech Teamlead',
		review: 'Roman is an extremely versatile person who is qualified in different areas of his work. He is one of the most motivated people I know. Every day he devotes a large amount of time to self-development in various directions. He also has no equal in the area of technical specialization. Do you want to build a competent full-stack application? Contact Roman! In general, contact Roman on any subject!'
	},
]


const Testimonials = () => {
	return (
		<section id='testimonials'>
			<h5>Review from clients</h5>
			<h2>Testimonials</h2>

			<Swiper className="container testimonials__container"
				// install Swiper modules
				modules={[Pagination]} spaceBetween={40}
				slidesPerView={1}
				pagination={{ clickable: true }}>
				{
					data.map(({ avatar, name, review }, index) => {
						return (
							<SwiperSlide key={index} className="testimonial">
								<div className="client__avatar">
									<img src={avatar} alt="" />
								</div>
								<h5 className='client__name'>{name}</h5>
								<small className='client__review'>{review}</small>
							</SwiperSlide>
						)
					})
				}
			</Swiper>
		</section>
	)
}

export default Testimonials