/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import logo from "../images/ieslogo.png";

const About = () => {
  const [tab, setTab] = useState("A");
  return (
    <>
      <div className="w-full md:h-4/5 lg:flex justify-center px-3">
        <div className="w-3/5 justify-center items-center hidden lg:flex">
          <img src={logo} alt="" className="w-3/5 h-fit mt-20" />
        </div>
        <div className="md:w-full mt-6 lg:mt-20 lg:pr-16">
          <h4 className="text-xl md:text-2xl font-semibold text-green-800">ABOUT US</h4>
          <h2 className="text-2xl md:text-3xl pt-2 font-semibold">
            WHO WE ARE
          </h2>
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
            <p className="text-base md:text-md pt-2 leading-6">
              Welcome to Ivan Elite School, where excellence in education means
              nurturing and inclusive environment.
              <br className="hidden md:flex" />
              <br className="hidden md:flex" /> Our dedicated faculty of staff
              are commited to fostering academic, personal, and social growth in
              each and every student. <br className="hidden md:flex" />{" "}
              <br className="hidden md:flex" /> At Ivan Elite we belive that
              education is the key to unlocking endless possibilities and
              empowering students to reach their fullest potential.{" "}
              <br className="hidden md:flex" />{" "}
              <br className="hidden md:flex" />
              Come join our Ivan family and embark on an exciting journey of
              learning and discovery.{" "}
            </p>
          ) : tab === "B" ? (
            <p className="text-base md:text-md pt-2 leading-6">
              At Ivan Elite School, we're dedicated to nurturing the next
              generation of leaders through a transformative educational
              approach that goes beyond textbooks.{" "}
              <br className="hidden md:flex" />{" "}
              <br className="hidden md:flex" /> Our ethos revolves around
              igniting curiosity, building strong communities, and nurturing
              ambitious spirits. <br className="hidden md:flex" />
              <br className="hidden md:flex" />
              Through innovative teaching methods and a supportive environment,
              we empower students to explore their passions, embrace diversity,
              and develop the critical thinking skills needed to excel in an
              ever-evolving world. <br className="hidden md:flex" />
              <br className="hidden md:flex" />
              At Ivan Elite, education is not just about academic success; it's
              about shaping well-rounded individuals who are equipped to make a
              positive impact on society.
            </p>
          ) : (
            <p className="text-base md:text-md pt-2 leading-6">
              At Ivan Elite School, we believe in a holistic education that
              blends innovation with tradition to nurture compassionate leaders.{" "}
              <br className="hidden md:flex" />
              <br className="hidden md:flex" />
              Our mission is to cultivate well-rounded individuals who excel
              academically while also embodying empathy, integrity, and
              resilience. <br className="md:flex" />
              <br className="hidden md:flex" />
              Through a balanced curriculum and experiential learning, we
              prepare our students to make meaningful contributions to society
              and lead with compassion in an ever-changing world.{" "}
              <br className="hidden md:flex" />
              <br className="hidden md:flex" />
              Join us in shaping a brighter future at Ivan Elite School.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default About;
