import About from '../About/About';
import Banner from '../Banner';
import ContactUs from '../ContactUs';
import OurChefs from '../OurChef';
import TopFood from '../TopFood';

const Home = () => {
  return (
    <div>
      <Banner />
      <About/>
      <TopFood/>
      <OurChefs/>
      <ContactUs/>
    </div>
  );
};

export default Home;
