import Heading from "../common/Heading/Heading";
import TutorCard from "../common/TutorCard/TutorCard";
import styles from "./Tutors.module.css";
import { TutorsData } from "./TutorsData";

const Tutors = () => {
  return (
    <>
      <div className={styles.tutor_section} id="tutors">
        <Heading
          para1={"Tutors"}
          heading={"Meet the Heroes"}
          para2={
            "On Ed-Circle, instructors from all over the world instruct millions of students. We offer the knowledge and abilities."
          }
        />

        <div className={styles.tutors}>
          {TutorsData.map((tutor) => {
            return (
              <TutorCard
                name={tutor.name}
                designation={tutor.designation}
                bio={tutor.bio}
                image={tutor.image}
                twitter={tutor.twitter}
                linkedin={tutor.linkedin}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Tutors;
