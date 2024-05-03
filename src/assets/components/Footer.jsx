import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";


const Footer = () => {
  return (
    <>
      <div className="staff-div flex flex-col justify-center items-center pb-10">
        <div className="top-footer">
          <div className="flex text-center gap-6 icons pt-8 cursor-pointer">
            <div>
              <AiOutlineMail className="w-6  h-7"/>
            </div>
            <div>
              <FiFacebook className="w-6  h-7"/>
            </div>
            <div>
              <FaInstagram className="w-6  h-7"/>
            </div>
            <div>
              <FaXTwitter className="w-6  h-7"/>
            </div>
          </div>
        </div>
        <div className="">
          <p className="icons text-xs md:text-base pt-3">
            Ivan Elite School <span className="md:text-lg">&#10242;</span> 55 Afariogun
            Street <span className="md:text-lg">&#10242;</span> Oshodi, Lagos State
          </p>
          <p className="icons text-xs md:text-base text-center pt-3">
            Copyright 2024 <span className="">&copy;</span> All Rights
            Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
