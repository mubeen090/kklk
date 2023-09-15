import styles from "./Heading.module.css";
const Heading = ({ para1, heading, para2 }) => {
  return (
    <>
      <div className={styles.heading_container}>
        <p className={styles.para1}>{para1}</p>
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.para2}>{para2}</p>
      </div>
    </>
  );
};

export default Heading;
