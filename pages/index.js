import Companies from "../components/Home/Companies/Companies";
import Hero from "../components/Home/Hero/Hero";
import Layout from "../components/Home/Layout/Layout";
import MobileApp from "../components/Home/MobileApp/MobileApp";
import PopularCoursesSection from "../components/Home/PopularCoursesSection/PopularCoursesSection";
import Services from "../components/Home/Services/Services";
import Testimonials from "../components/Home/Testimonials/Testimonials";
import Tutors from "../components/Home/Tutors/Tutors";
import Video from "../components/Home/Video/Video";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title="Skill Intern" />

      <Layout>
        <Hero />
        <MobileApp />
        <Video />
        <Companies />
        <Services />
        <PopularCoursesSection />
        <Tutors />
        <Testimonials />
      </Layout>
    </>
  );
}
