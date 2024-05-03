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
      <div className="flex flex-col justify-center items-center shade px-3 text-center py-16 pb-4">
        <h4 className="Schltitle text-2xl font-semibold">NEWSLETTER</h4>
        <h2 className="text-3xl font-semibold pt-2">Get Latest News</h2>
        <div className="relative flex w-full max-w-[22rem] md:max-w-[40rem] mt-4">
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
        className="pt-4 text-center h-40"
      >
        <h1 className="text-3xl text-white font-bold pb-2">Ivan Elite School</h1>
        <p className="text-xl text-white pb-6">Nuturing for success</p>
        <Link to="/" className="px-8 py-3 shade rounded-full font-semibold">
          ENROLL YOUR CHILD TODAY
        </Link>
      </div>
    </>
  );
};

export default NewsLetter;
