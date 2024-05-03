import Header from "../components/Header";
import Hero from "../components/Hero";
import Events from "../components/Events";
import About from "../components/About";
import Message from "../components/Message";
import Learning from "../components/Learning";
import LearningSchools from "../components/LearningSchools";
import ChooseIvan from "../components/ChooseIvan";
import Testimonial from "../components/Testimonial"
import Staff from "../components/Staff"
import NewsLetter from "../components/NewsLetter"
import Footer from "../components/Footer"
const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Events />
      <About />
      <Message />
      <Learning />
      <LearningSchools />
      <ChooseIvan />
      <Testimonial />
      <Staff />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default HomePage;
