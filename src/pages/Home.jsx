import AboutSection from "../components/About";
import HeroBanner from "../components/HeroBanner";
import TestimonialSection from "../components/Testimonials";
import WorkSection from "../components/Work";

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <AboutSection />
      <WorkSection />
      <TestimonialSection />
    </>
  );
};

export default HomePage;
