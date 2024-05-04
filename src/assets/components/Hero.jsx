import lifeImg from "../images/life-img.jpg";
import carousel1 from "../images/carousel1.jpg";
import carousel2 from "../images/carousel2.jpg";
// import logo from "../images/ieslogo.png";

import { Carousel } from "@material-tailwind/react";

const Hero = () => {
  return (
    <>
      {/* <div
        className="w-full h-auto py-4"
        style={{
          backgroundImage: `linear-gradient(rgba(40, 110, 28, 0.9), rgba(40, 110, 28, 0.9)),url(${lifeImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-center items-center">
          <img src={logo} alt="center logo" className="w-40 md:w-80" />
        </div>
      </div> */}

      <Carousel
        className="h-60 md:h-96"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <img
          src={lifeImg}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src={carousel1}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src={carousel2}
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </>
  );
};

export default Hero;