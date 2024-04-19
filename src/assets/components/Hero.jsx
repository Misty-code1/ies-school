import lifeImg from "../images/life-img.jpg";
import logo from "../images/ieslogo.png";

const Hero = () => {
  return (
    <>
      <div
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
      </div>
    </>
  );
};

export default Hero;
