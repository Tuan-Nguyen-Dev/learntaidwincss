import React from 'react'

const Services = () => {
  
    const images = [
      require("../assets/company1.png"),
      require("../assets/company2.png"),
      require("../assets/conpany3.png"),
      require("../assets/company4.png"),
      require("../assets/company5.png"),
      require("../assets/company6.png"),
      require("../assets/company1.png"),
    ];

    const services_card = [
      {
        id: 1,
        title: "Membership Organisations",
        imgages: require("../assets/icon_servies-1.png"),
        description:
          "Our membership management software provides full automation of membership renewals and payments",
      },
      {
        id: 2,
        title: "National Associations",
        imgages: require("../assets/icon_servies-2.png"),
        description:
          "Our membership management software provides full automation of membership renewals and payments",
      },
      {
        id: 3,
        title: "Clubs And Groups",
        imgages: require("../assets/icon_servies-3.png"),
        description:
          "Our membership management software provides full automation of membership renewals and payments",
      },
    ];

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralLGrey font-semibold mb-2">
          Our client
        </h2>
        <p className="text-neutralLGrey">
          We have been working with some Fortune 500+ clients
        </p>

        {/* Logo company */}
        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              width={40}
              height={40}
            />
          ))}
        </div>
      </div>

      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-neutralLGrey font-semibold mb-2">
          Manage your entire community in a single system
        </h2>
        <p className="text-neutralLGrey">Who is Nextcent suitable for?</p>
      </div>

      {/* Card */}
      <div className="mt-14 grid lg:grid-cols-3 md:grid-flow-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-8">
        {services_card.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-full px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#dde1e2]"
          >
            <div>
              <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl transform transition-transform duration-300 hover:rotate-12">
                <img src={item.imgages} alt="" className="-ml-5" />
              </div>
              <h3 className="text-2xl font-semibold text-neutralGrey mb-2 px-2">
                {item.title}
              </h3>
              <p className="text-sm text-neutralLGrey">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services