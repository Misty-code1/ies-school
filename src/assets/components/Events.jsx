import eventImg from "../images/event-img.jpg";
import headerImg from "../images/header-img.jpg";
import lifeImg from "../images/life-img.jpg";

const Events = () => {
  return (
    <>
      <div className="hidden h-40 md:flex">
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(128, 29, 10, 0.8), rgba(128, 29, 10, 0.8)), url(${eventImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="flex flex-col items-center justify-center mx-1 my-2 md:my-0 md:mx-0 flex-1 rounded-lg md:rounded-none
          "
        >
          <h1 className="text-2xl md:text-3xl font-semibold text-white">
            SCHOOL
          </h1>
          <p className="text-center text-white">EVENTS</p>
        </div>

        <div
          style={{
            backgroundImage: `linear-gradient(rgba(247, 233, 69, 0.8), rgba(247, 233, 69, 0.8)), url(${headerImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="flex flex-col items-center justify-center mr-1 my-2 md:my-0 md:mx-0 flex-1 rounded-lg md:rounded-none"
        >
          <h1 className="text-2xl md:text-3xl font-semibold text-white">
            STUDENT
          </h1>
          <p className=" text-lg text-white">PORTAL</p>
        </div>

        <div
          style={{
            backgroundImage: `linear-gradient(rgba(31, 74, 150, 0.8), rgba(31, 74, 150, 0.8)), url(${lifeImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="flex flex-col items-center justify-center mr-1 my-2 md:my-0 md:mx-0 flex-1 rounded-lg md:rounded-none"
        >
          <h1 className="text-2xl md:text-3xl font-semibold text-white">
            SCHOOL
          </h1>
          <p className="text-white">GALLERY</p>
        </div>
      </div>
    </>
  );
};

export default Events;
