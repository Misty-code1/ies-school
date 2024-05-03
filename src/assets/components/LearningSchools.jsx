import crecheImg from "../images/crecheImg.jpg";
import event2Img from "../images/event2Img.jpg";
import primaryImg from "../images/primaryImg.jpg";
import afterImg from "../images/afterImg.jpg";

const LearningSchools = () => {
  return (
    <div className="md:text-center px-3 md:px-20 py-3">
      <div className="">
        <p className="text-base font-semibold md:text-2xl md:pt-5">Explore Our Programs</p>
        <p className="pt-2 md:pt-3 text-base">
          Looking for quality Education? <br /> Look no futher, Explore our range of
          programs including creche, nursery, primary, and after-school care.
          Enroll your child today.
        </p>
      </div>

      <div className="md:flex justify-center w-full pt-5 md:pt-10 md:gap-8">
        <div className="bg-white border border-gray-200 rounded-md shadow md:w-1/3 mb-4 md:mb-0">
          <img src={crecheImg} alt="" className="rounded-t-md w-full h-60" />
          <div className="py-5 text-center">
            <h2 className="text-xl font-semibold Schltitle">CRECHE</h2>
            <p className="pt-2 px-2">
              Providing safe and loving care for your little ones. Enroll them
              in our creche today.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-md shadow md:w-1/3 mb-4 md:mb-0">
          <img src={event2Img} alt="" className="rounded-t-md w-full h-60" />
          <div className="py-5 text-center">
            <h2 className="text-xl font-semibold Schltitle">NURSERY</h2>
            <p className="pt-2 px-2">
              We providing a safe and sound environment, and equip children with
              knowledge.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg shadow md:w-1/3 mb-4 md:mb-0">
          <img src={primaryImg} alt="" className="rounded-t-md w-full h-60" />
          <div className="py-5 text-center">
            <h2 className="text-xl font-semibold Schltitle">PRIMARY</h2>
            <p className="pt-2 px-2">
              We offer a comprehensive elementry education that prepares
              students for the challenges ahead.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg shadow md:w-1/3">
          <img src={afterImg} alt="" className="rounded-t-md w-full h-60" />
          <div className="py-5 text-center">
            <h2 className="text-xl font-semibold Schltitle">AFTER SCHOOL</h2>
            <p className="pt-2 px-2">
              We provide a safe and supportive environment for kids to learn,
              play and grow
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningSchools;
