import Feature from "../../components/Feature";
import Pricing from "../../components/Pricing";
import Hero from "../../components/Hero";
import Layout from "../../components/Layout/Layout";
import SeoHead from "../../components/SeoHead";
import Projects from "../../components/Projects";

const CoursePage = () => {
  return (
    <>
      <SeoHead title="Skill Intern | Courses" />
      <Layout>
        <Hero />
        <Feature />
        <Projects />
        <Pricing />
      </Layout>
    </>
  );
};

export default CoursePage;
