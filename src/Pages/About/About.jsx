import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Image effects
  const imgBlur = useTransform(scrollYProgress, [0, 1], [0, 2]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const imgStyle = {
    filter: useMotionTemplate`blur(${imgBlur}px)`,
    scale: imgScale,
  };

  // Text effects
  const textOpacity = useTransform(scrollYProgress, [0.5, 1], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
  const textStyle = {
    opacity: textOpacity,
    y: textY,
  };

  return (
    <section
      ref={ref}
      className="flex flex-col lg:flex-row items-center justify-center min-h-screen text-white px-6 lg:px-20 py-12 bg-black"
    >
      {/* Image with blur+scale */}
      <motion.div
        style={imgStyle}
        className="lg:w-1/2 flex justify-center mb-10 lg:mb-0"
      >
        <img
          src="https://images.pexels.com/photos/10927834/pexels-photo-10927834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="FoodLane Restaurant"
          className="rounded shadow-lg w-full h-full object-cover"
        />
      </motion.div>

      {/* Text with fade+translate */}
      <motion.div
        style={textStyle}
        className="lg:w-1/2 text-center lg:text-left lg:pl-12"
      >
        <h2 className="text-4xl font-black mb-4 text-[#F44336]">
          About FoodLane
        </h2>
        <p className="text-lg mb-6">
          Welcome to FoodLane, where culinary artistry meets a delightful dining
          experience. We are passionate about bringing you the finest dishes,
          crafted with the freshest ingredients and a touch of love.
        </p>
        <p className="text-lg mb-6">
          Our journey began with a simple idea to create a place where people
          can come together to enjoy great food in a warm and welcoming
          atmosphere.
        </p>
        <p className="text-lg">
          Join us at FoodLane and let us take you on a culinary journey that
          will tantalize your taste buds and leave you craving for more.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
