import AboutSection from "../components/About";
import HeroBanner from "../components/HeroBanner";
import TestimonialSection from "../components/Testimonials";
import WorkSection from "../components/Work";
import WorkRow from "../components/WorkRow";

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <AboutSection />
      <WorkSection />
      <WorkRow />
      <TestimonialSection />
    </>
  );
};

export default HomePage;
