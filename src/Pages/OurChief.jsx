const chefs = [
  {
    name: 'John Doe',
    designation: 'Head Chef',
    image:
      'https://st4.depositphotos.com/1017986/25404/i/450/depositphotos_254046202-stock-photo-happy-male-indian-chef-in.jpg',
  },
  {
    name: 'Jane Smith',
    designation: 'Sous Chef',
    image:
      'https://www.shutterstock.com/image-photo/smiling-young-beautiful-asian-woman-600nw-2337955697.jpg',
  },
  {
    name: 'Emily Johnson',
    designation: 'Pastry Chef',
    image:
      'https://media.istockphoto.com/id/1165683221/photo/chef-presents-something-on-a-black-background.jpg?s=612x612&w=0&k=20&c=G3_9EIg-nt-ZKh48hlvRMYWhizVU3uQuUcoNuhOVLKM=',
  },
];

const OurChefs = () => {
  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Meet Our Chefs</h2>
        <div className="flex flex-wrap justify-center">
          {chefs.map((chef, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-[#09000d] rounded-lg shadow-lg p-6">
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
      </div>
    </section>
  );
};

export default OurChefs;
