import Container from '../Components/Container';

const chefs = [
  {
    name: 'John Doe',
    designation: 'Head Chef',
    image:
      'https://mir-s3-cdn-cf.behance.net/projects/404/94fafc78689473.Y3JvcCwxMzY2LDEwNjgsMCwyMzM.jpg',
  },
  {
    name: 'Jane Smith',
    designation: 'Sous Chef',
    image:
      'https://img.freepik.com/premium-photo/chef-woman-wearing-white-uniform-dark-background-generative-ai_58409-30398.jpg',
  },
  {
    name: 'Emily Johnson',
    designation: 'Pastry Chef',
    image:
      'https://us.123rf.com/450wm/serezniy/serezniy1809/serezniy180939857/110126965-african-american-chef-in-uniform-on-dark-background.jpg?ver=6',
  },
];

const OurChefs = () => {
  return (
    <section className="py-12 bg-black px-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2 text-[#F44336]">
          Meet Our Chefs
        </h2>
        <p className="mb-6">
          Our chef at FoodLane expertly crafts each dish, ensuring every bite is
          a delight.
        </p>
        <Container>
          <div className="flex flex-wrap justify-center">
            {chefs.map((chef, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-gray-950 rounded-lg shadow-lg p-6">
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">{chef.name}</h3>
                  <p>{chef.designation}</p>
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
