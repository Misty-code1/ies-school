/* eslint-disable react/no-unescaped-entities */
import event2Img from "../images/funmiImg.jpg";

const Message = () => {
  return (
    <div className="md:flex mt-6 md:mt-0 lg:py-20 px-3 md:px-28 md:gap-48 justify-center items-center">
      <div className="md:flex md:w-3/5">
        <div className="">
          {/* <h3 className="text-md md:text-2xl font-bold md:pb-4">
            Director's Message
          </h3> */}
          <h2 className="text-lg md:text-5xl font-bold lg:font-semibold text-gray-800 ">
            EDUCATION IS THE MOST <br /> POWERFUL WEAPON
          </h2>
          <p className="text-base md:text-md leading-6 align-baseline pt-2 md:text-lg md:pt-8 md:pr-10 md:leading-8">
            Our students are talented, hard-working and full of good ideas. We
            encourage and empower them to bring their ideas to life. Hands on
            opportunities are what we're all about. Our students are busy doing
            things that matter. <br /> Take a look ate the opportunities you'll
            have at the School. The task of a modern educator is not to cut down
            jungles but to irrigate deserts.
          </p>
          <h5 className="text-md md:text-xl font-semibold text-gray-800 mt-2 md:pt-3">
            MRS. JOY EKENE ANYASI
          </h5>
          <p className="director text-md font-medium text-gray-800 mb-3">
            Director
          </p>
        </div>
      </div>
      <div className="hidden md:flex justify-center items-center gap-2 md:mt-5">
        <div className="h-full mb-2 items-center">
          <img src={event2Img} alt="" className="w-80 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Message;
