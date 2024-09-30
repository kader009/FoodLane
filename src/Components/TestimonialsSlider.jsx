import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Container from './Container';

// Testimonials data with rating
const testimonials = [
  {
    name: 'Michael Anderson',
    image: 'https://randomuser.me/api/portraits/men/44.jpg',
    feedback:
      'FoodLane is fantastic! The food quality is consistent, and their service is impeccable. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Sophia Williams',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    feedback:
      'A remarkable dining experience! Fresh ingredients, amazing flavors, and excellent service every time!',
    rating: 4,
  },
  {
    name: 'David Johnson',
    image: 'https://randomuser.me/api/portraits/men/85.jpg',
    feedback:
      'The dishes at FoodLane are crafted with such care! A perfect spot for a great meal with family and friends.',
    rating: 5,
  },
  {
    name: 'Emma Thompson',
    image: 'https://randomuser.me/api/portraits/women/13.jpg',
    feedback:
      "FoodLane offers an amazing dining experience with a cozy ambiance. Highly recommend the chef's special!",
    rating: 4,
  },
];

const renderStars = (rating) => {
  const fullStars = '★'.repeat(rating);
  const emptyStars = '☆'.repeat(5 - rating);
  return fullStars + emptyStars;
};

const TestimonialsSlider = () => {
  return (
    <Container>
      <div className="px-5 py-10 bg-black">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-black text-[#F44336] mb-2">
            Testimonial
          </h2>
          <p className="text-lg mb-6 capitalize">
            Now you can see our valuable customer reviews
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
                  <p className="text-yellow-400 mb-4">
                    {renderStars(testimonial.rating)}
                  </p>
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
