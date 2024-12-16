import React from "react";
import { Carousel, CustomFlowbiteTheme, Flowbite } from "flowbite-react";
import banner1 from "../assets/banner1svg.svg";
const Home = () => {

  const customTheme: CustomFlowbiteTheme = {
    carousel: {
      indicators: {
        active: {
          off: "bg-brandPrimary/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
          on: "bg-brandPrimary dark:bg-gray-800",
        },
        base: "h-2 w-2 rounded-full",
        wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
      },
    },
  };
  return (
    <div className="bg-neutralSilver">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Flowbite theme={{ theme: customTheme }}>
          <Carousel indicators className="w-full mx-auto">
            <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-6">
              <div>
                <img src={banner1} alt="banner" />
              </div>
              <div className="md:w-1/2">
                <h3 className="font-bold text-5xl mb-4 text-neutralGrey md:w-3/4 leading-snug">
                  Lessons and insights{" "}
                  <span className="text-brandPrimary leading-snug">
                    from 8 years
                  </span>
                </h3>
                <p className="text-neutralGrey font-semibold text-base mb-8">
                  Where to grow your business as a photographer: site or social
                  media?
                </p>
                <a
                  href="!#"
                  className="px-7 py-2 bg-brandPrimary text-white rounded"
                >
                  Document
                </a>
              </div>
            </div>

            <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-6">
              <div>
                <img src={banner1} alt="banner" />
              </div>
              <div className="md:w-1/2">
                <h3 className="font-bold text-5xl mb-4 text-neutralGrey md:w-3/4 leading-snug">
                  Lessons and insights{" "}
                  <span className="text-brandPrimary leading-snug">
                    from 8 years
                  </span>
                </h3>
                <p className="text-neutralGrey font-semibold text-base mb-8">
                  Where to grow your business as a photographer: site or social
                  media?
                </p>
                <a
                  href="!#"
                  className="px-7 py-2 bg-brandPrimary text-white rounded"
                >
                  Document
                </a>
              </div>
            </div>
            <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-6">
              <div>
                <img src={banner1} alt="banner" />
              </div>
              <div className="md:w-1/2">
                <h3 className="font-bold text-5xl mb-4 text-neutralGrey md:w-3/4 leading-snug">
                  Lessons and insights{" "}
                  <span className="text-brandPrimary leading-snug">
                    from 8 years
                  </span>
                </h3>
                <p className="text-neutralGrey font-semibold text-base mb-8">
                  Where to grow your business as a photographer: site or social
                  media?
                </p>
                <a
                  href="!#"
                  className="px-7 py-2 bg-brandPrimary text-white rounded"
                >
                  Document
                </a>
              </div>
            </div>
          </Carousel>
        </Flowbite>
      </div>
    </div>
  );
};

export default Home;
