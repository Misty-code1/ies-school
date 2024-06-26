import { Link } from "react-router-dom";
import eventImg from "../images/event-img.jpg";
import { Input, Button } from "@material-tailwind/react";
import { useState } from "react";

// import { MdOutlineEmail } from "react-icons/md";
// import { LuSendHorizonal } from "react-icons/lu";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const onChange = ({ target }) => setEmail(target.value);

  return (
    <>
      <div className="flex flex-col justify-center items-center shade px-3 text-center py-7 md:py-20 pb-4">
        <h4 className="Schltitle text-2xl font-semibold">NEWSLETTER</h4>
        <h2 className="text-3xl font-semibold pt-2">Get Latest News</h2>
        <div className="relative flex w-full max-w-[22rem] md:max-w-[40rem] mt-6 md:mt-8">
          <Input
            type="email"
            label="Email Address"
            value={email}
            onChange={onChange}
            className="pr-20"
            containerProps={{
              className: "min-w-0",
            }}
          />
          <Button
            size="sm"
            color={email ? "gray" : "blue-gray"}
            disabled={!email}
            className="!absolute right-1 top-1 rounded"
          >
            Subscribe
          </Button>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(40, 110, 28, 0.6), rgba(40, 110, 28, 0.6)), url(${eventImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="pt-4 text-center h-40 md:h-80"
      >
        <h1 className="text-3xl lg:text-6xl text-white font-bold pb-2 md:pb-5 md:pt-10">Ivan Elite School</h1>
        <p className="text-xl md:text-3xl text-white pb-6 md:pb-10">Nuturing success</p>
        <Link to="/" className="px-7 md:px-16 py-2 md:py-5 shade rounded-full font-semibold cursor-pointer text-sm md:text-base">
          ENROLL YOUR CHILD TODAY
        </Link>
      </div>
    </>
  );
};

export default NewsLetter;
