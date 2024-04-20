import Header from "../components/Header";
import Hero from "../components/Hero";
import Events from "../components/Events";
import About from "../components/About";
// import Mission from "../components/Mission";
import Message from "../components/Message";
const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Events />
      <About />
      {/* <Mission /> */}
      <Message />
    </div>
  );
};

export default HomePage;
