import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";


const Footer = () => {
  return (
    <>
      <div className="staff-div flex flex-col justify-center items-center">
        <div className="top-footer">
          <div className="flex text-center gap-5 icons">
            <div>
              <AiOutlineMail className="w-7  h-7"/>
            </div>
            <div>
              <FiFacebook className="w-7  h-7"/>
            </div>
            <div>
              <FaInstagram className="w-7  h-7"/>
            </div>
            <div>
              <FaXTwitter className="w-7  h-7"/>
            </div>
          </div>
        </div>
        <div className="down-footer">
          <p className="ivan-cp">
            Ivan Elite School <span className="dot">&#10242;</span> 55 Afariogun
            Street <span className="dot">&#10242;</span> Oshodi, Lagos State
          </p>
          <p className="copyright">
            Copyright 2023 <span className="cp-span">&copy;</span> All Rights
            Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
