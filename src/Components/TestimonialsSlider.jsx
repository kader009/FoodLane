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
      <div className="px-5 py-16 bg-black relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#F44336] opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#F44336] opacity-5 rounded-full blur-3xl"></div>

        <div className="container mx-auto text-center relative z-10">
          {/* Header Section */}
          <div className="mb-12">
            <div className="inline-block">
              <h1 className="text-4xl font-black text-[#F44336] mb-2 relative">
                Testimonial
              </h1>
            </div>
            <p className="text-lg mb-6 capitalize text-gray-300 max-w-2xl mx-auto">
              Now you can see our valuable customer reviews
            </p>
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet opacity-50',
              bulletActiveClass:
                'swiper-pagination-bullet-active opacity-100 bg-[#F44336]',
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="group relative">
                  {/* Quote icon */}
                  <div className="absolute -top-4 -left-4 text-6xl text-[#F44336] opacity-20 font-serif"></div>

                  <div className="relative bg-gradient-to-br from-gray-900 via-gray-950 to-black rounded p-8 shadow-2xl border border-gray-800 hover:border-[#F44336] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(244,67,54,0.1)]">
                    {/* Profile section */}
                    <div className="flex flex-col items-center mb-6">
                      <div className="relative mb-4">
                        <img
                          src={testimonial.image}
                          alt={`${testimonial.name} image`}
                          className="w-16 h-16 rounded-full border-4 border-[#F44336] shadow-lg"
                        />
                        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#F44336] rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-1">
                        {testimonial.name}
                      </h3>

                      {/* Rating stars */}
                      <div className="text-yellow-400 text-lg mb-4">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>

                    {/* Feedback */}
                    <div className="relative">
                      <p className="text-gray-300 italic text-base leading-relaxed">
                        {testimonial.feedback}
                      </p>
                    </div>

                    {/* Decorative bottom accent */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-[#F44336] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Bottom decorative text */}
          <div className="mt-8 text-gray-600 text-sm">
            ⭐ Trusted by food lovers ⭐
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TestimonialsSlider;
