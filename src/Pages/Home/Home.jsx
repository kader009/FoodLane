import About from '../About/About';
import Banner from '../Banner';
import OurChefs from '../OurChef';
import TopFood from '../TopFood';

const Home = () => {
  return (
    <div>
      <Banner />
      <About/>
      <TopFood/>
      <OurChefs/>
    </div>
  );
};

export default Home;
