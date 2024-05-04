import Hero from "../components/Hero";
import About from "../components/About";
import Message from "../components/Message";
import Learning from "../components/Learning";
import LearningSchools from "../components/LearningSchools";
import ChooseIvan from "../components/ChooseIvan";
import Testimonial from "../components/Testimonial";
import Staff from "../components/Staff";
import NewsLetter from "../components/NewsLetter";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Message />
      <Learning />
      <LearningSchools />
      <ChooseIvan />
      <Testimonial />
      <Staff />
      <NewsLetter />
    </div>
  );
};

export default HomePage;
