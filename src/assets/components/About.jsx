import { useState } from "react";
import logo from "../images/ieslogo.png";

const About = () => {
  const [tab, setTab] = useState("A");
  return (
    <>
      <div className="flex py-8 px-4">
        <div className="bg-cyan-500 mr-5 col-span-2">
          <img src={logo} alt="" className="" />
        </div>
        <div className="">
          <h4 className="text-3xl font-semibold text-green-800">ABOUT US</h4>
          <h2 className="text-4xl font-semibold">WHO WE ARE</h2>
          <div className="amv">
            <h3
              className={tab === "A" ? "active normal" : "normal"}
              onClick={() => setTab("A")}
            >
              About Us
            </h3>
            <h3
              className={tab === "B" ? "active normal" : "normal"}
              onClick={() => setTab("B")}
            >
              Our Mission
            </h3>
            <h3
              className={tab === "C" ? "active normal" : "normal"}
              onClick={() => setTab("C")}
            >
              Our Vission
            </h3>
          </div>
          {tab === "A" ? (
            <p className="">
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
            <p className="">
              At Ivan Elite School, we empower future leaders through
              transformative education that sparks curiosity, fosters community,
              and fuels ambition.
            </p>
          ) : (
            <p className="">
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
