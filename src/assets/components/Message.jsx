/* eslint-disable react/no-unescaped-entities */
import event2Img from "../images/funmiImg.jpg";

const Message = () => {
  return (
    <div className="md:flex pt-3 md:pt-10 px-4 md:px-28 md:gap-14">
      <div className="md:flex md:w-3/5">
        <div className="">
          <p className="text-xl md:text-2xl italic font-medium text-gray-700">
            Director's Message
          </p>
          <h2 className="text-2xl md:text-5xl mt-1 font-semibold text-gray-800">
            EDUCATION IS THE MOST <br /> POWERFUL WEAPON
          </h2>
          <p className="md:text-lg pt-3 md:pr-10">
            Our students are talented, hard-working and full of good ideas. We
            encourage and empower them to bring their ideas to life. Hands on
            opportunities are what we're all about. Our students are busy doing
            things that matter. <br /> Take a look ate the opportunities you'll
            have at the School. The task of a modern educator is not to cut down
            jungles but to irrigate deserts.
          </p>
          <h5 className="text-lg md:text-xl font-medium text-gray-800 mt-2">
            MRS. JOY EKENE ANYASI
          </h5>
          <p className="text-lg font-medium italic text-gray-800 mb-3">
            Director
          </p>
        </div>
      </div>
      <div className="hidden md:flex gap-2 md:mt-5">
        <div className="h-full mb-2">
          <img src={event2Img} alt="" className="w-56 rounded-lg" />
        </div>
        <div className="h-1/2">
          <img src={event2Img} alt="" className="w-28 mb-1 rounded-lg" />

          <div className="h-1/2">
            <img src={event2Img} alt="" className="w-28 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
