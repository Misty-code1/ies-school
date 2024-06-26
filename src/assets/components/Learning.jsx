import eventImg from "../images/event-img.jpg";

const Learning = () => {
  return (
    <>
      <div className="w-full">
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(128, 29, 10, 0.9), rgba(128, 29, 10, 0.9)), url(${eventImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="py-8 md:py-10 px-3 md:h-64"
        >
          <h3 className="director md:pt-8 text-2xl md:text-4xl icons font-bold md:px-20">Learning</h3>
          <p className="md:px-20 pt-2 text-white font-semibold md:text-2xl md:pt-5">Experience our diverse curriculum</p>
        </div>
      </div>
    </>
  );
};

export default Learning;
