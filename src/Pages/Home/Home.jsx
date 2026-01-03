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
        <title>FoodLane - Order Delicious Food Online</title>
        <meta
          name="description"
          content="Browse our menu, order your favorite dishes, and get it delivered fresh to your door. Fast delivery, quality food."
        />
        <link rel="canonical" href="https://foodlane.vercel.app/" />
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
