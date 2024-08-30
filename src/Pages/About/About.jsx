const About = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center min-h-screen text-white px-6 lg:px-20 py-12 bg-black">
      <div className="lg:w-1/2 flex justify-center mb-10 lg:mb-0">
        <img
          src="https://images.pexels.com/photos/14786462/pexels-photo-14786462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="FoodLane Restaurant"
          className="rounded-lg shadow-lg w-full h-full object-cover"
        />
      </div>

      <div className="lg:w-1/2 text-center lg:text-left lg:pl-12">
        <h2 className="text-4xl font-bold mb-4 text-[#F44336]">
          About FoodLane
        </h2>
        <p className="text-lg mb-6">
          Welcome to FoodLane, where culinary artistry meets a delightful dining
          experience. We are passionate about bringing you the finest dishes,
          crafted with the freshest ingredients and a touch of love. At
          FoodLane, every meal is a celebration of flavors, tradition, and
          creativity.
        </p>
        <p className="text-lg mb-6">
          Our journey began with a simple idea to create a place where people
          can come together to enjoy great food in a warm and welcoming
          atmosphere. Whether you are here for a casual lunch, a romantic
          dinner, or a special occasion, FoodLane offers a unique and memorable
          dining experience for everyone.
        </p>
        <p className="text-lg">
          Join us at FoodLane and let us take you on a culinary journey that
          will tantalize your taste buds and leave you craving for more.
        </p>
      </div>
    </section>
  );
};

export default About;
