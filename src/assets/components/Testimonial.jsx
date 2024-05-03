/* eslint-disable react/no-unescaped-entities */
import reviewImg from "../images/review-img.jpg";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const Testimonial = () => {
  return (
    <>
      <div className="w-full py-8 px-3 md:px-40">
        <h4 className="text-center text-2xl md:text-3xl font-semibold Schltitle">
          TESTIMONIAL
        </h4>
        <h2 className="text-center text-3xl md:text-4xl font-semibold p-2">
          What Our Parents Say
        </h2>
        <div className=" md:flex gap-8 w-full">
          <div className="hidden lg:flex">
            <img
              src={reviewImg}
              alt=""
              className="rounded-lg"
              style={{ width: "600px" }}
            />
          </div>
          <div className="md:pt-4">
            <BiSolidQuoteAltLeft className="w-10 h-10 md:w-20 md:h-20 Schltitle" />
            <p className="px-5 md:text-lg">
              "Sending my daughter to Ivan Elite School was the best decision I
              ever made. She's thriving academically and socially in such a
              supportive and inclusive environment. <br /> Ivan Elite has truly
              exceeded my expectations! <br /> From their exceptional teachers
              to their top-notch facilities, my daughter is geting the best
              education possible. I couldn't be happier."
            </p>
          </div>
        </div>
        <div className="w-full flex justify-end pt-4 md:pt-0 gap-5 px-3">
          <div className="">
            <img src={reviewImg} alt="" className=" w-16 h-16 rounded-full" />
          </div>
          <div className="pt-2">
            <h2 className="text-lg font-semibold">Mrs E. Amedu</h2>
            <p className="font-semibold">Guardian</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
