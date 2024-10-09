import { Helmet } from 'react-helmet-async';
import About from '../About/About';
import Banner from '../Banner';
import ContactUs from '../ContactUs';
import OurChefs from '../OurChef';
import TopFood from '../TopFood';
import TestimonialsSlider from '../../Components/TestimonialsSlider';

const Home = () => {
  return (
    <div>
      <div>
        <Helmet>
          <title>FoodLane</title>
        </Helmet>
      </div>
      <Banner />
      <About />
      <TopFood />
      <OurChefs />
      <TestimonialsSlider />
      <ContactUs />
    </div>
  );
};

export default Home;
