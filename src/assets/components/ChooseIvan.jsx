import {FaPeopleGroup, FaSchool} from 'react-icons/fa6'
import { SiGoogleclassroom } from "react-icons/si";


const ChooseIvan = () => {
  return (
    <>
      <div className="ivan w-full py-8 md:py-12 px-3 text-center md:px-20">
        <h2 className="text-2xl font-bold text-white md:text-4xl">WHY CHOOSE IVAN ELITE ?</h2>
        <div className="pt-3 text-white text-lg md:text-2xl md:pt-6">A choice that makes a difference</div>
        <div className="md:flex justify-center items-center md:pt-8">
          <div className="flex flex-col items-center pt-6">
            <FaPeopleGroup className="w-20 h-20 text-yellow-300 " />
            <h4 className="text-lg font-bold text-white pt-3 md:pt-6">Experienced Staff</h4>
            <p className="text-gray-200 pt-2 px-4">
              Our experienced staff is here to ensure that every student
              receives the best possible education. Our staff members bring a
              wealth of knowledge , expertise and passion to the classroom,
              creating an environment where curisity and creativity thrive.
            </p>
          </div>
          <div className="flex flex-col items-center pt-6">
            <SiGoogleclassroom className="w-20 h-20 text-yellow-300" />
            <h4 className="text-lg font-bold text-white pt-3 md:pt-6">Extensive Subjects</h4>
            <p className="text-gray-200 pt-2 px-4">
              Our extensive Subject catalog caters to a diverse range of
              passions and aspirations. Whether your child is eager to dive into
              the sciencs, express themselves through the arts, or explore
              cutting-edge technologies, our curriculum is designed to inspire
              and empower.
            </p>
          </div>
          <div className="flex flex-col items-center pt-6">
            <FaSchool className="w-20 h-20 text-yellow-300" />
            <h4 className="text-lg font-bold text-white pt-3 md:pt-6">Dedicated Support</h4>
            <p className="text-gray-200 pt-2 px-4">
              Education goes beyond classroom. Our dedicated support system
              encompasses a wide range of resources and services designed to
              address the unique needs of every student, ensuring that they feel
              heard, understood and valued.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseIvan;
