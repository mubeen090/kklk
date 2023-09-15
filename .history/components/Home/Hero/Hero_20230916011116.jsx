import styles from "./Hero.module.css";
import Image from "next/image";
import hero from "../../../public/assets/homeAssets/hero.png";
import publicSpeaking from "../../../public/assets/homeAssets/publicSpeaking.png";
import careerOriented from "../../../public/assets/homeAssets/careerOriented.png";
import creativeThinking from "../../../public/assets/homeAssets/creativeThinking.png";

import comp1 from "../../../public/assets/companies/comp1.png";
import comp2 from "../../../public/assets/companies/comp2.png";
import comp3 from "../../../public/assets/companies/comp3.png";
import comp4 from "../../../public/assets/companies/comp4.png";
import comp5 from "../../../public/assets/companies/comp5.png";

import tutors from "../../../public/assets/homeAssets/tutors.png";
import onlineCourses from "../../../public/assets/homeAssets/onlineCourses.png";
import iit from "../../../public/assets/homeAssets/iit.png";

const Hero = () => {
  return (
    <>
      <section className={styles.hero_container} id="hero">
        <div className={styles.absolute_container}>
          <div className={styles.tutors}>
            <Image src={tutors} />
          </div>
          <div className={styles.videoCourses}>
            <Image src={iit} className={styles.iit} />
          </div>
          <div className={styles.onlineCourses}>
            <Image src={onlineCourses} />
          </div>
        </div>
        <div className={styles.hero_data}>
          <h1 className={styles.heading}>
            Welcome to <br />
            <span className={styles.heading_hglt}>Skill Intern</span>
          </h1>
          <p className={styles.para}>
            Your Pathway to Assured Placement Through Our Coding Boot Camp!
          </p>
          <div className={styles.button_container}>
            <button className={styles.btn1}>Get Started</button>
            <button className={styles.btn2}>Get Free trial</button>
          </div>
          <div className={styles.row1}>
            <div className={styles.col1}>
              {" "}
              <Image src={publicSpeaking} width={32} height={32} />
              Public Speaking
            </div>
            <div className={styles.col1}>
              {" "}
              <Image src={careerOriented} width={32} height={32} />
              Career-Oriented
            </div>
            <div className={styles.col1}>
              {" "}
              <Image src={creativeThinking} width={32} height={32} />
              Creative Thinking
            </div>
          </div>
        </div>
        <div className={styles.hero_image_container}>
          <Image className={styles.hero_image} src={hero} alt="heroImage" />
        </div>
      </section>
      <div className={styles.row2}>
        <div className={styles.col3}>
          250+ <br className="hidden md:block" />
          <span className={styles.col2}>Collaboration</span>
        </div>
        {/* <div className={styles.col4}></div> */}
        <div className={styles.slider}>
          <div className={styles.slide_track}>
            <div className={styles.slide}>
              <Image src={comp1} className={styles.comp_images} />
            </div>
            <div className={styles.slide}>
              <Image src={comp2} className={styles.comp_images} />
            </div>
            <div className={styles.slide}>
              <Image src={comp3} className={styles.comp_images} />
            </div>
            <div className={styles.slide}>
              <Image src={comp4} className={styles.comp_images} />
            </div>
            <div className={styles.slide}>
              <Image src={comp5} className={styles.comp_images} />
            </div>
            <div className={styles.slide}>
              <Image src={comp1} className={styles.comp_images} />
            </div>
            <div className={styles.slide}>
              <Image src={comp2} className={styles.comp_images} />
            </div>
            <div className={styles.slide}>
              <Image src={comp3} className={styles.comp_images} />
            </div>
            <div className={styles.slide}>
              <Image src={comp4} className={styles.comp_images} />
            </div>
            <div className={styles.slide}>
              <Image src={comp5} className={styles.comp_images} />
            </div>
            <div className={styles.slide}>
              <Image src={comp1} className={styles.comp_images} />
            </div>
            <div className={styles.slide}>
              <Image src={comp2} className={styles.comp_images} />
            </div>
            <div className={styles.slide}>
              <Image src={comp3} className={styles.comp_images} />
            </div>
            <div className={styles.slide}>
              <Image src={comp4} className={styles.comp_images} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
