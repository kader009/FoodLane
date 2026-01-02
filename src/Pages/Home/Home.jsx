import { Helmet } from 'react-helmet-async';
import { lazy, Suspense } from 'react';

import Banner from '../Banner';
import About from '../About/About';

const TopFood = lazy(() => import('../TopFood'));
const OurChefs = lazy(() => import('../OurChef'));
const TestimonialsSlider = lazy(() =>
  import('../../Components/TestimonialsSlider')
);
const PricingSection = lazy(() => import('../PricingSection'));
const ContactUs = lazy(() => import('../ContactUs'));

const Home = () => {
  return (
    <>
      <Helmet>
        <title>FoodLane</title>
      </Helmet>

      <main>
        <Banner />
        <About />

        <Suspense fallback={<div className="h-96 animate-pulse bg-gray-800" />}>
        <TopFood />
          <OurChefs />
          <TestimonialsSlider />
          <PricingSection />
          <ContactUs />
        </Suspense>
      </main>
    </>
  );
};

export default Home;
