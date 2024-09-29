import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Container from './Container';

const testimonials = [
  {
    name: 'Michael Anderson',
    image:
      'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    feedback:
      'FoodLane is fantastic! The food quality is consistent, and their service is impeccable. Highly recommended!',
  },
  {
    name: 'Sophia Williams',
    image: 'https://images.pexels.com/photos/789305/pexels-photo-789305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    feedback:
      'A remarkable dining experience! Fresh ingredients, amazing flavors, and excellent service every time!',
  },
  {
    name: 'David Johnson',
    image:
      'https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    feedback:
      'The dishes at FoodLane are crafted with such care! A perfect spot for a great meal with family and friends.',
  },
];

const TestimonialsSlider = () => {
  return (
    <Container>
      <div className="px-5 py-10 bg-black">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-black text-[#F44336] mb-2">
            Testimonial
          </h2>
          <p className="text-lg mb-6 capitalize">
            Now you can see our valueable customer review
          </p>

          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            slidesPerView={1}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center justify-center px-4 py-8 bg-gray-950 rounded-lg shadow-lg">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} image`}
                    className="w-24 h-24 rounded-full mb-4"
                  />
                  <p className="text-gray-300 italic text-lg mb-4">
                    "{testimonial.feedback}"
                  </p>
                  <h3 className="text-xl font-medium text-white">
                    {testimonial.name}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default TestimonialsSlider;
