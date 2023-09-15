import styles from "./TutorCard.module.css";
import Image from "next/image";
import linkedinImage from "../../../../public/assets/tutorCard/linkedin.png";
import twitterImage from "../../../../public/assets/tutorCard/twitter.png";
const TutorCard = ({ name, designation, bio, image, twitter, linkedin }) => {
  return (
    <>
      <div className={styles.tutor_card}>
        <div className={styles.tutor_image_container}>
          <Image
            src={image}
            width={340}
            height={240}
            className={styles.tutor_image}
          />
        </div>
        <h1 className={styles.tutor_name}>{name}</h1>
        <h2 className={styles.tutor_designation}>{designation}</h2>
        <p className={styles.tutor_bio}>{bio}</p>

        <div className={styles.tutor_socials}>
          <a href={twitter} target="_blank">
            <Image src={twitterImage} className={styles.social_logo} />
          </a>
          <a href={linkedin} target="_blank">
            <Image src={linkedinImage} className={styles.social_logo} />
          </a>
        </div>
      </div>
    </>
  );
};

export default TutorCard;
