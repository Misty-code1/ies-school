import { useState } from "react";
import logo from "../images/ieslogo.png";

const About = () => {
  const [tab, setTab] = useState("A");
  return (
    <>
      <div className="md:grid grid-cols-5 py-4 px-4">
        <div className="hidden col-span-2 mr-5 md:flex justify-center">
          <img src={logo} alt="" className=" w-80" />
        </div>
        <div className="col-span-3 md:pr-12 md:mt-6">
          <h4 className="text-2xl pt-2 font-semibold text-green-800">
            ABOUT US
          </h4>
          <h2 className="text-3xl pt-2 font-semibold">WHO WE ARE</h2>
          <div className="flex pt-4 gap-3 text-md md:text-xl font-bold cursor-pointer align-middle text-center">
            <h3
              className={tab === "A" ? "active normal px-4 py-1" : "normal"}
              onClick={() => setTab("A")}
            >
              About Us
            </h3>
            <hr />
            <h3
              className={tab === "B" ? "active normal px-4 py-1" : "normal"}
              onClick={() => setTab("B")}
            >
              Our Mission
            </h3>
            <h3
              className={tab === "C" ? "active normal px-4 py-1" : "normal"}
              onClick={() => setTab("C")}
            >
              Our Vission
            </h3>
          </div>
          {tab === "A" ? (
            <p className="text-base pt-4">
              Welcome to Ivan Elite School, where excellence in education means
              nurturing and inclusive environment. Our dedicated faculty of
              staff are commited to fostering academic, personal, and social
              growth in each and every student. At Ivan Elite we belive that
              education is the key to unlocking endless possibilities and
              empowering students to reach their fullest potential. Come join
              our Ivan family and embark on an exciting journey of learning and
              discovery.{" "}
            </p>
          ) : tab === "B" ? (
            <p className="text-base pt-4">
              At Ivan Elite School, we empower future leaders through
              transformative education that sparks curiosity, fosters community,
              and fuels ambition.
            </p>
          ) : (
            <p className="text-base pt-4">
              Ivan Elite School envisions holistic education that nurtures
              well-rounded individuals, blending innovation with tradition, to
              shape compassionate leaders for a better world.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default About;
