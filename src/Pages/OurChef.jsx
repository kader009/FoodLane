import Container from '../Components/Container';
import { FaStar } from 'react-icons/fa';

const chefs = [
  {
    name: 'John Doe',
    designation: 'Head Chef',
    image:
      'https://mir-s3-cdn-cf.behance.net/projects/404/94fafc78689473.Y3JvcCwxMzY2LDEwNjgsMCwyMzM.jpg',
    rating: 5,
  },
  {
    name: 'Jane Smith',
    designation: 'Sous Chef',
    image:
      'https://img.freepik.com/premium-photo/chef-woman-wearing-white-uniform-dark-background-generative-ai_58409-30398.jpg',
    rating: 4,
  },
  {
    name: 'Emily Johnson',
    designation: 'Pastry Chef',
    image:
      'https://plus.unsplash.com/premium_photo-1667520221285-d223f52b73ef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4,
  },
];

const OurChefs = () => {
  return (
    <section className="py-12 bg-black px-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-black mb-2 text-[#F44336]">
          Meet Our Chefs
        </h2>
        <p className="mb-6">
          Our chefs at FoodLane expertly craft each dish, ensuring every bite is
          a delight.
        </p>
        <Container>
          <div className="flex flex-wrap justify-center">
            {chefs.map((chef, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-gray-950 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {chef.name}
                  </h3>
                  <p className="text-gray-400 mb-3">{chef.designation}</p>
                  {/* Chef rating system */}
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((star, i) => (
                      <FaStar
                        key={i}
                        className={`${
                          i < chef.rating ? 'text-yellow-500' : 'text-gray-500'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default OurChefs;
